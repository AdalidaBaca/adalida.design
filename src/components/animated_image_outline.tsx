import React, { useEffect, useId, useMemo, useRef, useState } from 'react'

interface Gradient {
  from: string
  to: string
  /** Optional middle stop for a richer stroke */
  via?: string
  /** Angle in degrees (0 = left→right). Default 135. */
  angleDeg?: number
}

interface Props {
  /** Animation duration in seconds (lower = faster). */
  speed?: number
  /** Stroke width in px. */
  strokeWidth?: number
  /** Corner radius in px (should match the container radius). */
  radius?: number
  /** Animation style. 'draw' = stroke reveals once and stays; 'travel' = moving accent segment. */
  mode?: 'draw' | 'travel'
  /** When mode='draw', if true the draw timing favors each side sequentially (top→right→bottom→left) while staying continuous. */
  sequential?: boolean
  /** Solid stroke color (ignored if gradient is provided). */
  color?: string
  /** Optional gradient stroke. */
  gradient?: Gradient
  /** Where the drawing should start. Default: 'top-left' */
  start?: 'top-left'
  /** Fraction of the perimeter visible as the traveling segment (0..1). Default 0.22 */
  segmentFraction?: number
  /** If true, clips children to radius (useful when wrapping a raw <img>). Default true. */
  clipContent?: boolean
  /** Extra className on wrapper. */
  className?: string
  /** The static image/content to outline. */
  children: React.ReactNode
}

/**
 * Wraps static content with an animated SVG outline.
 * Default animation: a single continuous line that "draws" around the perimeter,
 * then restarts at the top-left (Google spinner-ish).
 */
export const AnimatedImageOutline = ({
  speed = 1.8,
  strokeWidth = 3,
  radius = 18,
  mode = 'travel',
  start = 'top-left',
  sequential = false,
  segmentFraction = 0.22,
  clipContent = true,
  color = 'currentColor',
  gradient,
  className,
  children
}: Props): JSX.Element => {
  const id = useId()
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const rectRef = useRef<SVGRectElement>(null)
  const [size, setSize] = useState<{ w: number, h: number } | null>(null)
  const [pathLen, setPathLen] = useState<number | null>(null)
  const [animPerimeter, setAnimPerimeter] = useState<number | null>(null)
  const [run, setRun] = useState(false)

  const stroke = gradient ? `url(#grad-${id})` : color
  const angle = gradient?.angleDeg ?? 135
  const rad = (angle * Math.PI) / 180
  // unit vector mapped into [0,1] for SVG gradient coords
  const x2 = 0.5 + 0.5 * Math.cos(rad)
  const y2 = 0.5 + 0.5 * Math.sin(rad)

  // Keep the stroke on the OUTSIDE: overlay is expanded by ~strokeWidth, so compute
  // the SVG corner radius in viewBox units based on the *rendered* box size.
  const outlineRadiusPx = radius + strokeWidth / 2
  const rxRy = useMemo(() => {
    if (size === null || size.w <= 0 || size.h <= 0) return null
    const outerW = size.w + strokeWidth
    const outerH = size.h + strokeWidth
    const rx = (outlineRadiusPx * 100) / outerW
    const ry = (outlineRadiusPx * 100) / outerH
    return { rx, ry }
  }, [outlineRadiusPx, size, strokeWidth])

  // Fallback perimeter if getTotalLength() is unavailable (can happen on some mobile browsers).
  const approxPerimeter = useMemo(() => {
    if (rxRy === null) return null
    const w = 100
    const h = 100
    const r = Math.max(0, Math.min(rxRy.rx, rxRy.ry))
    return 2 * (w + h - 2 * r) + 2 * Math.PI * r
  }, [rxRy])

  // Use the REAL rendered path length when available.
  useEffect(() => {
    const el = rectRef.current
    if (el === null) return
    try {
      const len = el.getTotalLength()
      if (Number.isFinite(len) && len > 0) setPathLen(len)
      else if (approxPerimeter !== null) setPathLen(approxPerimeter)
    } catch {
      if (approxPerimeter !== null) setPathLen(approxPerimeter)
    }
  }, [rxRy, strokeWidth, approxPerimeter])

  // IMPORTANT: freeze the perimeter used for dash animation to avoid "jumping" when the
  // measured SVG length updates after the animation has started (especially on mobile).
  useEffect(() => {
    if (animPerimeter !== null) return
    if (approxPerimeter === null && pathLen === null) return
    // Prefer the approx perimeter derived from the rendered box (stable), otherwise use measured length.
    setAnimPerimeter(approxPerimeter ?? pathLen ?? 400)
  }, [animPerimeter, approxPerimeter, pathLen])

  const perimeter = animPerimeter ?? approxPerimeter ?? pathLen ?? 400

  // Start animation one paint after we have a stable perimeter to avoid "jump to completion".
  useEffect(() => {
    if (animPerimeter === null) return
    setRun(false)
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => { setRun(true) })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      return () => {}
    })
    return () => { cancelAnimationFrame(raf1) }
  }, [animPerimeter])

  // For sequential draw timing we precompute checkpoint dashoffset values in JS
  // so CSS doesn't need calc() (which is finicky on SVG properties in some browsers).
  const seqVars = useMemo(() => {
    const p = perimeter
    const q = p / 4
    // "approach" values slightly before each corner to create a smooth turn.
    const a = 0.96
    return {
      start: p,
      a1: p - q * a,
      d1: p - q,
      a2: p - 2 * q * a,
      d2: p - 2 * q,
      a3: p - 3 * q * a,
      d3: p - 3 * q,
      end: 0
    }
  }, [perimeter])

  const clampedFraction = Math.max(0.04, Math.min(0.6, segmentFraction))
  const segLen = perimeter * clampedFraction
  const gapLen = Math.max(0, perimeter - segLen)

  // "Spinner" travel: a single segment travels around the border and loops.
  // Start at the rect's path start (near top-left). (We keep `start` for API clarity.)
  const dashFrom = start === 'top-left' ? 0 : 0
  const dashTo = dashFrom - perimeter

  useEffect(() => {
    if (typeof window === 'undefined') return
    const el = wrapperRef.current
    if (el === null) return
    const update = (): void => {
      const rect = el.getBoundingClientRect()
      setSize({ w: rect.width, h: rect.height })
    }
    update()
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', update)
      return () => { window.removeEventListener('resize', update) }
    }
    const ro = new ResizeObserver(() => { update() })
    ro.observe(el)
    return () => { ro.disconnect() }
  }, [])

  return (
    <span
      className={`animated-image-outline${animPerimeter !== null ? ' ready' : ''}${run ? ' run' : ''} ${mode}${sequential ? ' seq' : ''}${clipContent ? '' : ' no-clip'}${className ? ` ${className}` : ''}`}
      ref={wrapperRef}
      style={
        {
          // used by CSS animation + sizing
          ['--aio-speed' as any]: `${speed}s`,
          ['--aio-strokeWidth' as any]: `${strokeWidth}px`,
          ['--aio-radius' as any]: `${radius}px`,
          ['--aio-perimeter' as any]: perimeter,
          // tiny epsilon (in path units) so the draw stroke never "snaps" on the final frame
          ['--aio-eps' as any]: Math.max(1.5, perimeter * 0.004),
          // dash animation values (avoid calc() parsing issues in SVG/CSS)
          ['--aio-dash-from' as any]: dashFrom,
          ['--aio-dash-to' as any]: dashTo,
          // sequential draw checkpoints
          ['--aio-seq-start' as any]: seqVars.start,
          ['--aio-seq-a1' as any]: seqVars.a1,
          ['--aio-seq-d1' as any]: seqVars.d1,
          ['--aio-seq-a2' as any]: seqVars.a2,
          ['--aio-seq-d2' as any]: seqVars.d2,
          ['--aio-seq-a3' as any]: seqVars.a3,
          ['--aio-seq-d3' as any]: seqVars.d3
        } as React.CSSProperties
      }
    >
      <span className='aio-content'>{children}</span>
      <svg className='aio-overlay' viewBox='0 0 100 100' preserveAspectRatio='none' aria-hidden='true'>
        {gradient ? (
          <defs>
            <linearGradient id={`grad-${id}`} x1='0.5' y1='0.5' x2={x2} y2={y2}>
              <stop offset='0%' stopColor={gradient.from} />
              {gradient.via ? <stop offset='55%' stopColor={gradient.via} /> : null}
              <stop offset='100%' stopColor={gradient.to} />
            </linearGradient>
          </defs>
        ) : null}
        {mode === 'draw' ? (
          <>
            <rect
              className='aio-rect draw-base'
              x='0'
              y='0'
              width='100'
              height='100'
              rx={rxRy?.rx ?? 18}
              ry={rxRy?.ry ?? 18}
              fill='none'
              stroke={stroke}
              strokeWidth={strokeWidth}
              vectorEffect='non-scaling-stroke'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeDasharray='none'
              strokeDashoffset={0}
            />
            <rect
              className='aio-rect draw-anim'
              ref={rectRef}
              x='0'
              y='0'
              width='100'
              height='100'
              rx={rxRy?.rx ?? 18}
              ry={rxRy?.ry ?? 18}
              fill='none'
              stroke={stroke}
              strokeWidth={strokeWidth}
              vectorEffect='non-scaling-stroke'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeDasharray={perimeter}
              strokeDashoffset={perimeter}
            />
          </>
        ) : (
          <>
            <rect
              className='aio-rect base'
              ref={rectRef}
              x='0'
              y='0'
              width='100'
              height='100'
              rx={rxRy?.rx ?? 18}
              ry={rxRy?.ry ?? 18}
              fill='none'
              stroke={stroke}
              strokeWidth={strokeWidth}
              vectorEffect='non-scaling-stroke'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeDasharray='none'
              strokeDashoffset={0}
            />
            <rect
              className='aio-rect anim'
              x='0'
              y='0'
              width='100'
              height='100'
              rx={rxRy?.rx ?? 18}
              ry={rxRy?.ry ?? 18}
              fill='none'
              stroke={stroke}
              strokeWidth={strokeWidth}
              vectorEffect='non-scaling-stroke'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeDasharray={`${segLen} ${gapLen}`}
              strokeDashoffset={dashFrom}
            />
          </>
        )}
      </svg>
    </span>
  )
}

export default AnimatedImageOutline
