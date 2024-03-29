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
    <AppBar style={AppBarStyle}>
      <Toolbar style={ToolBarStyle}>
        <Button onClick={onClickStartBtn} style={startBtnStyle}>
          🐍Start
        </Button>
        <TaskContainer>
          <TaskBtn />
        </TaskContainer>
        <TimeDisplay time={time} date={date} />
      </Toolbar>
      {isMenuOpen && <StartMenu onClickStartBtn={onClickStartBtn} />}
    </AppBar>
  )
}

const AppBarStyle = {
  bottom: '0',
  top: 'auto',
  height: '50px',
}
const ToolBarStyle = {
  justifyContent: 'space-between',
  alignItems: 'center',
}
const TaskContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
`
const startBtnStyle = {
  width: '6%',
}
