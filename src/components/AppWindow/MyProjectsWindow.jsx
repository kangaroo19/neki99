import { Button, Frame, GroupBox } from 'react95'
import AppWindow from './AppWindow'
import mapleImg from 'asset/images/maple2.jpeg'
import styled from 'styled-components'
import Markdown from 'react-markdown'

const dataObj = [
  {
    title: <div style={{ background: 'rgb(57, 66, 77)', fontSize: '1.2rem', color: 'white', padding: '3px' }}>1vs1 같은그림찾기</div>,
    content: `
어릴 때 재미있게 플레이하던\n 
'**메이플스토리**'라는 게임 안에 있는 미니게임인\n 
같은그림찾기게임을 **채팅기능**을 포함해 **1vs1 실시간**으로 할 수 있게 웹 상에 구현하였습니다.`,
    imgSrc: mapleImg,
    path: '',
    repoPath: '',
  },
]

export default function MyProjectsWindow() {
  const curIdx = 0
  return (
    <AppWindow width="500px">
      <AppWindow.Header>내 프로젝트</AppWindow.Header>
      <AppWindow.Content>
        <AppWindow.ContentSection>
          <ImageFrame variant="field">
            <AppWindow.Image src={dataObj[curIdx].imgSrc} width="100%" height="100%" />
          </ImageFrame>
          <SectionFrame variant="inside" label={dataObj[curIdx].title}>
            <Markdown>{dataObj[curIdx].content}</Markdown>
          </SectionFrame>
        </AppWindow.ContentSection>
        <ButtonContainer>
          <ButtonInner width="30%">
            <Button>Github</Button>
            <Button>Visit</Button>
          </ButtonInner>
          <ButtonInner width="26%">
            <Button>Prev</Button>
            <Button>Next</Button>
          </ButtonInner>
        </ButtonContainer>
      </AppWindow.Content>
    </AppWindow>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`

const ButtonInner = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  justify-content: space-between;
`

const SectionFrame = styled(GroupBox)`
  width: 60%;
`

const ImageFrame = styled(Frame)`
  width: 30%;
  height: 400px;
`
