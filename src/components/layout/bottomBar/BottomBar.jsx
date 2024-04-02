import { AppBar, Button, Toolbar } from 'react95'
import styled from 'styled-components'
import TaskBtn from './components/TaskBtn'
import { TimeDisplay } from './components/TimeDisplay'
import StartMenu from './components/StartMenu'
import { useCurrentTimeHook } from 'utils/hook/useCurrentTimeHook'
import { useStartMenuStore } from 'utils/zustand/useStartMenuStore'

export default function BottomBar() {
  const { time, date } = useCurrentTimeHook() // 현재 시간 리턴하는 커스텀 훅
  const { isMenuOpen, onClickStartBtn } = useStartMenuStore() // 상태 공유위한 zustand 함수
  return (
    <AppBarContainer>
      <Toolbar style={ToolBarStyle}>
        <StartButton onClick={onClickStartBtn}>🐍Start</StartButton>
        <TaskContainer>
          <TaskBtn />
        </TaskContainer>
        <TimeDisplay time={time} date={date} />
      </Toolbar>
      {isMenuOpen && <StartMenu onClickStartBtn={onClickStartBtn} />}
    </AppBarContainer>
  )
}

const AppBarContainer = styled(AppBar)`
  bottom: 0;
  top: auto;
  z-index: 1;
  height: 50px;
  @media screen and (max-width: 600px) {
    height: 60px;
  }
`

const ToolBarStyle = {
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '100%',
}
const TaskContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`
const StartButton = styled(Button)`
  width: 6%;
  height: 100%;
  font-size: 100%;
  white-space: nowrap;
  @media screen and (max-width: 600px) {
    width: 30%;
  }
`
