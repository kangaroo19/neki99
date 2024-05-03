import { useEffect } from 'react'

function useEscapeKey(callback) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        callback()
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}

export default useEscapeKey
