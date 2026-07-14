import { IconArrowNarrowRight } from '@tabler/icons-react'
import {
  ABOUT_ACADEMIC_PREVIEW_ENTRIES,
  type AcademicEntry,
  academicEntryUrl,
  academicPreviewImage
} from 'data/academic_journey'
import { Link } from 'gatsby'
import { useResolvePdfUrl } from 'queries/file'

const previewHref = (entry: AcademicEntry, resolvePdf: (pdfPath: string) => string | undefined): string =>
  academicEntryUrl(entry, resolvePdf) ?? `/academic#${entry.id}`

const AcademicPreviewCarousel = (): JSX.Element => {
  const resolvePdf = useResolvePdfUrl()

  return (
    <ul className="foundations-cards" aria-label="Foundations previews">
      {ABOUT_ACADEMIC_PREVIEW_ENTRIES.map(entry => {
        const previewSrc = academicPreviewImage(entry)
        const href = previewHref(entry, resolvePdf)
        const opensInNewTab = entry.type === 'pdf' || href.startsWith('http')

        const card = (
          <>
            <div className="foundations-card-media">
              {previewSrc !== undefined ? (
                <img
                  src={previewSrc}
                  alt={`First page preview of ${entry.documentTitle ?? entry.title}`}
                  className="foundations-card-image"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <div className="foundations-card-fallback" aria-hidden>
                  <span>{entry.classTopic}</span>
                </div>
              )}
            </div>
            <div className="foundations-card-body">
              <div className="foundations-card-copy">
                {entry.courseBadge !== undefined && <p className="foundations-card-course">{entry.courseBadge}</p>}
                <p className="foundations-card-title">{entry.title}</p>
                <p className="foundations-card-topic">{entry.classTopic}</p>
              </div>
              <div className="foundations-card-footer">
                <span className="foundations-card-action">Read paper</span>
                <IconArrowNarrowRight className="foundations-card-arrow" size={18} strokeWidth={1.5} aria-hidden />
              </div>
            </div>
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
