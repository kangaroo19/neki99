import AppWindow from 'components/AppWindow/AppWindow'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

export default function LoginWindow() {
  const { onClickWindowClose, onClickWindow, windowRenderObj } = useAppWindowRender()

  return (
    <AppWindow
      width="300px"
      top="30%"
      left="30%"
      zIndex={windowRenderObj.loginWindow.zIndexValue}
      onClick={() => onClickWindow('loginWindow')}
    >
      <AppWindow.Header
        onClick={() => {
          onClickWindowClose('loginWindow')
        }}
      >
        로그인
      </AppWindow.Header>
    </AppWindow>
  )
}
