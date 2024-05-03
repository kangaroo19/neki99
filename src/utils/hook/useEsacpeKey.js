import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function useEscapeKey(callback) {
  const navigate = useNavigate()
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        callback()
        navigate('/')
      }
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
}

export default useEscapeKey
