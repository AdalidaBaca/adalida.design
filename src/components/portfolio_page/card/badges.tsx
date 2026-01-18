import type { Project } from 'projects'
import { useEffect, useRef, useState } from 'react'

const Badges = ({ project }: { project: Project }): React.ReactElement | null => {
  const { badges } = project
  const containerRef = useRef<HTMLDivElement>(null)
  const [visibleBadges, setVisibleBadges] = useState<number>(badges.length)

  useEffect(() => {
    const updateVisibleBadges = (): void => {
      if (containerRef.current === null) {
        return
      }

      const container = containerRef.current
      const containerWidth = container.offsetWidth
      const badgeElements = container.children
      let totalWidth = 0
      let count = 0

      for (let i = 0; i < badgeElements.length; i++) {
        const badge = badgeElements[i] as HTMLElement
        const badgeWidth = badge.offsetWidth
        const gap = i > 0 ? parseFloat(getComputedStyle(container).gap) || 0 : 0

        if (totalWidth + badgeWidth + gap <= containerWidth) {
          totalWidth += badgeWidth + gap
          count++
        } else {
          break
        }
      }

      setVisibleBadges(count)
    }

    updateVisibleBadges()
    window.addEventListener('resize', updateVisibleBadges)

    return () => {
      window.removeEventListener('resize', updateVisibleBadges)
    }
  }, [])

  if (badges.length === 0) {
    return null
  }

  return (
    <div className="badge-list" ref={containerRef}>
      {badges.slice(0, visibleBadges).map(badge => (
        <div className="badge caption-1" key={badge}>
          {badge}
        </div>
      ))}
    </div>
  )
}

export default Badges
