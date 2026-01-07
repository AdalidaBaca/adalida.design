import AOS from 'aos'
import { useEffect } from 'react'

import 'aos/dist/aos.css'

const useAnimateOnScroll = (): void => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-in-out',
      duration: 1000,
      once: true,      // run animations only once
      mirror: false    // don't animate out while scrolling past
    })
  }, [])
}

export default useAnimateOnScroll
