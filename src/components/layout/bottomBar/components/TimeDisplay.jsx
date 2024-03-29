import { Frame, Tooltip } from 'react95'

export function TimeDisplay({ time, date }) {
  return (
    <Tooltip text={date} enterDelay={100} leaveDelay={500}>
      <Frame variant="well" style={frameStyle}>
        {time}
      </Frame>
    </Tooltip>
  )
}

const frameStyle = {
  height: '100%',
  width: '100%',
  padding: '0.3rem 0.25rem',
}
