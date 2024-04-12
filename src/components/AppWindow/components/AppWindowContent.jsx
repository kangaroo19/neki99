import { WindowContent } from 'react95'
import styled from 'styled-components'

export default function AppWindowContent({ children, height }) {
  return <WindowContentStyle height={height}>{children}</WindowContentStyle>
}

const WindowContentStyle = styled(WindowContent)`
  height: ${props => props.height};
`
