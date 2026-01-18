import { IconExternalLink } from '@tabler/icons-react'
import { forwardRef, type Ref } from 'react'

const EMBED_URL = 'https://charming-dragon-1eceea.netlify.app/'

const Upset = forwardRef((_props: Record<never, never>, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <div data-aos="fade-up" className="case-study-top-to-bottom project-echo-upset-section" ref={ref}>
      <div className="project-echo-details-card project-echo-upset-card">
        <div className="upset-iframe-container">
          <iframe src={EMBED_URL} title="Upset" />
          <a className="external-link" href={EMBED_URL} target="_blank" rel="noopener noreferrer">
            <IconExternalLink size="10dvh" />
          </a>
        </div>
      </div>
    </div>
  )
})

Upset.displayName = 'Upset'

export default Upset
