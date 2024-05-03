import { Suspense, lazy } from 'react'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

const GuestBookWindow = lazy(() => import('components/AppWindow/windows/GuestBookWindow'))
const MyInfoWindow = lazy(() => import('components/AppWindow/windows/MyInfoWindow'))
const MyProjectsWindow = lazy(() => import('components/AppWindow/windows/MyProjectsWindow'))
const TrashCanWindow = lazy(() => import('components/AppWindow/windows/TrashCanWindow'))
const LoginWindow = lazy(() => import('components/AppWindow/windows/login/LoginWindow'))

export default function WindowRender() {
  const { windowRenderObj } = useAppWindowRender()

  return (
    <Suspense>
      {windowRenderObj.myInfoWindow.isOpen && <MyInfoWindow />}
      {windowRenderObj.myProjectWindow.isOpen && <MyProjectsWindow />}
      {windowRenderObj.trashCanWindow.isOpen && <TrashCanWindow />}
      {windowRenderObj.guestBookWindow.isOpen && <GuestBookWindow />}
      {windowRenderObj.loginWindow.isOpen && <LoginWindow />}
    </Suspense>
  )
}
