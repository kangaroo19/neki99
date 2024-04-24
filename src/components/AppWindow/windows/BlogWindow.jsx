import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import AppWindow from '../AppWindow'
import { Suspense, lazy } from 'react'
import { Hourglass } from 'react95'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Spinner from 'components/spinner/Spinner'

const BlogHome = lazy(() => import('./blog/BlogHome'))
const BlogDetail = lazy(() => import('./blog/[id]'))
const TextEdit = lazy(() => import('./blog/TextEdit'))



export default function BlogWindow() {
  const { onClickWindowClose, windowRenderObj, onClickWindow } = useAppWindowRender()
  const navigate = useNavigate()
  return (
    <Suspense fallback={<Hourglass />}>
      <AppWindow
        width="100vw"
        height="93vh"
        top="0%"
        left="0%"
        zIndex={windowRenderObj.blogWindow.zIndexValue}
        onClick={() => onClickWindow('blogWindow')}
      >
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
              <Suspense
                fallback={
                  <Spinner.Container width="100%" height="100%">
                    <Spinner.Icon size={100} />
                  </Spinner.Container>
                }
              >
                <Routes>
                  <Route path="/" element={<BlogHome />} />
                  <Route path="/*" element={<BlogDetail />} />
                  <Route path="/textEdit" element={<TextEdit />} />
                </Routes>
              </Suspense>
            </AppWindow.ScrollView>
          </AppWindow.ContentSection>
        </AppWindow.Content>
      </AppWindow>
    </Suspense>
  )
}
