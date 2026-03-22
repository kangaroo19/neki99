import { Monitor } from 'react95'
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

const MarkdownContent = styled(Markdown)`
  padding: 0 10px;
`

const markdownContent = `
- 😀이름 : 천재현
- 👀나이 : 26세(99년생)
- 🏫서일대학교 컴퓨터전자공학
- 📩이메일 : 1000jjj@naver.com
- 📱휴대폰 : 010-6495-2314

## 👋안녕하세요👋

**철학과 루틴한 삶을 좋아하는 프론트엔드 개발자**입니다.

'모르는 것을 아는 것' 이라는 **태도**를 지향하며 살고 있습니다.

최근에는 **오픈소스 활동**에 몰입하며 더 넓은 관점에서 코드를 바라보고 있습니다.

## 🖥️커리어🖥️

**금성인터내셔널 (2023/08 ~ 2024/02)**

- MUI 사용하여 백오피스 통계 관련 기능 구현
- 백엔드 API 사용하여 CRUD 기능 개발
- zustand 사용하여 상태관리 경험
- 전반적인 CSS 작업
- 모든 페이지에서 사용 위한 공통 컴포넌트 개발

**오토오모니터 (2024/07 ~ ) 현재 재직중**

**개발팀 매니저**로서 자사 솔루션의 **기술 스택 현대화** 및 **프론트엔드 개발 전반**을 주도하였으며, 다양한 내부 서비스의 신규 개발과 운영 안정성 확보에 기여

- **PHP 기반 자사 솔루션**을 **Next.js 기반**으로 마이그레이션하여 기술 스택 현대화를 수행
- **React 기반 내부 운영 툴**의 프론트엔드를 설계 및 개발
- **Vue.js 기반 퍼포먼스 마케팅 대시보드 웹앱**을 구현하여 마케팅 데이터 시각화를 지원
- 커뮤니티, 카페, 블로그, 인스타그램, 페이스북 등 다양한 채널의 **데이터 수집 로직**을 개발하고 **연동 UI**를 구현
- 운영 중인 솔루션의 지속적인 **유지보수 및 기능 개선**을 수행하고, 이슈 대응을 통해 **서비스 안정성**을 강화

## 👨‍💻보유기술👨‍💻

**React.js**

- 기본적인 리액트 훅(useState,useEffect,useMemo....)과 자주 사용하는 로직을 커스텀훅으로 만들어 사용.
- 합성 컴포넌트 패턴 선호함
- 클린 코드 지향
- 공통으로 사용할 컴포넌트 구현 경험

**Zustand**

- zustand 사용하여 react의 컴포넌트 상태를 효과적으로 관리

**React-Query**

- 서버 상태를 효과적으로 관리하고 요청 성공 여부에 따른 핸들링 처리 경험

**Material-UI**

- Mui 에서 제공하는 여러 컴포넌트를 프로젝트 성격에 맞게 커스텀
- Mui-DataGrid 사용하여 어드민 페이지의 기능 구현 작업

**React-Hook-Form**

- 최근 제일 재미있게 사용한 라이브러리
- 인풋 컴포넌트 관련 상태를 처리한 경험 있음

## 🏅자격증🏅

- 정보처리산업기사 (2022년 6월 취득)
- 컴퓨터활용능력 2급 (2021년 3월 취득)
`

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
            <MarkdownContent>{markdownContent}</MarkdownContent>
          </AppWindow.ScrollView>
          <AppWindow.Nav />
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
  )
}
