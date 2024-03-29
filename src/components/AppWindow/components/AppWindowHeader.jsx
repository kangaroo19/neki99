import { Button, WindowHeader } from 'react95'
import styled from 'styled-components'

export default function AppWindowHeader({ children }) {
  return (
    <WindowHeaderContainer>
      <span>{children}</span>
      <Button>X</Button>
    </WindowHeaderContainer>
  )
}

const WindowHeaderContainer = styled(WindowHeader)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
