import React, { useRef, useState } from 'react'

import useIsMobile from 'hooks/use_is_mobile'
import { Projects } from 'projects'
import CarouselOverlay, { carouselMediaTag } from '../../carousel_overlay'
import Context from '../context'
import Footer from '../footer'
import TableOfContents from '../table_of_contents'
import Card from './card'
import About from './about'

const InformationArchitecture = 'images/phronesis/info_arch.webp'
const Logo = 'images/phronesis/logo.webp'
const AppIcon = 'images/phronesis/app_icon.webp'
const Text = 'images/phronesis/text.webp'
const Color = 'images/phronesis/color.webp'
const FinalLogo = 'images/phronesis/final_logo.webp'
const FinalImage = 'images/phronesis/final_image.webp'
const ComponentsDarkAndLight = 'images/phronesis/components_dark_light.webp'
const SpecsTable = 'images/phronesis/specs_table.webp'
const Specs = 'images/phronesis/specs.webp'
const PhotosOne = 'images/phronesis/photos_one.webp'
const PhotosTwo = 'images/phronesis/photos_two.webp'

const allImages = [
  [InformationArchitecture],
  [Logo, AppIcon],
  [Text, Color],
  [FinalLogo],
  [Specs, SpecsTable],
  [PhotosOne, ComponentsDarkAndLight],
  [PhotosTwo, FinalImage]
]

const carouselMedia = allImages.flat().map(carouselMediaTag)

const Phronesis = (): JSX.Element => {
  const [showCarousel, setShowCarousel] = useState(false)
  const [mediaIndex, setMediaIndex] = useState(0)
  const dismiss = (): void => { setShowCarousel(false) }
  const displayCarousel = (index: number): void => {
    setMediaIndex(index)
    setShowCarousel(true)
  }

  const sections = {
    About: useRef(null),
    'Information Architecture': useRef(null),
    'Logo & App Icon': useRef(null),
    'Typography & Color': useRef(null),
    'Final Logo': useRef(null),
    'Specs': useRef(null),
    'Components': useRef(null),
    'Final Design': useRef(null)
  }

  const isMobile = useIsMobile(1400)

  let imageIndex = 0
  const images = allImages.map((imageGroup, index) => {
    const sectionKeys = ['Information Architecture', 'Logo & App Icon', 'Typography & Color', 'Final Logo', 'Specs', 'Components', 'Final Design']
    const sectionKey = sectionKeys[index]
    const sectionRef = sectionKey ? sections[sectionKey as keyof typeof sections] : null
    
    return (
      <div key={index} className='phronesis-container' ref={sectionRef}>
        {imageGroup.map((image: string) => {
          const currentIndex = imageIndex++
          return (
            <div
              key={image}
              tabIndex={0}
              data-aos='fade-up'
              role='tab'
              onKeyDown={(event) => { [' ', 'Enter'].includes(event.key) && displayCarousel(currentIndex) }}
              onClick={() => { displayCarousel(currentIndex) }}
            >
              <Card media={image} />
            </div>
          )
        })}
      </div>
    )
  })

  return (
    <Context.Provider value={Projects.Phronesis}>
      {isMobile === false && <TableOfContents links={sections} />}
      <div className='case-study-container'>
        <About ref={sections.About} />
        {images}
        <Footer />
        {showCarousel && <CarouselOverlay dismiss={dismiss} media={carouselMedia} index={mediaIndex} />}
      </div>
    </Context.Provider>
  )
}

export default Phronesis
