/* eslint-disable  */

import { Frame, Tooltip } from 'react95'
import styled from 'styled-components'

export function TimeDisplay({ time, date }) {
  return (
    <TimeDisaplyContainer>
      {/* <ToolTipStyle text={date} enterDelay={100} leaveDelay={500}> */}
      <FrameStyle variant="well">
        <ClockDot />
        <TimeText>{time}</TimeText>
      </FrameStyle>
      {/* </ToolTipStyle> */}
    </TimeDisaplyContainer>
  )
}

const TimeDisaplyContainer = styled.div`
  height: 100%;
  min-width: 88px;
  display: flex;
  align-items: stretch;
`

const ToolTipStyle = styled(Tooltip)`
  height: 100% !important;
  display: flex;
  // align-items: stretch;
`

const FrameStyle = styled(Frame)`
  height: 100% !important;
  width: 100%;
  padding: 0 0.55rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  box-sizing: border-box;
  background: linear-gradient(180deg, #cfcfcf 0%, #e7e7e7 100%);
  box-shadow:
    inset 1px 1px 0 #808080,
    inset -1px -1px 0 #ffffff;
`

const ClockDot = styled.span`
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #0b7a32;
  box-shadow:
    inset 1px 1px 0 rgba(255, 255, 255, 0.45),
    0 0 0 1px #0f4d22;
`

const TimeText = styled.span`
  line-height: 1;
  font-size: 0.9rem;
  letter-spacing: 0.02em;
`
