import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import AppWindow from '../AppWindow'
import errorImg from 'asset/images/error.png'
import styled from 'styled-components'

export default function AlertWindow({ text }) {
  const { onClickWindowClose } = useAppWindowRender()

  return (
    <AppWindow width="500px" top="30%" left="10%">
      <AppWindow.Header onClick={() => onClickWindowClose('guestBookWindow')}>알림</AppWindow.Header>
      <AppWindow.Content>
        <AlertContentInner>
          <AppWindow.Image src={errorImg} alt="워닝" width="30%" />
          <AlertText>{text}</AlertText>
        </AlertContentInner>
      </AppWindow.Content>
    </AppWindow>
  )
}

const AlertContentInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const AlertText = styled.div`
  width: 80%;
  text-align: center;
  font-size: 1.2rem;
`