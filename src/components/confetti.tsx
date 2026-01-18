import type { Container } from '@tsparticles/engine'
import { loadConfettiPreset } from '@tsparticles/preset-confetti'
import Particles from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useCallback, useEffect, useRef, useState } from 'react'

interface Props {
  trigger: boolean
  onComplete?: () => void
}

// Initialize engine globally once
let engineInitialized = false
const initEngine = async (): Promise<void> => {
  if (!engineInitialized && typeof window !== 'undefined') {
    const { tsParticles } = await import('@tsparticles/engine')
    await loadSlim(tsParticles)
    await loadConfettiPreset(tsParticles)
    engineInitialized = true
  }
}

// Initialize on module load
if (typeof window !== 'undefined') {
  // biome-ignore lint/suspicious/noConsole: catch block requires error logging
  initEngine().catch(console.error)
}

const Confetti = ({ trigger, onComplete }: Props): JSX.Element | null => {
  const [key, setKey] = useState(0)
  const [shouldRender, setShouldRender] = useState(false)
  const [emitterPosition, setEmitterPosition] = useState({ x: 50, y: 50 })
  const [_isDarkMode, setIsDarkMode] = useState(false)
  const accentColorRef = useRef<string>('#FCD8FF')
  const hasTriggeredRef = useRef(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<Container | null>(null)

  // Accent colors matching the "Product Builder" text
  const getAccentColor = (): string => {
    if (typeof document !== 'undefined') {
      // Check body element for dark class (as set by useDarkMode hook)
      const darkMode =
        document.body?.classList.contains('dark') ||
        document.documentElement.classList.contains('dark') ||
        document.querySelector('.dark') !== null
      return darkMode ? '#5AC8FA' : '#4A9EFF' // Apple-inspired blue accent colors
    }
    return '#4A9EFF'
  }
  const _accentColor = getAccentColor()

  const particlesLoaded = useCallback(async (container?: Container): Promise<void> => {
    // Store container reference for cleanup
    if (container) {
      containerRef.current = container
    }
  }, [])

  // Check for dark mode - only update color, don't trigger confetti
  useEffect(() => {
    const checkDarkMode = (): void => {
      if (typeof document !== 'undefined') {
        const darkMode =
          document.body?.classList.contains('dark') ||
          document.documentElement.classList.contains('dark') ||
          document.querySelector('.dark') !== null
        setIsDarkMode(darkMode)
        // Only update color if confetti hasn't been triggered yet
        // Once triggered, keep the original color
        if (!hasTriggeredRef.current) {
          accentColorRef.current = darkMode ? '#5AC8FA' : '#4A9EFF' // Apple-inspired blue accent colors
        }
      }
    }

    checkDarkMode()

    // Watch for dark mode changes on body element
    const observer = new MutationObserver(checkDarkMode)
    if (typeof document !== 'undefined' && document.body) {
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
      })
      // Also observe documentElement in case it changes
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['class']
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Set emitter position to center of viewport - always center, no sourceElement logic
  useEffect(() => {
    // Always center, set immediately
    setEmitterPosition({ x: 50, y: 50 })
  }, [])

  useEffect(() => {
    // Only trigger once - never toggle off
    if (trigger && !hasTriggeredRef.current) {
      // Check dark mode directly right before triggering to ensure correct color
      // Check body element first (as set by useDarkMode hook), then fallback to documentElement
      const darkMode =
        typeof document !== 'undefined'
          ? document.body?.classList.contains('dark') ||
            document.documentElement.classList.contains('dark') ||
            document.querySelector('.dark') !== null
          : false
      setIsDarkMode(darkMode)
      accentColorRef.current = darkMode ? '#5AC8FA' : '#4A9EFF' // Apple-inspired blue accent colors
      hasTriggeredRef.current = true
      setShouldRender(true)
      setKey(prev => prev + 1) // Force re-render with new key

      // Call onComplete after a short delay to signal animation started
      // But don't destroy particles - let them stay
      timeoutRef.current = setTimeout(() => {
        onComplete?.()
      }, 100)
    }
  }, [trigger, onComplete])

  if (!shouldRender) {
    return null
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
    >
      <Particles
        key={key}
        id={`confetti-particles-${key}`}
        particlesLoaded={particlesLoaded}
        options={{
          preset: 'confetti',
          particles: {
            color: {
              value: accentColorRef.current
            },
            opacity: {
              value: { min: 0.8, max: 1 },
              animation: {
                enable: true,
                speed: 0.3,
                sync: false,
                destroy: 'none',
                startValue: 'max'
              }
            },
            life: {
              duration: {
                sync: false,
                value: { min: 3, max: 5 }
              }
            }
          },
          emitters: [
            {
              position: {
                x: emitterPosition.x,
                y: emitterPosition.y
              },
              rate: {
                quantity: 0
              },
              life: {
                duration: {
                  sync: true,
                  value: 0
                },
                count: 1
              },
              startCount: 120,
              spawnColor: {
                value: accentColorRef.current
              }
            }
          ]
        }}
      />
    </div>
  )
}

export default Confetti
