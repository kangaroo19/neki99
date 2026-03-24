import { AppBar, Button, Toolbar } from 'react95'
import styled from 'styled-components'
import { TimeDisplay } from './components/TimeDisplay'
import StartMenu from './components/StartMenu'
import { useCurrentTimeHook } from 'utils/hook/useCurrentTimeHook'
import { useStartMenuStore } from 'utils/zustand/useStartMenuStore'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

const taskWindowList = [
  { key: 'myInfoWindow', label: '내 정보' },
  { key: 'myProjectWindow', label: '프로젝트' },
  { key: 'trashCanWindow', label: '휴지통' },
  { key: 'guestBookWindow', label: '방명록' },
  { key: 'loginWindow', label: '로그인' },
]

export default function BottomBar() {
  const { time, date } = useCurrentTimeHook() // 현재 시간 리턴하는 커스텀 훅
  const { isMenuOpen, onClickStartBtn } = useStartMenuStore() // 상태 공유위한 zustand 함수
  const { windowRenderObj, onClickWindow } = useAppWindowRender()

  const openWindowList = taskWindowList.filter(windowItem => windowRenderObj[windowItem.key].isOpen)

  return (
    <AppBarContainer>
      <BottomToolbar>
        <StartButton onClick={onClickStartBtn}>
          <StartButtonIcon />
          <StartButtonText>Start</StartButtonText>
        </StartButton>
        <TaskContainer>
          {openWindowList.map(windowItem => (
            <TaskButton key={windowItem.key} onClick={() => onClickWindow(windowItem.key)}>
              <TaskButtonAccent />
              <TaskButtonContent>
                <TaskButtonLabel>{windowItem.label}</TaskButtonLabel>
                <TaskButtonDescription>NEKI99 Portfolio</TaskButtonDescription>
              </TaskButtonContent>
              <TaskButtonStatus />
            </TaskButton>
          ))}
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
  gap: 6px;
  min-width: 0;
  padding: 2px 0;
  overflow-x: auto;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
`

const TaskButton = styled.button`
  width: min(420px, 100%);
  height: 100%;
  min-width: 0;
  padding: 0 14px 0 10px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 220px;
  box-sizing: border-box;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #6d6d6d;
  border-bottom: 2px solid #6d6d6d;
  background: linear-gradient(180deg, #f2f2f2 0%, #d7d7d7 100%);
  box-shadow:
    inset 1px 1px 0 #ececec,
    inset -1px -1px 0 #9b9b9b;
  cursor: pointer;

  &:focus {
    outline: 1px dotted #222222;
    outline-offset: -4px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    flex-basis: 160px;
    padding: 0 10px 0 8px;
    gap: 8px;
  }
`

const TaskButtonAccent = styled.span`
  width: 10px;
  height: 28px;
  flex-shrink: 0;
  border-top: 1px solid #bfffe0;
  border-left: 1px solid #bfffe0;
  border-right: 1px solid #12573a;
  border-bottom: 1px solid #12573a;
  background: linear-gradient(180deg, #1fb26c 0%, #0f7a46 100%);

  @media screen and (max-width: 600px) {
    width: 8px;
    height: 24px;
  }
`

const TaskButtonContent = styled.div`
  min-width: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2px;
`

const TaskButtonLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1;
  color: #1d1d1d;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const TaskButtonDescription = styled.span`
  font-size: 0.72rem;
  line-height: 1;
  color: #4a4a4a;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media screen and (max-width: 600px) {
    display: none;
  }
`

const TaskButtonStatus = styled.span`
  width: 9px;
  height: 9px;
  flex-shrink: 0;
  border-radius: 50%;
  background: #0f7a46;
  box-shadow: 0 0 0 1px #d9ffe8, 0 0 6px rgba(15, 122, 70, 0.45);
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
