import { IconArrowNarrowRight, IconBrain, IconContrast, IconMathFunction } from '@tabler/icons-react'
import { ABOUT_ACADEMIC_PREVIEW_ENTRIES, type AcademicEntry, academicEntryUrl } from 'data/academic_journey'
import { Link } from 'gatsby'
import { useResolvePdfUrl } from 'queries/file'

type PaperIcon = typeof IconMathFunction

const previewHref = (entry: AcademicEntry, resolvePdf: (pdfPath: string) => string | undefined): string =>
  academicEntryUrl(entry, resolvePdf) ?? `/academic#${entry.id}`

const iconForEntry = (entryId: string): PaperIcon => {
  switch (entryId) {
    case 'phil-415-final-exam':
      return IconMathFunction
    case 'philosophy-of-mind-building-block':
      return IconBrain
    case 'binary-opposition-essay':
      return IconContrast
    default:
      throw new Error(`No icon mapped for foundations entry: ${entryId}`)
  }
}

const AcademicPreviewCarousel = (): JSX.Element => {
  const resolvePdf = useResolvePdfUrl()

  return (
    <ul className="foundations-cards" aria-label="Foundations papers">
      {ABOUT_ACADEMIC_PREVIEW_ENTRIES.map(entry => {
        const href = previewHref(entry, resolvePdf)
        const opensInNewTab = entry.type === 'pdf' || href.startsWith('http')
        const PaperIcon = iconForEntry(entry.id)

        const card = (
          <>
            <span className="foundations-card-icon" aria-hidden>
              <PaperIcon size={22} strokeWidth={1.5} />
            </span>
            <span className="foundations-card-body">
              {entry.courseBadge !== undefined && <span className="foundations-card-course">{entry.courseBadge}</span>}
              <span className="foundations-card-title">{entry.title}</span>
              <span className="foundations-card-topic">{entry.classTopic}</span>
            </span>
            <span className="foundations-card-footer">
              <span className="foundations-card-action">Read paper</span>
              <IconArrowNarrowRight className="foundations-card-arrow" size={18} strokeWidth={1.5} aria-hidden />
            </span>
          </>
        )

        return (
          <li key={entry.id}>
            {opensInNewTab ? (
              <a className="foundations-card" href={href} target="_blank" rel="noopener noreferrer">
                {card}
              </a>
            ) : (
              <Link className="foundations-card" to={href}>
                {card}
              </Link>
            )}
          </li>
        )
      })}
    </ul>
  )
}

export default AcademicPreviewCarousel
