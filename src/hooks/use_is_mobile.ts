import { useLayoutEffect, useState } from 'react'

const BREAKPOINT = 768 // px

const useIsMobile = (breakpoint = BREAKPOINT): boolean | null => {
  const [windowWidth, setWindowWidth] = useState<null | number>(() =>
    typeof window === 'undefined' ? null : document.documentElement.clientWidth
  )

  useLayoutEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(document.documentElement.clientWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowWidth === null ? null : windowWidth < breakpoint
}

export default useIsMobile
