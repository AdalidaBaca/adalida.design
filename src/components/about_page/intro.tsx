import React, { useContext, useMemo, useRef, useState } from 'react'

import BadgeButton from 'components/badge_button'
import useIsMobile from 'hooks/use_is_mobile'
import { makeMediaTag } from 'components/media_with_text'
import FileQuery from 'queries/file'
import DarkModeContext from 'dark_mode_context'
import { IconPlayerPlayFilled, IconPlayerPauseFilled } from '@tabler/icons-react'

const AdalidaFace = 'images/about/adalida avatar.png'

const Intro = (): JSX.Element | null => {
  const isMobile = useIsMobile()
  const { darkMode } = useContext(DarkModeContext)
  let resumeUrl = 'https://www.linkedin.com/in/adalidabaca/'
  let faceUrl: string | undefined
  try {
    resumeUrl = FileQuery('resume.pdf').publicURL
  } catch {
    // Fallback to LinkedIn if resume.pdf is not found
  }
  try {
    faceUrl = FileQuery(AdalidaFace).publicURL
  } catch {
    faceUrl = undefined
  }
  if (isMobile === null) return null
  const underlineClassName = darkMode ? 'fancy-underline dark' : 'fancy-underline'
  const [isPlaying, setIsPlaying] = useState(false)
  const ytRef = useRef<HTMLIFrameElement>(null)
  const ytSrc = useMemo(() => {
    const base = 'https://www.youtube.com/embed/I-NqIiF6DgI'
    const params = new URLSearchParams({
      enablejsapi: '1',
      controls: '0',
      modestbranding: '1',
      rel: '0',
      playsinline: '1',
      loop: '1',
      // For single-video loop to work, 'playlist' must equal the same video id
      playlist: 'I-NqIiF6DgI'
    })
    return `${base}?${params.toString()}`
  }, [])
  const sendYTCommand = (func: 'playVideo' | 'pauseVideo'): void => {
    const win = ytRef.current?.contentWindow
    if (win !== undefined && win !== null) {
      win.postMessage(JSON.stringify({ event: 'command', func, args: [] }), '*')
    }
  }
  const onTogglePlay = (): void => {
    if (isPlaying) {
      sendYTCommand('pauseVideo')
      setIsPlaying(false)
    } else {
      sendYTCommand('playVideo')
      setIsPlaying(true)
    }
  }

  return (
    <div className='about-intro' data-aos='fade-up'>
      <div className='splash-image'>
        <div className='splash-frame'>
          {faceUrl !== undefined ? (
            <div
              className='splash-cover'
              style={{ backgroundImage: `url(${faceUrl})` }}
              role='img'
              aria-label='Adalida Baca portrait'
            />
          ) : (
            makeMediaTag({
              media: AdalidaFace,
              imgObjectFit: 'cover',
              imgObjectPosition: 'center top',
              style: { width: '100%', height: '100%' }
            })
          )}
        </div>
        <div className='audio-control'>
          <button
            className='audio-icon-button'
            onClick={onTogglePlay}
            aria-label={isPlaying ? 'Pause “Adalida”' : 'Play “Adalida”'}
            aria-pressed={isPlaying}
            title={isPlaying ? 'Pause “Adalida”' : 'Play “Adalida”'}
          >
            {isPlaying ? <IconPlayerPauseFilled size={18} /> : <IconPlayerPlayFilled size={18} />}
          </button>
          <iframe
            ref={ytRef}
            src={ytSrc}
            title='Adalida — George Strait'
            allow='autoplay; encrypted-media'
            tabIndex={-1}
            aria-hidden='true'
            style={{ position: 'absolute', width: 0, height: 0, opacity: 0, pointerEvents: 'none', border: 0 }}
          />
          <span className='audio-state' aria-live='polite' aria-atomic='true'>
            {isPlaying ? 'Playing Adalida by George Strait' : 'Paused'}
          </span>
        </div>
      </div>
      <div className='about-intro-text'>
        <h6>Hi, I&apos;m Adalida (A-duh-lye-duh)</h6>
        <h5 className='intro-lead'>
          I design <u className={underlineClassName}>usable systems</u> from real‑world constraints.
        </h5>
        <div>
          I work on products where constraints, tradeoffs, and incomplete information are part of the job.
        </div>
        <div className='intro-support'>
          I start by understanding how the system works in practice, then design solutions that teams can actually build, use, and evolve.
        </div>
        <BadgeButton to={resumeUrl}>Let&apos;s connect</BadgeButton>
      </div>
    </div>
  )
}

export default Intro
