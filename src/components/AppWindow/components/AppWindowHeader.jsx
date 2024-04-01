import { Button, WindowHeader } from 'react95'
import styled from 'styled-components'

export default function AppWindowHeader({ children, onClick }) {
  return (
    <WindowHeaderContainer>
      <span>{children}</span>
      <Button onClick={onClick}>X</Button>
    </WindowHeaderContainer>
  )
}

const WindowHeaderContainer = styled(WindowHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
