import AppWindow from '../AppWindow'
import styled from 'styled-components'
import Markdown from 'react-markdown'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

const RetroHero = styled.div`
  width: 100%;
  min-height: 210px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 18px;
  background:
    linear-gradient(rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.06)),
    repeating-linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.05) 0,
      rgba(255, 255, 255, 0.05) 2px,
      rgba(0, 0, 0, 0.08) 2px,
      rgba(0, 0, 0, 0.08) 4px
    ),
    linear-gradient(180deg, #0f5f5c 0%, #0a3d3b 100%);
  box-sizing: border-box;
  color: #dbfff5;
`

const RetroHeroHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`

const RetroSignal = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`

const RetroSignalDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #8cff9a;
  box-shadow: 0 0 10px rgba(140, 255, 154, 0.8);
`

const RetroHeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const RetroKicker = styled.div`
  font-size: 0.82rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #9be5d3;
`

const RetroHeadline = styled.h2`
  margin: 0;
  font-size: 2rem;
  line-height: 1.1;
  color: #ffffff;

  @media screen and (max-width: 600px) {
    font-size: 1.55rem;
  }
`

const RetroSubline = styled.p`
  margin: 0;
  max-width: 500px;
  line-height: 1.6;
  color: #d3fff1;
`

const RetroBadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const RetroBadge = styled.span`
  padding: 5px 9px;
  border: 1px solid rgba(219, 255, 245, 0.45);
  background: rgba(5, 28, 27, 0.4);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.04em;
`

const RetroFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding-top: 10px;
  border-top: 1px solid rgba(219, 255, 245, 0.28);
  font-size: 0.8rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const RetroFooterLabel = styled.span`
  color: #9be5d3;
`

const RetroFooterValue = styled.span`
  color: #ffffff;
  font-weight: 700;
`

const WindowBody = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #c3c7cb;
`

const SectionWindow = styled.section`
  position: relative;
  padding-top: 14px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  background: linear-gradient(180deg, #ebe7dd 0%, #d4d0c8 100%);
  box-shadow: inset 1px 1px 0 #dfdfdf;
`

const SectionLabel = styled.div`
  position: absolute;
  top: -1px;
  left: 12px;
  padding: 3px 8px 4px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  background: #c3c7cb;
  color: #202020;
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`

const SectionMeta = styled.span`
  font-size: 0.72rem;
  color: #4f4f4f;
`

const SectionBody = styled.div`
  padding: 16px 12px 14px;
`

const MarkdownContent = styled(Markdown)`
  color: #1d1d1d;
  line-height: 1.6;

  > *:first-child {
    margin-top: 0;
  }

  > *:last-child {
    margin-bottom: 0;
  }

  h2,
  h3,
  h4 {
    margin: 0 0 10px;
    color: #0a2c88;
  }

  h4 {
    margin-top: 18px;
    padding-top: 18px;
    border-top: 1px solid #a0a0a0;
    font-size: 0.98rem;
    font-weight: 700;
  }

  p,
  li {
    font-size: 0.93rem;
  }

  ul {
    margin: 0;
    padding-left: 20px;
  }

  p + p {
    margin-top: 10px;
  }

  strong {
    color: #111111;
  }
`

const SkillSection = styled.section`
  padding: 0;
`

const SkillTitle = styled.h2`
  margin: 0 0 8px;
  font-size: 1.1rem;
  color: #0a2c88;
`

const SkillDescription = styled.p`
  margin: 0 0 14px;
  line-height: 1.5;
  font-size: 0.92rem;
`

const SkillGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 12px;
`

const SkillCard = styled.div`
  min-height: 102px;
  padding: 14px 10px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: relative;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #7a7a7a;
  border-bottom: 2px solid #7a7a7a;
  background: linear-gradient(180deg, #f8f5ef 0%, #dfd8cd 100%);
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: #287d78;
  }
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

const profileMarkdownContent = `
- 😀이름 : 천재현
- 👀나이 : ${currentAgeText}
- 🏫서일대학교 컴퓨터전자공학
- 📩이메일 : 1000jjj@naver.com

## 
루틴한 삶을 좋아하는 프론트엔드 개발자입니다.
'모르는 것을 아는 것'이라는 태도를 지향하며 살고 있습니다.

AI 자동화 워크플로우와 개발 에이전트에 많은 관심을 가지고 있습니다. AI를 활용해 아이디어를 빠르게 프로덕트로 구체화하고, 개발 과정을 효율화하는 방법을 탐구하고 있습니다.
`

const autoMonitorCareerMarkdownContent = `
### 오토오모니터 (2024/07 ~ )

개발팀 매니저로서 자사 솔루션의 프론트엔드 구조 개선과 신규 서비스 개발을 주도하고 있습니다.

#### 1. 자사 메인 솔루션 기술 스택 현대화

**PHP 기반 메인 솔루션을 Next.js로 전환해 중복 구현과 유지보수 비효율을 개선했습니다.**

- 기존 요구사항과 동작을 유지하면서 페이지·컴포넌트 구조를 재설계하고 구현
- PHP 화면 구성에서 반복되던 중복 코드를 줄이고 확장 가능한 프론트엔드 구조로 전환
- 마이그레이션 방향 수립부터 실제 화면 구현까지 전환 작업 주도

#### 2. AI 기반 수정 요청 자동화 워크플로우 구축

**수정 요청 접수부터 분류, 코드 수정 초안 및 PR 생성까지 이어지는 AI 자동화 흐름을 구축했습니다.**

- 메신저와 구두로 분산되던 비개발자 수정 요청을 Notion 태스크로 일원화
- AI가 요청의 중요도와 작업 유형을 분류하고 코드베이스 수정 초안을 생성하도록 구성
- 반복적인 소규모 수정 업무를 표준화해 요청 누락과 수작업 부담 감소에 기여

#### 3. 마케팅 데이터 시각화 대시보드 구현

**캠페인 성과를 기간·캠페인별로 비교할 수 있는 Vue.js 기반 대시보드를 구현했습니다.**

- CTR, 전환율 등 주요 퍼포먼스 마케팅 지표 시각화
- 여러 캠페인의 성과를 한 화면에서 비교할 수 있도록 구성
- 반복적인 데이터 확인 업무를 줄이고 성과 정보 접근성을 개선

#### 4. 뉴스·소셜 미디어 모니터링 플랫폼 운영

**사용자 요구사항을 반영하며 자사 모니터링 플랫폼의 기능 개선과 안정화를 담당했습니다.**

- 운영 중 발생하는 사용자 요구사항과 이슈 분석 및 반영
- 기존 기능 개선과 서비스 안정화 작업 수행
- 지속적인 유지보수를 통해 서비스 운영 품질 관리
`

const geumseongCareerMarkdownContent = `
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
      width="680px"
      top="10%"
      left="10%"
      zIndex={windowRenderObj.myInfoWindow.zIndexValue}
      onClick={() => onClickWindow('myInfoWindow')}
    >
      <AppWindow.Header onClick={event => onClickWindowClose('myInfoWindow', event)}>내 정보</AppWindow.Header>
      <AppWindow.Content>
        <AppWindow.ContentTitle text="프론트엔드 개발자 천재현 입니다." />
        <AppWindow.ContentSection height="450px">
          <AppWindow.ScrollView width="100%">
            <WindowBody>
              <>
                <RetroHero>
                  <RetroHeroHeader>
                    <RetroSignal>
                      <RetroSignalDot />
                      <span>System Ready</span>
                    </RetroSignal>
                    <span>Profile.exe</span>
                  </RetroHeroHeader>
                  <RetroHeroContent>
                    <RetroKicker>Windows 95 Developer Card</RetroKicker>
                    <RetroHeadline>CHEON JAE HYEON</RetroHeadline>
                    <RetroSubline>
                      루틴한 삶을 좋아하는 프론트엔드 개발자입니다.
                      <br />
                      &apos;모르는 것을 아는 것&apos;이라는 태도를 지향하며 살고 있습니다.
                    </RetroSubline>
                    <RetroSubline>
                      최근에는 AI 자동화 워크플로우와 개발 에이전트에 많은 관심을 가지고 있습니다. AI를 활용해 아이디어를 빠르게
                      프로덕트로 구체화하고, 개발 과정을 효율화하는 방법을 탐구하고 있습니다.
                    </RetroSubline>
                    <RetroBadgeRow>
                      <RetroBadge>React</RetroBadge>
                      <RetroBadge>Next.js</RetroBadge>
                      <RetroBadge>PHP</RetroBadge>
                      <RetroBadge>Python</RetroBadge>
                    </RetroBadgeRow>
                  </RetroHeroContent>
                  <RetroFooter>
                    <RetroFooterLabel>Current Mode</RetroFooterLabel>
                    <RetroFooterValue>Building products, not just pages</RetroFooterValue>
                  </RetroFooter>
                </RetroHero>

                <SectionWindow>
                  <SectionLabel>
                    <span>Intro.txt</span>
                    <SectionMeta>Readable / Structured</SectionMeta>
                  </SectionLabel>
                  <SectionBody>
                    <MarkdownContent>{profileMarkdownContent}</MarkdownContent>
                  </SectionBody>
                </SectionWindow>

                <SectionWindow>
                  <SectionLabel>
                    <span>Career_01.log</span>
                    <SectionMeta>Work History</SectionMeta>
                  </SectionLabel>
                  <SectionBody>
                    <MarkdownContent>{autoMonitorCareerMarkdownContent}</MarkdownContent>
                  </SectionBody>
                </SectionWindow>

                <SectionWindow>
                  <SectionLabel>
                    <span>Career_02.log</span>
                    <SectionMeta>Work History</SectionMeta>
                  </SectionLabel>
                  <SectionBody>
                    <MarkdownContent>{geumseongCareerMarkdownContent}</MarkdownContent>
                  </SectionBody>
                </SectionWindow>

                <SectionWindow>
                  <SectionLabel>
                    <span>Skills.ini</span>
                    <SectionMeta>Primary Stack</SectionMeta>
                  </SectionLabel>
                  <SectionBody>
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
                  </SectionBody>
                </SectionWindow>

                <SectionWindow>
                  <SectionLabel>
                    <span>License.dat</span>
                    <SectionMeta>Certification</SectionMeta>
                  </SectionLabel>
                  <SectionBody>
                    <MarkdownContent>{licenseMarkdownContent}</MarkdownContent>
                  </SectionBody>
                </SectionWindow>
              </>
            </WindowBody>
          </AppWindow.ScrollView>
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
  )
}
