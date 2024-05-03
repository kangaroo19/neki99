import GuestBookWindow from 'components/AppWindow/windows/GuestBookWindow'
import MyInfoWindow from 'components/AppWindow/windows/MyInfoWindow'
import MyProjectsWindow from 'components/AppWindow/windows/MyProjectsWindow'
import TrashCanWindow from 'components/AppWindow/windows/TrashCanWindow'
import LoginWindow from 'components/AppWindow/windows/login/LoginWindow'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

export default function WindowRender() {
  const { windowRenderObj } = useAppWindowRender()

  return (
    <>
      {windowRenderObj.myInfoWindow.isOpen && <MyInfoWindow />}
      {windowRenderObj.myProjectWindow.isOpen && <MyProjectsWindow />}
      {windowRenderObj.trashCanWindow.isOpen && <TrashCanWindow />}
      {windowRenderObj.guestBookWindow.isOpen && <GuestBookWindow />}
      {windowRenderObj.loginWindow.isOpen && <LoginWindow />}
    </>
  )
}
