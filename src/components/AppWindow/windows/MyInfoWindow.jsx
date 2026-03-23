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

const SkillSection = styled.section`
  padding: 0 10px 16px;
`

const SkillTitle = styled.h2`
  margin: 24px 0 10px;
  font-size: 1.15rem;
`

const SkillDescription = styled.p`
  margin: 0 0 14px;
  line-height: 1.5;
`

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 12px;
`

const SkillCard = styled.div`
  min-height: 96px;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #7a7a7a;
  border-bottom: 2px solid #7a7a7a;
  background: linear-gradient(180deg, #f3f3f3 0%, #dddddd 100%);
  box-sizing: border-box;
`

const SkillLogo = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
`

const SkillName = styled.span`
  font-size: 0.85rem;
  font-weight: 700;
  text-align: center;
  line-height: 1.2;
`

const birthYear = 1999

function getCurrentAgeText() {
  const currentYear = new Date().getFullYear()
  const currentAge = currentYear - birthYear + 1

  return `${currentAge}세(${birthYear}년생)`
}

const currentAgeText = getCurrentAgeText()

const skillItems = [
  {
    name: 'React',
    logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'Next.js',
    logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'PHP',
    logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
  },
  {
    name: 'Python',
    logoSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
]

const introMarkdownContent = `
- 😀이름 : 천재현
- 👀나이 : ${currentAgeText}
- 🏫서일대학교 컴퓨터전자공학
- 📩이메일 : 1000jjj@naver.com

## 👋안녕하세요👋
**React** 기반의 프론트엔드 개발자 천재현입니다.

**AI**를 활용해 1인 이상의 가치를 만들어내는 데 관심이 많습니다.

단순히 도구를 쓰는 것을 넘어,
작업을 시스템으로 바꾸는 데 집중합니다.

## 🖥️커리어🖥️

### 오토오모니터 (2024/07 ~ )

개발팀 매니저로서 자사 솔루션의 프론트엔드 구조 개선과 신규 서비스 개발을 주도하고 있습니다.

- PHP 기반 자사 솔루션을 Next.js 기반으로 마이그레이션하며 기술 스택 현대화를 진행했습니다.
- React 기반 내부 운영 툴의 프론트엔드를 설계하고 구현했습니다.
- Vue.js 기반 퍼포먼스 마케팅 대시보드 웹앱을 개발해 데이터 시각화를 지원했습니다.
- 커뮤니티, 카페, 블로그, 인스타그램, 페이스북 등 다양한 채널의 데이터 수집 로직과 연동 UI를 개발했습니다.
- 운영 중인 서비스의 유지보수와 기능 개선, 이슈 대응을 맡으며 안정성을 높였습니다.

### 금성인터내셔널 (2023/08 ~ 2024/02)

- MUI 기반 백오피스 화면에서 통계 및 관리 기능을 구현했습니다.
- 백엔드 API와 연동해 CRUD 기능을 개발하고 사용자 흐름을 안정적으로 연결했습니다.
- zustand를 활용해 화면 상태를 관리하고 공통 컴포넌트를 구축했습니다.
- 서비스 전반의 CSS 작업을 담당하며 일관된 UI를 정리했습니다.
`

const licenseMarkdownContent = `
## 🏅자격증🏅

- 정보처리산업기사 (2022년 6월 취득)
- 컴퓨터활용능력 2급 (2021년 3월 취득)
`

export default function MyInfoWindow() {
  const { onClickWindowClose, windowRenderObj, onClickWindow } = useAppWindowRender()
  return (
    <AppWindow
      width="820px"
      top="10%"
      left="10%"
      zIndex={windowRenderObj.myInfoWindow.zIndexValue}
      onClick={() => onClickWindow('myInfoWindow')}
    >
      <AppWindow.Header onClick={event => onClickWindowClose('myInfoWindow', event)}>내 정보</AppWindow.Header>
      <AppWindow.Content>
        <AppWindow.ContentTitle text="프론트엔드 개발자 천재현 입니다." />
        <AppWindow.ContentSection height="420px">
          <AppWindow.ScrollView width="75%">
            {/* <AppWindow.Image src={banner} alt="아스키아트" width="100%" /> */}
            <MonitorContainer>
              <Img src={myFace} alt="myFace" />
            </MonitorContainer>
            <MarkdownContent>{introMarkdownContent}</MarkdownContent>
            <SkillSection>
              <SkillTitle>👨‍💻보유기술👨‍💻</SkillTitle>
              <SkillDescription>실무에서 자주 사용한 기술을 중심으로 정리했습니다.</SkillDescription>
              <SkillGrid>
                {skillItems.map(skillItem => (
                  <SkillCard key={skillItem.name}>
                    <SkillLogo src={skillItem.logoSrc} alt={skillItem.name} />
                    <SkillName>{skillItem.name}</SkillName>
                  </SkillCard>
                ))}
              </SkillGrid>
            </SkillSection>
            <MarkdownContent>{licenseMarkdownContent}</MarkdownContent>
          </AppWindow.ScrollView>
          <AppWindow.Nav />
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
  )
}
