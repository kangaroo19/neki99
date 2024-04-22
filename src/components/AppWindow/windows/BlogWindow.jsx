import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import AppWindow from '../AppWindow'
import { Suspense } from 'react'
import { Hourglass } from 'react95'
import { Route, Routes, useNavigate } from 'react-router-dom'
import BlogHome from './blog/BlogHome'
import BlogDetail from './blog/[id]'
import TextEdit from './blog/TextEdit'

export default function BlogWindow() {
  const { onClickWindowClose, windowRenderObj, onClickWindow } = useAppWindowRender()
  const navigate = useNavigate()
  return (
    <Suspense fallback={<Hourglass />}>
      <AppWindow width="100vw" height="93vh" top="0%" left="0%" zIndex={windowRenderObj.blogWindow.zIndexValue} onClick={() => onClickWindow('blogWindow')}>
        <AppWindow.Header
          onClick={() => {
            onClickWindowClose('blogWindow')
            navigate('/') // 홈으로 이동
          }}
        >
          블로그
        </AppWindow.Header>
        <AppWindow.HeadMenu />
        <AppWindow.Content height="100%">
          <AppWindow.ContentSection height="80%">
            <AppWindow.ScrollView width="100%" background="white">
              <Routes>
                <Route path="/" element={<BlogHome />} />
                <Route path="/*" element={<BlogDetail />} />
                <Route path="/textEdit" element={<TextEdit />} />
              </Routes>
            </AppWindow.ScrollView>
          </AppWindow.ContentSection>
        </AppWindow.Content>
      </AppWindow>
    </Suspense>
  )
}
