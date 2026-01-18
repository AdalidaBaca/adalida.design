import AOS from 'aos'
import { useEffect } from 'react'

import 'aos/dist/aos.css'

const useAnimateOnScroll = (): void => {
  useEffect(() => {
    // Check if mobile for performance optimizations
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

    // Initialize AOS with mobile-optimized settings
    AOS.init({
      easing: 'ease-in-out',
      duration: isMobile ? 600 : 1000, // Shorter duration on mobile
      once: true, // run animations only once
      mirror: false, // don't animate out while scrolling past
      offset: isMobile ? 50 : 100, // Smaller offset on mobile for earlier trigger
      disable: false // Keep enabled but optimized
    })

    // Refresh after a short delay to catch elements loaded after initial render
    const timeout = setTimeout(
      () => {
        AOS.refresh()
      },
      isMobile ? 200 : 100
    ) // Slightly longer delay on mobile

    // Also refresh when images or lazy-loaded content finishes loading
    const handleLoad = (): void => {
      // On mobile, skip this refresh to save performance
      if (!isMobile) {
        AOS.refresh()
      }
    }
    window.addEventListener('load', handleLoad)

    // Debounce function to limit refresh calls
    let refreshTimeout: NodeJS.Timeout | null = null
    const debouncedRefresh = (): void => {
      if (refreshTimeout !== null) {
        clearTimeout(refreshTimeout)
      }
      const delay = isMobile ? 1000 : 300 // Much longer debounce on mobile
      refreshTimeout = setTimeout(() => {
        AOS.refresh()
      }, delay)
    }

    // Use MutationObserver with debouncing - only watch for new elements, not attributes
    // On mobile, be more conservative to save performance
    const observer = new MutationObserver(mutations => {
      // Only refresh if actual elements were added/removed
      const hasRelevantChanges = mutations.some(
        mutation => mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0
      )
      if (hasRelevantChanges) {
        debouncedRefresh()
      }
    })

    // Observe the entire document to catch all new elements
    observer.observe(document.body, {
      childList: true,
      subtree: true // Watch full subtree to catch all elements
    })

    return () => {
      clearTimeout(timeout)
      if (refreshTimeout !== null) {
        clearTimeout(refreshTimeout)
      }
      window.removeEventListener('load', handleLoad)
      observer.disconnect()
    }
  }, [])
}

export default useAnimateOnScroll
