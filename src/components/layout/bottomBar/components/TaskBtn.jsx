import styled from 'styled-components'

export default function TaskBtn() {
  return (
    <TaskButtonFrame>
      <TaskButtonAccent />
      <TaskButtonContent>
        <TaskButtonLabel>Welcome</TaskButtonLabel>
        <TaskButtonDescription>NEKI99 Portfolio</TaskButtonDescription>
      </TaskButtonContent>
      <TaskButtonStatus />
    </TaskButtonFrame>
  )
}

const TaskButtonFrame = styled.div`
  width: min(420px, 100%);
  height: 100%;
  min-width: 0;
  padding: 0 14px 0 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-sizing: border-box;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #6d6d6d;
  border-bottom: 2px solid #6d6d6d;
  background: linear-gradient(180deg, #f2f2f2 0%, #d7d7d7 100%);
  box-shadow:
    inset 1px 1px 0 #ececec,
    inset -1px -1px 0 #9b9b9b;

  @media screen and (max-width: 600px) {
    width: 100%;
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
  box-shadow:
    0 0 0 1px #d9ffe8,
    0 0 6px rgba(15, 122, 70, 0.45);
`
