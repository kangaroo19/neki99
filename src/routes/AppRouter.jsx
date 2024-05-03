import BlogWindow from 'components/AppWindow/windows/BlogWindow'
import { Route, Routes } from 'react-router-dom'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

export default function AppRouter() {
  const { windowRenderObj } = useAppWindowRender()

  return (
    <Routes>
      <Route path="/blog/*" element={windowRenderObj.blogWindow.isOpen && <BlogWindow />} />
    </Routes>
  )
}
