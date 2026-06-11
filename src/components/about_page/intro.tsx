import BadgeButton from 'components/badge_button'
import { makeMediaTag } from 'components/media_with_text'
import useResolveFile from 'queries/file'

const AdalidaFace = 'images/about/adalida avatar.png'

const Intro = (): JSX.Element | null => {
  const resolveFile = useResolveFile()

  let resumeUrl = 'https://www.linkedin.com/in/adalidabaca/'
  let faceUrl: string | undefined
  try {
    resumeUrl = resolveFile('resume.pdf').publicURL
  } catch {
    // Fallback to LinkedIn if resume.pdf is not found
  }
  try {
    faceUrl = resolveFile(AdalidaFace).publicURL
  } catch {
    faceUrl = undefined
  }

  return (
    <header className="about-intro" data-aos="fade-up">
      <div className="about-intro-inner">
        <div className="about-intro-photo">
          {faceUrl !== undefined ? (
            <div
              className="about-intro-frame has-bg"
              style={{ backgroundImage: `url(${faceUrl})` }}
              role="img"
              aria-label="Adalida Baca portrait"
            />
          ) : (
            <div className="about-intro-frame">
              {makeMediaTag({
                media: AdalidaFace,
                imgObjectFit: 'cover',
                imgObjectPosition: 'center top',
                style: { width: '100%', height: '100%' }
              })}
            </div>
          )}
        </div>

        <div className="about-intro-headline">
          <p className="about-intro-role">Product builder</p>
          <h1 className="about-intro-name">Adalida B.</h1>
        </div>

        <ul className="about-intro-signals" aria-label="Focus areas">
          <li>0→1 Builder</li>
          <li>Systems Thinking</li>
          <li>Solutions Architect</li>
        </ul>

        <p className="about-intro-lead">
          I make the logic of a system explicit: how structure shapes interpretation, action, and breakdown. Before
          building, I start with the data and constraints you have: what&apos;s available, what&apos;s missing, and what
          the system needs to support.
        </p>

        <div className="about-intro-ctas">
          <BadgeButton to="mailto:hi@adalida.design">Email Me</BadgeButton>
          <BadgeButton to={resumeUrl} className="badge-frosted">
            View Resume
          </BadgeButton>
        </div>
      </div>
    </header>
  )
}

export default Intro
