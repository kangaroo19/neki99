/* eslint-disable */

import { useEffect, useState } from 'react'

const useMediaQuery = () => {
  const [viewportSize, setViewportSize] = useState(getViewportSize())

  useEffect(() => {
    const handleResize = () => {
      const newSize = getViewportSize()
      if (newSize !== viewportSize) {
        setViewportSize(newSize)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [viewportSize])

  return viewportSize
}

const getViewportSize = () => {
  const width = window.innerWidth
  if (width < 600) {
    return 'mobile'
  } else if (width >= 600 && width < 1024) {
    return 'tablet'
  } else if (width >= 1024 && width < 1440) {
    return 'laptop'
  } else {
    return 'desktop'
  }
}

export default useMediaQuery
