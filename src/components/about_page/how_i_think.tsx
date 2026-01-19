import BadgeButton from 'components/badge_button'
import ScrollAnimatedText from 'components/scroll_animated_text'
import FileQuery from 'queries/file'
import { useMemo, useRef } from 'react'

import Section from './section'

const HowIThink = (): JSX.Element => {
  const sectionRef = useRef<HTMLDivElement>(null)
  let resumeUrl = 'https://www.linkedin.com/in/adalidabaca/'
  try {
    resumeUrl = FileQuery('resume.pdf').publicURL
  } catch {
    // Fallback to LinkedIn if resume.pdf is not found
  }
  const texts = useMemo(
    () => [
      'I make the logic of a system explicit. How information is structured determines how it is interpreted, what actions people take, and where things break down.',
      'Before designing, I look at the data that already exists and the constraints that shape the work: what is available, what is missing, what can realistically be captured, and what decisions the system needs to support. Budget, technical complexity, team skill level, and time horizon all matter.'
    ],
    []
  )

  const letterCounts = useMemo(() => texts.map(t => t.replace(/\s/g, '').length), [texts])
  const totalLetters = useMemo(() => letterCounts.reduce((a, b) => a + b, 0), [letterCounts])
  const startIndices = useMemo(
    () => letterCounts.map((_, i) => letterCounts.slice(0, i).reduce((a, b) => a + b, 0)),
    [letterCounts]
  )

  return (
    <Section title="My Process">
      <div className="how-i-think" ref={sectionRef}>
        <p>
          <ScrollAnimatedText
            text={texts[0]}
            targetRef={sectionRef}
            startIndex={startIndices[0]}
            totalLetters={totalLetters}
          />
        </p>
        <p>
          <ScrollAnimatedText
            text={texts[1]}
            targetRef={sectionRef}
            startIndex={startIndices[1]}
            totalLetters={totalLetters}
          />
        </p>
        <p>
          <ScrollAnimatedText
            text={texts[2]}
            targetRef={sectionRef}
            startIndex={startIndices[2]}
            totalLetters={totalLetters}
          />
        </p>
        <div className="how-i-think-cta">
          <BadgeButton to={resumeUrl}>VIEW RESUME</BadgeButton>
        </div>
      </div>
    </Section>
  )
}

export default HowIThink
