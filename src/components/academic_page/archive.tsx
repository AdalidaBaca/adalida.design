import { IconArrowUpRight } from '@tabler/icons-react'
import {
  ACADEMIC_ENTRIES,
  ACADEMIC_PAGE_SECTIONS,
  type AcademicEntry,
  type AcademicSection,
  academicCourseBadgesInSection,
  academicEntriesBySection,
  academicEntryUrl,
  INTERSECTION_GROUPS,
  type IntersectionGroup,
  intersectionGroupForEntry,
  intersectionGroupsWithEntries
} from 'data/academic_journey'
import { useResolvePdfUrl } from 'queries/file'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const SECTION_IDS = new Set(ACADEMIC_PAGE_SECTIONS.map(section => section.id))

const resolveHashTarget = (hash: string): { section: AcademicSection; entryId?: string } | null => {
  if (hash === '') {
    return null
  }
  if (SECTION_IDS.has(hash as AcademicSection)) {
    return { section: hash as AcademicSection }
  }
  const entry = ACADEMIC_ENTRIES.find(item => item.id === hash)
  if (entry !== undefined) {
    return { section: entry.section, entryId: entry.id }
  }
  return null
}

const AcademicListItem = ({
  entry,
  resolvePdf
}: {
  entry: AcademicEntry
  resolvePdf: (pdfPath: string) => string | undefined
}): JSX.Element => {
  const url = academicEntryUrl(entry, resolvePdf)
  const isExternal = url !== undefined && /^https?:/.test(url)

  const content = (
    <>
      <div className="academic-list-meta">
        {entry.courseBadge !== undefined && <span className="academic-list-badge">{entry.courseBadge}</span>}
        <span className="academic-list-topic">{entry.classTopic}</span>
      </div>
      <div className="academic-list-main">
        <span className="academic-list-title">{entry.title}</span>
      </div>
      <span className="academic-list-action" aria-hidden>
        <IconArrowUpRight size={17} strokeWidth={1.75} />
      </span>
    </>
  )

  if (url === undefined) {
    return (
      <li className="academic-list-item is-static" id={entry.id}>
        <div className="academic-list-row">{content}</div>
      </li>
    )
  }

  if (isExternal || entry.type === 'pdf') {
    return (
      <li className="academic-list-item" id={entry.id}>
        <a className="academic-list-row" href={url} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </li>
    )
  }

  return (
    <li className="academic-list-item" id={entry.id}>
      <a className="academic-list-row" href={url}>
        {content}
      </a>
    </li>
  )
}

const AcademicList = ({
  entries,
  label,
  resolvePdf
}: {
  entries: AcademicEntry[]
  label: string
  resolvePdf: (pdfPath: string) => string | undefined
}): JSX.Element => (
  <ul className="academic-list" aria-label={label}>
    {entries.map(entry => (
      <AcademicListItem key={entry.id} entry={entry} resolvePdf={resolvePdf} />
    ))}
  </ul>
)

const AcademicIntersectionPanel = ({
  entries,
  activeGroup,
  resolvePdf
}: {
  entries: AcademicEntry[]
  activeGroup: IntersectionGroup | 'all'
  resolvePdf: (pdfPath: string) => string | undefined
}): JSX.Element => {
  const groups = useMemo(() => intersectionGroupsWithEntries(entries), [entries])
  const visibleGroups = activeGroup === 'all' ? groups : groups.filter(group => group.id === activeGroup)

  return (
    <div className="academic-intersection-groups">
      {visibleGroups.map(group => (
        <section key={group.id} className="academic-intersection-group">
          <h3 className="academic-intersection-heading">{group.title}</h3>
          <AcademicList entries={group.entries} resolvePdf={resolvePdf} label={group.title} />
        </section>
      ))}
    </div>
  )
}

const AcademicArchive = (): JSX.Element | null => {
  const resolvePdf = useResolvePdfUrl()
  const contentRef = useRef<HTMLDivElement>(null)
  const pendingEntryRef = useRef<string | undefined>(undefined)
  const sections = useMemo(() => [...ACADEMIC_PAGE_SECTIONS].sort((a, b) => a.order - b.order), [])
  const [activeSection, setActiveSection] = useState<AcademicSection>(sections[0]?.id ?? 'philosophy')
  const [activeCourse, setActiveCourse] = useState<string>('all')
  const [activeIntersectionGroup, setActiveIntersectionGroup] = useState<IntersectionGroup | 'all'>('all')

  const activeIndex = Math.max(
    0,
    sections.findIndex(section => section.id === activeSection)
  )
  const activeConfig = sections.find(section => section.id === activeSection) ?? sections[0]
  const sectionEntries = academicEntriesBySection(activeSection)
  const courseBadges = useMemo(() => academicCourseBadgesInSection(activeSection), [activeSection])
  const entries =
    activeSection === 'intersection'
      ? activeIntersectionGroup === 'all'
        ? sectionEntries
        : sectionEntries.filter(entry => intersectionGroupForEntry(entry) === activeIntersectionGroup)
      : activeCourse === 'all'
        ? sectionEntries
        : sectionEntries.filter(entry => entry.courseBadge === activeCourse)

  const intersectionGroupFilters = useMemo(
    () =>
      INTERSECTION_GROUPS.filter(group =>
        academicEntriesBySection('intersection').some(entry => intersectionGroupForEntry(entry) === group.id)
      ),
    []
  )

  const scrollToEntry = useCallback((entryId: string) => {
    const element = document.getElementById(entryId)
    if (element === null) {
      return
    }
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [])

  useEffect(() => {
    const target = resolveHashTarget(window.location.hash.replace('#', ''))
    if (target === null) {
      return
    }
    setActiveSection(target.section)
    if (target.entryId !== undefined) {
      const entry = ACADEMIC_ENTRIES.find(item => item.id === target.entryId)
      if (entry?.section === 'intersection') {
        setActiveIntersectionGroup(intersectionGroupForEntry(entry))
      } else if (entry?.courseBadge !== undefined) {
        setActiveCourse(entry.courseBadge)
      }
      pendingEntryRef.current = target.entryId
    }
  }, [])

  useEffect(() => {
    const entryId = pendingEntryRef.current
    if (entryId === undefined) {
      return
    }
    pendingEntryRef.current = undefined
    requestAnimationFrame(() => {
      scrollToEntry(entryId)
    })
  }, [scrollToEntry])

  const handleSectionChange = (section: AcademicSection): void => {
    setActiveSection(section)
    setActiveCourse('all')
    setActiveIntersectionGroup('all')
    window.history.replaceState(null, '', `/academic#${section}`)
    contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  if (activeConfig === undefined) {
    return null
  }

  return (
    <div className="academic-archive">
      <div className="academic-tabs" role="tablist" aria-label="Academic sections">
        <div
          className="academic-tabs-indicator"
          style={{ transform: `translateX(${activeIndex * 100}%)` }}
          aria-hidden
        />
        {sections.map(section => (
          <button
            key={section.id}
            type="button"
            role="tab"
            id={`academic-tab-${section.id}`}
            aria-selected={activeSection === section.id}
            aria-controls={`academic-panel-${section.id}`}
            className={`academic-tab${activeSection === section.id ? ' is-active' : ''}`}
            onClick={() => {
              handleSectionChange(section.id)
            }}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div
        className="academic-tab-panel"
        ref={contentRef}
        role="tabpanel"
        id={`academic-panel-${activeSection}`}
        aria-labelledby={`academic-tab-${activeSection}`}
      >
        <header className="academic-tab-header">
          <div className="academic-tab-heading">
            <h2 className="academic-tab-title">{activeConfig.title}</h2>
            <span className="academic-tab-count">
              {sectionEntries.length} {sectionEntries.length === 1 ? 'item' : 'items'}
            </span>
          </div>
          {activeConfig.subtitle !== undefined && activeConfig.subtitle !== '' ? (
            <p className="academic-tab-subtitle">{activeConfig.subtitle}</p>
          ) : null}
        </header>

        {activeSection !== 'intersection' && courseBadges.length > 1 && (
          // biome-ignore lint/a11y/useSemanticElements: fieldset/legend would require restyling; role="group" with aria-label is valid ARIA for a filter button group
          <div className="academic-course-filters" role="group" aria-label="Filter by course">
            <button
              type="button"
              className={`academic-course-filter${activeCourse === 'all' ? ' is-active' : ''}`}
              onClick={() => {
                setActiveCourse('all')
              }}
            >
              All courses
            </button>
            {courseBadges.map(badge => (
              <button
                key={badge}
                type="button"
                className={`academic-course-filter${activeCourse === badge ? ' is-active' : ''}`}
                onClick={() => {
                  setActiveCourse(badge)
                }}
              >
                {badge}
              </button>
            ))}
          </div>
        )}

        {activeSection === 'intersection' && intersectionGroupFilters.length > 1 && (
          // biome-ignore lint/a11y/useSemanticElements: fieldset/legend would require restyling; role="group" with aria-label is valid ARIA for a filter button group
          <div className="academic-course-filters" role="group" aria-label="Filter by category">
            <button
              type="button"
              className={`academic-course-filter${activeIntersectionGroup === 'all' ? ' is-active' : ''}`}
              onClick={() => {
                setActiveIntersectionGroup('all')
              }}
            >
              All
            </button>
            {intersectionGroupFilters.map(group => (
              <button
                key={group.id}
                type="button"
                className={`academic-course-filter${activeIntersectionGroup === group.id ? ' is-active' : ''}`}
                onClick={() => {
                  setActiveIntersectionGroup(group.id)
                }}
              >
                {group.title}
              </button>
            ))}
          </div>
        )}

        {activeSection === 'intersection' ? (
          <AcademicIntersectionPanel entries={entries} activeGroup={activeIntersectionGroup} resolvePdf={resolvePdf} />
        ) : (
          <AcademicList entries={entries} resolvePdf={resolvePdf} label={activeConfig.title} />
        )}
      </div>
    </div>
  )
}

export default AcademicArchive
