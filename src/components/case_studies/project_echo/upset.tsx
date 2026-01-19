import { IconExternalLink } from '@tabler/icons-react'
import { forwardRef, type Ref, useEffect, useRef } from 'react'

const EMBED_URL = 'https://charming-dragon-1eceea.netlify.app/'

const Upset = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }

    const observer = new ResizeObserver(entries => {
      for (const entry of entries) {
        const contentWidth = 1080
        const availableWidth = entry.contentRect.width
        const scale = availableWidth / contentWidth
        container.style.setProperty('--scale', scale.toString())
      }
    })

    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom" ref={ref}>
      <div className="project-echo-upset" ref={containerRef}>
        <div className="upset-iframe-container">
          <iframe src={EMBED_URL} title="Upset" scrolling="no" />
          <a className="external-link" href={EMBED_URL} target="_blank" rel="noopener noreferrer">
            <IconExternalLink className="external-link" size="2em" />
          </a>
        </div>
      </div>
    </div>
  )
})

Upset.displayName = 'Upset'

export default Upset
