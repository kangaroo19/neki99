import { Button, Frame, GroupBox } from 'react95'
import AppWindow from './AppWindow'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import { dataObj } from './data/dataObj'
import { useState } from 'react'

export default function MyProjectsWindow() {
  const { onClickWindowClose } = useAppWindowRender()

  const [curIdx, setCurIdx] = useState(0)
  const onClickNxtBtn = () => {
    setCurIdx(prev => prev + 1)
  }
  const onClickPrvBtn = () => {
    setCurIdx(prev => prev - 1)
  }
  return (
    <AppWindow width="500px">
      <AppWindow.Header onClick={() => onClickWindowClose('myProjectWindow')}>내 프로젝트</AppWindow.Header>
      <AppWindow.Content>
        <AppWindow.ContentSection height="400px">
          <ImageFrame variant="field">
            <AppWindow.Image src={dataObj[curIdx].imgSrc} width="100%" height="100%" />
          </ImageFrame>
          <SectionFrameContainer>
            <SectionFrame variant="inside" label={dataObj[curIdx].title}>
              <Markdown>{dataObj[curIdx].content}</Markdown>
            </SectionFrame>
            <div style={{ height: '55%' }}>
              <AppWindow.Tab tabDataObj={dataObj[curIdx].tabDataObj} path={dataObj[curIdx].path} />
            </div>
          </SectionFrameContainer>
        </AppWindow.ContentSection>
        <ButtonContainer>
          <ButtonInner width="40%">
            <Button style={{ width: '49%' }} disabled={curIdx === 0} onClick={onClickPrvBtn}>
              Prev
            </Button>
            <Button style={{ width: '49%' }} disabled={curIdx === dataObj.length - 1} onClick={onClickNxtBtn}>
              Next
            </Button>
          </ButtonInner>
        </ButtonContainer>
      </AppWindow.Content>
    </AppWindow>
  )
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`

const ButtonInner = styled.div`
  display: flex;
  width: ${props => props.width};
  height: ${props => props.height};
  justify-content: space-between;
`
const SectionFrameContainer = styled.div`
  width: 68%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const SectionFrame = styled(GroupBox)`
  height: 30%;
  background: beige;
`

const ImageFrame = styled(Frame)`
  width: 30%;
  height: 100%;
`
