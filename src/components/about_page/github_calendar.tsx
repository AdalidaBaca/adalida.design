import React, { useEffect, useMemo, useRef, useState } from 'react'

import Section from './section'

const GITHUB_USERNAME = 'adalidabaca'

type ApiDay = {
  date: string // YYYY-MM-DD
  count: number
}

type ApiResponse = {
  contributions: ApiDay[]
}

const levelFromCount = (count: number, max: number): number => {
  if (count <= 0 || max <= 0) return 0
  const t = count / max
  if (t <= 0.2) return 1
  if (t <= 0.4) return 2
  if (t <= 0.7) return 3
  return 4
}

const GitHubCalendar = (): JSX.Element => {
  const [days, setDays] = useState<Array<ApiDay & { level: number }> | null>(null)
  const [error, setError] = useState<string | null>(null)
  const total = useMemo(() => (days ?? []).reduce((sum, d) => sum + d.count, 0), [days])
  const gridRef = useRef<HTMLDivElement>(null)
  const didAutoScroll = useRef(false)

  const apiUrl = useMemo(
    () => `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`,
    []
  )

  useEffect(() => {
    let alive = true
    const load = async (): Promise<void> => {
      try {
        const res = await fetch(apiUrl, { headers: { Accept: 'application/json' } })
        if (!res.ok) throw new Error(`Request failed (${res.status})`)
        const data = (await res.json()) as ApiResponse
        if (!alive) return
        const max = data.contributions.reduce((m, d) => Math.max(m, d.count), 0)
        setDays(data.contributions.map((d) => ({ ...d, level: levelFromCount(d.count, max) })))
      } catch (e) {
        if (!alive) return
        setError(e instanceof Error ? e.message : 'Failed to load GitHub contributions')
      }
    }
    void load()
    return () => { alive = false }
  }, [apiUrl])

  useEffect(() => {
    if (days === null) return
    if (didAutoScroll.current) return
    // After initial render, scroll to the far right (most recent weeks), like GitHub.
    const raf = requestAnimationFrame(() => {
      const el = gridRef.current
      if (el === null) return
      el.scrollLeft = Math.max(0, el.scrollWidth - el.clientWidth)
      didAutoScroll.current = true
    })
    return () => { cancelAnimationFrame(raf) }
  }, [days])

  return (
    <Section title='Contributions'>
      <div className='resource-intro'>
        Staying close to implementation helps me validate ideas quickly and understand how systems behave in practice.
      </div>
      <div className='github-calendar'>
        <div className='github-calendar-header'>
          <div className='github-calendar-meta'>
            <div className='caption-1 github-calendar-count'>
              {days === null && error === null ? 'Loading contributions…' : `${total.toLocaleString()} contributions in the last year`}
            </div>
          </div>
          <a
            className='github-calendar-link'
            href={`https://github.com/${GITHUB_USERNAME}`}
            target='_blank'
            rel='noreferrer'
          >
            View on GitHub
          </a>
        </div>

        {error !== null ? (
          <div className='github-calendar-error' role='status'>
            Couldn’t load contributions ({error}).
          </div>
        ) : null}

        {/* loading state is shown inline in the header count */}

        {days !== null ? (
          <div
            className='github-calendar-grid'
            role='img'
            aria-label={`${GITHUB_USERNAME} GitHub contributions calendar (last 12 months)`}
            ref={gridRef}
          >
            {days.map((d) => (
              <div
                key={d.date}
                className='cell'
                data-level={d.level}
                title={`${d.count} contributions on ${d.date}`}
                aria-label={`${d.count} contributions on ${d.date}`}
              />
            ))}
          </div>
        ) : null}

        <div className='github-calendar-legend' aria-label='Contribution intensity legend'>
          <span className='legend-label'>Less</span>
          <div className='legend-cells' aria-hidden='true'>
            <span className='cell' data-level='0' />
            <span className='cell' data-level='1' />
            <span className='cell' data-level='2' />
            <span className='cell' data-level='3' />
            <span className='cell' data-level='4' />
          </div>
          <span className='legend-label'>More</span>
        </div>
      </div>
    </Section>
  )
}

export default GitHubCalendar

