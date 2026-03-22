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
      <BottomToolbar>
        <StartButton onClick={onClickStartBtn}>
          <StartButtonIcon />
          <StartButtonText>Start</StartButtonText>
        </StartButton>
        <TaskContainer>
          <TaskBtn />
        </TaskContainer>
        <TimeDisplay time={time} date={date} />
      </BottomToolbar>
      {isMenuOpen && <StartMenu onClickStartBtn={onClickStartBtn} />}
    </AppBarContainer>
  )
}

const AppBarContainer = styled(AppBar)`
  bottom: 0;
  top: auto;
  z-index: 0;
  height: 7vh;
  min-height: 54px;
  padding: 4px 6px 5px;
  box-sizing: border-box;
  border-top: 2px solid #ffffff;
  background: linear-gradient(180deg, #d6d6d6 0%, #bcbcbc 100%);
  box-shadow:
    inset 0 1px 0 #f7f7f7,
    inset 0 -1px 0 #7a7a7a;

  @media screen and (max-width: 600px) {
    height: 60px;
    padding: 4px;
  }
`

const BottomToolbar = styled(Toolbar)`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
`

const TaskContainer = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  min-width: 0;
  padding: 2px 0;
`

const StartButton = styled(Button)`
  height: 100%;
  min-width: 108px;
  padding: 0 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  white-space: nowrap;

  @media screen and (max-width: 600px) {
    min-width: 92px;
    padding: 0 10px;
  }
`

const StartButtonIcon = styled.span`
  width: 14px;
  height: 14px;
  display: inline-block;
  flex-shrink: 0;
  background: linear-gradient(180deg, #2e8b57 0%, #146c43 100%);
  border-top: 1px solid #dff7ea;
  border-left: 1px solid #dff7ea;
  border-right: 1px solid #0b4d2f;
  border-bottom: 1px solid #0b4d2f;
  box-shadow: inset 1px 1px 0 rgba(255, 255, 255, 0.35);
`

const StartButtonText = styled.span`
  line-height: 1;
`
