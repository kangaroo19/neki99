import { Frame, Monitor } from 'react95'
import AppWindow from './AppWindow'
import myFace from 'asset/images/myFace.jpeg'
import styled from 'styled-components'
import Markdown from 'react-markdown'

const ContentTitle = styled(Frame)`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  font-size: 1.2rem;
`

const aboutMe = {
  title: <ContentTitle>안녕하세요</ContentTitle>,
  content: `
프론트엔드 개발자가 되고 싶은 천재현 입니다.\n
기술적인 구현 능력뿐만 아니라 **코드 품질**과 **클린 코드**에 대한 열정을 가지고 있습니다.\n
또한, **유지보수가 쉽고 확장 가능한 소프트웨어**를 개발하기 위해 항상 노력하고 있습니다. \n
이러한 가치를 바탕으로 팀과 협력하여 프로젝트를 성공적으로\n
 완수할 수 있도록 최선을 다하겠습니다.\n`,
}

const career = {
  title: <ContentTitle>커리어</ContentTitle>,
  content: `금성인터내셔널 (2023/08 ~ 2023/02)`,
}

export default function MyInfoWindow() {
  return (
    <AppWindow width="700px">
      <AppWindow.Header>내 정보</AppWindow.Header>
      <AppWindow.Content>
        <AppWindow.ContentTitle>프론트엔드 개발자가 되고싶은 천재현입니다.</AppWindow.ContentTitle>
        <AppWindow.ContentSection>
          <AppWindow.ScrollView>
            <MonitorContainer>
              <Img src={myFace} alt="myFace" />
            </MonitorContainer>
            {aboutMe.title}
            <Markdown>{aboutMe.content}</Markdown>
            {career.title}
            <Markdown>{career.content}</Markdown>
          </AppWindow.ScrollView>
          <AppWindow.Nav />
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
  )
}

const MonitorContainer = styled(Monitor)`
  margin: 10px 0;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`
