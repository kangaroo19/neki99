import { Frame, Tooltip } from 'react95'
import styled from 'styled-components'

export function TimeDisplay({ time, date }) {
  return (
    <ToolTipStyle text={date} enterDelay={100} leaveDelay={500} style={{ height: '100%' }}>
      <FrameStyle variant="well">{time}</FrameStyle>
    </ToolTipStyle>
  )
}

const ToolTipStyle = styled(Tooltip)`
  height: 100% !important;
`
const FrameStyle = styled(Frame)`
  height: 100% !important;
  widht: 100%;
  padding: 0.3rem 0.25rem;
`
