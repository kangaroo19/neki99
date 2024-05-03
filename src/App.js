/* eslint-disable */

import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
import Layout from './components/layout/Layout'
import BgIcon from 'components/bgIcon/BgIcon'
import myComputer from 'asset/images/myComputer.png'
import trashIcon from 'asset/images/trash.png'
import networkIcon from 'asset/images/network.png'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import MyProjectsWindow from 'components/AppWindow/windows/MyProjectsWindow'
import MyInfoWindow from 'components/AppWindow/windows/MyInfoWindow'
import TrashCanWindow from 'components/AppWindow/windows/TrashCanWindow'
import notePadIcon from 'asset/images/notepad.png'
import GuestBookWindow from 'components/AppWindow/windows/GuestBookWindow'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import BlogWindow from 'components/AppWindow/windows/BlogWindow'
import neki from 'asset/images/네키.png'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginWindow from 'components/AppWindow/windows/login/LoginWindow'
import useEscapeKey from 'utils/hook/useEsacpeKey'
import { useLoginModal } from 'utils/zustand/useLoginModal'

export default function App() {
  const { windowRenderObj, onClickWindowOpen, closeAllWindow } = useAppWindowRender()
  const queryClient = new QueryClient()
  const navigate = useNavigate()
  useEscapeKey(closeAllWindow)
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={original}>
        <Layout>
          <Layout.WindowContainer>
            <BgIcon
              title="내 정보"
              imgObj={{ src: myComputer, alt: 'myComputer' }}
              onDoubleClick={() => onClickWindowOpen('myInfoWindow')}
              border="1px solid rgb(0, 128, 128)"
              color="white"
            />
            <BgIcon
              title="내 프로젝트"
              imgObj={{ src: networkIcon, alt: 'networkIcon' }}
              onDoubleClick={() => onClickWindowOpen('myProjectWindow')}
              border="1px solid rgb(0, 128, 128)"
              color="white"
            />
            <BgIcon
              title="방명록"
              imgObj={{ src: notePadIcon, alt: 'trashicon' }}
              onDoubleClick={() => onClickWindowOpen('guestBookWindow')}
              border="1px solid rgb(0, 128, 128)"
              color="white"
            />
            <BgIcon
              title="블로그"
              imgObj={{ src: neki, alt: 'trashicon' }}
              onDoubleClick={() => {
                onClickWindowOpen('blogWindow')
                navigate('/blog')
              }}
              border="1px solid rgb(0, 128, 128)"
              color="white"
            />
            <BgIcon
              title="휴지통"
              imgObj={{ src: trashIcon, alt: 'trashicon' }}
              onDoubleClick={() => onClickWindowOpen('trashCanWindow')}
              border="1px solid rgb(0, 128, 128)"
              color="white"
            />
            {windowRenderObj.myInfoWindow.isOpen && <MyInfoWindow />}
            {windowRenderObj.myProjectWindow.isOpen && <MyProjectsWindow />}
            {windowRenderObj.trashCanWindow.isOpen && <TrashCanWindow />}
            {windowRenderObj.guestBookWindow.isOpen && <GuestBookWindow />}
            {windowRenderObj.loginWindow.isOpen && <LoginWindow/>}
          </Layout.WindowContainer>
          <Layout.TaskBar />
          <Routes>
            <Route path="/blog/*" element={windowRenderObj.blogWindow.isOpen && <BlogWindow />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
