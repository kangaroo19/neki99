import { Frame, Monitor } from 'react95'
import { Fragment } from 'react'
import AppWindow from '../AppWindow'
import myFace from 'asset/images/myFace.webp'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

const MonitorContainer = styled(Monitor)`
  margin: 10px 0;
  display: flex;
  justify-content: center;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`
// 이거 '내 프로젝트' 창에서도 사용 위해 export
export const MarkdownTitle = styled(Frame)`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  font-size: 1.2rem;
  background: rgb(57, 66, 77);
  color: white;
`
const MarkdownContent = styled(Markdown)`
  padding: 0 10px;
`

const markdownObj = [
  {
    id: 0,
    title: null,
    content: `
  - 😀이름 : 천재현
  - 👀나이 : 26세(99년생)
  - 🏫서일대학교 컴퓨터전자공학
  - 📩이메일 : 1000jjj@naver.com
  - 📱휴대폰 : 010-6495-2314
    `,
  },
  {
    id: 1,
    title: `👋안녕하세요👋`,
    content: `
  프론트엔드 개발자가 되고 싶은 천재현 입니다.\n
  기술적인 구현 능력뿐만 아니라 **코드 품질**과 **클린 코드**에 대한 열정을 가지고 있습니다.\n
  또한, **유지보수가 쉽고 확장 가능한 소프트웨어**를 개발하기 위해 항상 노력하고 있습니다. \n
  이러한 가치를 바탕으로 팀과 협력하여 프로젝트를 성공적으로\n
  완수할 수 있도록 최선을 다하겠습니다.\n`,
  },
  {
    id: 2,
    title: `🖥️커리어🖥️`,
    content: `
  **금성인터내셔널 (2023/08 ~ 2024/02)** 
  - MUI 사용하여 백오피스 통계 관련 기능 구현
  - 백엔드 API 사용하여 CRUD 기능 개발
  - zustand 사용하여 상태관리 경험
  - 전반적인 CSS 작업
  - 모든 페이지에서 사용 위한 공통 컴포넌트 개발
  
  **오토오모니터 (2024/07 ~ ) 현재 재직중**
  `,
  },
  {
    id: 3,
    title: `👨‍💻보유기술👨‍💻`,
    content: `
  **React.js** 
  - 기본적인 리액트 훅(useState,useEffect,useMemo….)과 자주 사용하는 로직을 커스텀훅으로 만들어 사용.
  - 합성 컴포넌트 패턴 선호함
  - 클린 코드 지향
  - 공통으로 사용할 컴포넌트 구현 경험
  \n
  **Zustand**
  - zustand 사용하여 react의 컴포넌트 상태를 효과적으로 관리
  \n
  **React-Query**
  - 서버 상태를 효과적으로 관리하고 요청 성공 여부에 따른 핸들링 처리 경험
  \n
  **Material-UI**
  - Mui 에서 제공하는 여러 컴포넌트를 프로젝트 성격에 맞게 커스텀
  - Mui-DataGrid 사용하여 어드민 페이지의 기능 구현 작업
  \n
  **React-Hook-Form**
  - 최근 제일 재미있게 사용한 라이브러리
  - 인풋 컴포넌트 관련 상태를 처리한 경험 있음`,
  },
  {
    id: 4,
    title: `🏅자격증🏅`,
    content: `
  - 정보처리산업기사 (2022년 6월 취득)
  - 컴퓨터활용능력 2급 (2021년 3월 취득)`,
  },
]

export default function MyInfoWindow() {
  const { onClickWindowClose, windowRenderObj, onClickWindow } = useAppWindowRender()
  return (
    <AppWindow
      width="700px"
      top="10%"
      left="10%"
      zIndex={windowRenderObj.myInfoWindow.zIndexValue}
      onClick={() => onClickWindow('myInfoWindow')}
    >
      <AppWindow.Header onClick={event => onClickWindowClose('myInfoWindow', event)}>내 정보</AppWindow.Header>
      <AppWindow.Content>
        <AppWindow.ContentTitle text="프론트엔드 개발자가 되고싶은 천재현 입니다." />
        <AppWindow.ContentSection height="300px">
          <AppWindow.ScrollView width="75%">
            {/* <AppWindow.Image src={banner} alt="아스키아트" width="100%" /> */}
            <MonitorContainer>
              <Img src={myFace} alt="myFace" />
            </MonitorContainer>
            {markdownObj.map(item => (
              <Fragment key={item.id}>
                {item.title && <MarkdownTitle>{item.title}</MarkdownTitle>}
                <MarkdownContent>{item.content}</MarkdownContent>
              </Fragment>
            ))}
          </AppWindow.ScrollView>
          <AppWindow.Nav />
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
  )
}
