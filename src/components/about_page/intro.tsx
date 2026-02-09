import { IconPlayerPauseFilled, IconPlayerPlayFilled } from '@tabler/icons-react'

import BadgeButton from 'components/badge_button'
import { makeMediaTag } from 'components/media_with_text'
import DarkModeContext from 'dark_mode_context'
import FileQuery from 'queries/file'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'

const AdalidaFace = 'images/about/adalida avatar.png'
const YT_VIDEO_ID = 'I-NqIiF6DgI'

interface YTPlayer {
  playVideo: () => void
  pauseVideo: () => void
}

interface YTStateChangeEvent {
  data: number
}

interface YTNamespace {
  Player: new (
    elementId: string,
    options: {
      width: string
      height: string
      videoId: string
      playerVars: { [key: string]: string | number | undefined }
      events: {
        onReady: (event: unknown) => void
        onStateChange: (event: YTStateChangeEvent) => void
      }
    }
  ) => YTPlayer
}

declare global {
  interface Window {
    YT?: YTNamespace
    onYouTubeIframeAPIReady?: () => void
    __ytApiReadyPromise?: Promise<void>
    __ytApiResolve?: () => void
  }
}

const Intro = (): JSX.Element | null => {
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
  const underlineClassName = darkMode ? 'fancy-underline dark' : 'fancy-underline'
  const [isPlaying, setIsPlaying] = useState(false)
  const [playerReady, setPlayerReady] = useState(false)
  const playerRef = useRef<YTPlayer | null>(null)
  const playerIdRef = useRef(`yt-audio-${Math.random().toString(36).slice(2)}`)

  const ensureYTApi = useMemo(() => {
    return async (): Promise<void> => {
      if (typeof window === 'undefined') {
        return
      }
      if (window.YT?.Player !== undefined) {
        return
      }

      if (window.__ytApiReadyPromise === undefined) {
        window.__ytApiReadyPromise = new Promise<void>(resolve => {
          window.__ytApiResolve = resolve
        })
        window.onYouTubeIframeAPIReady = () => {
          window.__ytApiResolve?.()
        }

        const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.youtube.com/iframe_api"]')
        if (existing === null) {
          const script = document.createElement('script')
          script.src = 'https://www.youtube.com/iframe_api'
          script.async = true
          document.head.appendChild(script)
        }
      }

      await window.__ytApiReadyPromise
    }
  }, [])

  useEffect(() => {
    let alive = true
    const init = async (): Promise<void> => {
      await ensureYTApi()
      if (!alive) {
        return
      }
      if (playerRef.current !== null) {
        return
      }
      if (window.YT?.Player === undefined) {
        return
      }

      const origin = typeof window !== 'undefined' ? window.location.origin : undefined

      playerRef.current = new window.YT.Player(playerIdRef.current, {
        width: '1',
        height: '1',
        videoId: YT_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          loop: 1,
          playlist: YT_VIDEO_ID,
          origin
        },
        events: {
          onReady: () => {
            if (!alive) {
              return
            }
            setPlayerReady(true)
          },
          onStateChange: (e: YTStateChangeEvent) => {
            if (!alive) {
              return
            }
            // 1 = playing, 2 = paused, 0 = ended
            if (e?.data === 1) {
              setIsPlaying(true)
            }
            if (e?.data === 2) {
              setIsPlaying(false)
            }
            if (e?.data === 0) {
              // Safety: ensure it loops if the player doesn't
              try {
                playerRef.current?.playVideo?.()
              } catch {
                /* noop */
              }
            }
          }
        }
      })
    }
    init()
    return () => {
      alive = false
    }
  }, [ensureYTApi])

  const onTogglePlay = (): void => {
    // iOS requires play() be called from a user gesture, and the player must be ready.
    if (!playerReady) {
      return
    }
    try {
      if (isPlaying) {
        playerRef.current?.pauseVideo?.()
      } else {
        playerRef.current?.playVideo?.()
      }
    } catch {
      // no-op
    }
  }

  return (
    <div className="about-intro" data-aos="fade-up">
      <div className="splash-image">
        <div className="splash-image-wrapper">
          {faceUrl !== undefined ? (
            <div
              className="splash-frame has-bg"
              style={{ backgroundImage: `url(${faceUrl})` }}
              role="img"
              aria-label="Adalida Baca portrait"
            >
              <div className="audio-control">
                <button
                  className="audio-icon-button"
                  onClick={onTogglePlay}
                  aria-label={isPlaying ? 'Pause "Adalida"' : 'Play "Adalida"'}
                  aria-pressed={isPlaying}
                  title={isPlaying ? 'Pause "Adalida"' : 'Play "Adalida"'}
                  disabled={!playerReady}
                  type="button"
                >
                  {isPlaying ? <IconPlayerPauseFilled size={18} /> : <IconPlayerPlayFilled size={18} />}
                </button>
                <div className="yt-audio-player" aria-hidden="true">
                  <div id={playerIdRef.current} />
                </div>
                <span className="audio-state" aria-live="polite" aria-atomic="true">
                  {isPlaying ? 'Playing Adalida by George Strait' : 'Paused'}
                </span>
              </div>
            </div>
          ) : (
            <div className="splash-frame">
              {makeMediaTag({
                media: AdalidaFace,
                imgObjectFit: 'cover',
                imgObjectPosition: 'center top',
                style: { width: '100%', height: '100%' }
              })}
              <div className="audio-control">
                <button
                  className="audio-icon-button"
                  onClick={onTogglePlay}
                  aria-label={isPlaying ? 'Pause "Adalida"' : 'Play "Adalida"'}
                  aria-pressed={isPlaying}
                  title={isPlaying ? 'Pause "Adalida"' : 'Play "Adalida"'}
                  disabled={!playerReady}
                  type="button"
                >
                  {isPlaying ? <IconPlayerPauseFilled size={18} /> : <IconPlayerPlayFilled size={18} />}
                </button>
                <div className="yt-audio-player" aria-hidden="true">
                  <div id={playerIdRef.current} />
                </div>
                <span className="audio-state" aria-live="polite" aria-atomic="true">
                  {isPlaying ? 'Playing Adalida by George Strait' : 'Paused'}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="about-intro-text">
        <div className="handwriting-overlay">
          <div className="handwriting-text">Hi, I&apos;m Adalida</div>
        </div>
        <h5 className="intro-lead">
          I design{' '}
          <u className={`${underlineClassName} underline-draw`}>
            <span className="underline-text">usable systems</span>
            <svg className="hand-drawn-underline" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
              <path
                d="M 0,9 Q 100,2 200,8"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </u>{' '}
          from real‑world constraints.
        </h5>
        <div>I work on products where constraints, tradeoffs, and incomplete information are part of the job.</div>
        <div className="about-intro-ctas">
          <BadgeButton to={resumeUrl}>LET&apos;S CONNECT</BadgeButton>
          <BadgeButton to="mailto:hi@adalida.design" className="about-intro-cta-secondary">
            Let&apos;s chat
          </BadgeButton>
        </div>
      </div>
    </div>
  )
}

export default Intro
