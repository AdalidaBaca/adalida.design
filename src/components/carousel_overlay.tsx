// TODO: Fix biome errors
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import DarkModeContext from 'dark_mode_context'
import darkModeStyle from 'dark_mode_style'
import React, { type MouseEvent, useCallback, useContext, useEffect, useState } from 'react'

import { makeMediaTag } from './media_with_text'

const mediaStyles = {
  maxHeight: '90dvh',
  maxWidth: '90dvw',
  height: '100%'
}

const modulus = ({ mediaLength, index }: { mediaLength: number; index: number }): number =>
  // Javascript's % operator doesn't wrap around to negative numbers
  ((index % mediaLength) + mediaLength) % mediaLength

export const carouselMediaTag = (media: string): JSX.Element => makeMediaTag({ media, style: mediaStyles })

const CloseButton = ({ dismiss }: { dismiss: () => void }): JSX.Element => (
  <div className="close-button">
    <button className="carousel-button" onClick={dismiss}>
      &#x2715;
    </button>
  </div>
)

const CarouselOverlay = ({
  dismiss,
  media,
  index
}: {
  dismiss: () => void
  media: JSX.Element[]
  index: number
}): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext)
  const { background } = darkModeStyle(darkMode)
  const [currentIndex, setCurrentIndex] = useState(index)
  const navigateLeft = useCallback(
    (event: MouseEvent | KeyboardEvent): void => {
      event.stopPropagation()
      setCurrentIndex((oldIndex) => modulus({ mediaLength: media.length, index: oldIndex - 1 }))
    },
    [media.length]
  )
  const navigateRight = useCallback(
    (event: MouseEvent | KeyboardEvent): void => {
      event.stopPropagation()
      setCurrentIndex((oldIndex) => modulus({ mediaLength: media.length, index: oldIndex + 1 }))
    },
    [media.length]
  )
  const showLeftArrow = currentIndex > 0
  const showRightArrow = currentIndex < media.length - 1
  useEffect(() => {
    const keyPressListener = (event: KeyboardEvent): void => {
      if (event.key === 'ArrowLeft' && showLeftArrow) {
        navigateLeft(event)
      }
      if (event.key === 'ArrowRight' && showRightArrow) {
        navigateRight(event)
      }
      if ([' ', 'Enter', 'Escape'].includes(event.key)) {
        dismiss()
      }
    }
    window.addEventListener('keydown', keyPressListener)
    return (): void => {
      window.removeEventListener('keydown', keyPressListener)
    }
  }, [dismiss, navigateLeft, navigateRight, showLeftArrow, showRightArrow])

  const navigationArrows = (
    <div className="carousel-navigation">
      <button
        className="carousel-button"
        style={{ visibility: showLeftArrow ? 'visible' : 'hidden' }}
        onClick={navigateLeft}
      >
        <IconChevronLeft />
      </button>
      <button
        className="carousel-button"
        style={{ visibility: showRightArrow ? 'visible' : 'hidden' }}
        onClick={navigateRight}
      >
        <IconChevronRight />
      </button>
    </div>
  )
  return (
    // biome-ignore lint/a11y/useKeyWithClickEvents: <div> has onClick
    <div className="carousel-overlay" onClick={dismiss} tabIndex={0} role="tab">
      <div style={{ height: '90vh', width: '90vw', display: 'flex', placeItems: 'center', placeContent: 'center' }}>
        {/*biome-ignore lint/a11y/noNoninteractiveElementInteractions: All this does is stop propagation*/}
        {/*biome-ignore lint/a11y/useKeyWithClickEvents: <div> has onClick*/}
        <div
          role="dialog"
          style={{ position: 'relative', width: '100%', maxWidth: '100%', background }}
          onClick={(event: MouseEvent) => {
            event.stopPropagation()
          }}
        >
          <CloseButton dismiss={dismiss} />
          {media[currentIndex]}
        </div>
        {media.length > 1 && navigationArrows}
      </div>
    </div>
  )
}

export default CarouselOverlay
