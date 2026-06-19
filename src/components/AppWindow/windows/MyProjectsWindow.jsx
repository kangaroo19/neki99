import { useState } from 'react'
import { Button } from 'react95'
import styled from 'styled-components'
import AppWindow from '../AppWindow'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

const projects = [
  {
    id: 'react-floating-profile',
    tabLabel: 'react-floating-profile',
    title: 'react-floating-profile',
    type: 'Open Source Package',
    status: 'v1.1.8',
    description:
      'GitHub 프로필을 더 손쉽게 제품이나 포트폴리오 화면에 녹여낼 수 있도록 만든 floating UI 라이브러리입니다.',
    tags: ['React', 'TypeScript', 'GitHub Profile', 'Floating UI'],
    about:
      '`react-floating-profile`은 GitHub 사용자 정보를 화면 가장자리에서 자연스럽게 보여줄 수 있도록 만든 React 컴포넌트입니다. 단순한 프로필 카드가 아니라, pinned repository와 위치 설정까지 포함해서 바로 붙여 쓸 수 있는 형태를 목표로 만들었습니다.',
    features: [
      'GitHub 프로필 정보를 화면 한쪽에 floating UI 형태로 표시',
      'pinned repository를 최대 4개까지 선택해서 함께 노출',
      'top-right, top-left, bottom-right, bottom-left 위치 설정 지원',
      'access token 없이도 동작하고, 필요하면 token으로 API 제한 완화 가능',
    ],
    stack: ['React', 'TypeScript', 'react-markdown', 'rehype-raw', 'remark-gfm', 'remark-directive'],
    detailTitle: 'Quick Start',
    command: 'npm install react-floating-profile',
    details: [
      '패키지를 설치한 뒤 컴포넌트를 import 합니다.',
      '표시할 GitHub username과 pinned repository 목록을 넘깁니다.',
      '원하는 위치와 access token을 선택적으로 설정합니다.',
    ],
    links: [
      {
        label: 'NPM',
        value: 'https://www.npmjs.com/package/react-floating-profile',
        buttonText: '패키지 보기',
      },
      {
        label: 'GitHub',
        value: 'https://github.com/kangaroo19/react-floating-profile',
        buttonText: '저장소 보기',
      },
    ],
  },
  {
    id: 'daily-listen-up',
    tabLabel: '오늘의 리스닝',
    title: '오늘의 리스닝',
    type: '앱인토스 미니앱',
    status: '',
    description:
      '하루 한 문제의 짧은 영어 오디오를 듣고 퀴즈를 풀며, 광고 후 결과 확인과 재도전, 정답 시 토스 포인트 보상 상태 확인까지 이어지는 영어 듣기 미니앱입니다.',
    tags: ['Apps in Toss', 'WebView', 'Listening Quiz', 'Reward Flow'],
    about:
      'Apps in Toss 환경에서 동작하는 영어 듣기 미니앱 입니다. 사용자는 하루에 하나의 짧은 오디오를 듣고 퀴즈를 풀며, 광고 시청 이후 결과 확인과 재도전, 정답 시 보상 상태 확인까지 이어지는 학습 플로우를 경험합니다.',
    features: [
      '하루 1문제 학습 플로우',
      '오디오 1회 청취 UX',
      '5개 선택지 다중 선택 퀴즈',
      '광고 후 결과 확인',
      '오답 시 광고 기반 재도전',
      '정답 시 포인트 보상 상태 확인',
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Apps in Toss SDK', 'TDS Mobile', 'Firebase'],
    detailTitle: 'Technical Focus',
    details: [
      'Toss Login 기반 앱 세션 생성',
      'Apps in Toss 광고 SDK 연동',
      '오늘의 문제, 정답 결과, 보상 상태 API 분리',
      '당일 학습 완료와 중복 보상 방지 흐름 처리',
    ],
    accessGuide: {
      title: '미니앱 들어가는 방법',
      description: '',
      steps: [
        '토스 앱을 실행합니다.',
        '전체 탭이나 검색에서 오늘의 리스닝을 찾습니다.',
        '오늘의 리스닝 미니앱을 열고 당일 리스닝 퀴즈를 시작합니다.',
      ],
    },
    links: [],
  },
]

export default function MyProjectsWindow() {
  const { onClickWindowClose, windowRenderObj, onClickWindow } = useAppWindowRender()
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0].id)
  const selectedProject = projects.find(project => project.id === selectedProjectId) ?? projects[0]

  const onClickOpenLink = url => {
    window.open(url)
  }

  return (
    <AppWindow
      width="760px"
      top="9%"
      left="42%"
      zIndex={windowRenderObj.myProjectWindow.zIndexValue}
      onClick={() => onClickWindow('myProjectWindow')}
    >
      <AppWindow.Header onClick={event => onClickWindowClose('myProjectWindow', event)}>내 프로젝트</AppWindow.Header>
      <AppWindow.Content>
        <AppWindow.ContentTitle text="프로젝트 소개" />
        <AppWindow.ContentSection height="430px">
          <AppWindow.ScrollView width="100%" background="#d4d0c8">
            <WindowBody>
              <ProjectTabs>
                {projects.map(project => (
                  <ProjectTabButton
                    key={project.id}
                    type="button"
                    aria-pressed={project.id === selectedProjectId}
                    $isActive={project.id === selectedProjectId}
                    onClick={() => setSelectedProjectId(project.id)}
                  >
                    {project.tabLabel}
                  </ProjectTabButton>
                ))}
              </ProjectTabs>

              <HeroSection>
                <HeroTopRow>
                  <HeroLabel>{selectedProject.type}</HeroLabel>
                  <HeroVersion>{selectedProject.status}</HeroVersion>
                </HeroTopRow>
                <HeroTitle>{selectedProject.title}</HeroTitle>
                <HeroDescription>{selectedProject.description}</HeroDescription>
                <HeroBadgeRow>
                  {selectedProject.tags.map(tag => (
                    <HeroBadge key={tag}>{tag}</HeroBadge>
                  ))}
                </HeroBadgeRow>
              </HeroSection>

              <SectionFrame>
                <SectionTitle>About</SectionTitle>
                <SectionText>{selectedProject.about}</SectionText>
              </SectionFrame>

              <TwoColumnSection>
                <SectionFrame>
                  <SectionTitle>Key Features</SectionTitle>
                  <List>
                    {selectedProject.features.map(featureItem => (
                      <ListItem key={featureItem}>{featureItem}</ListItem>
                    ))}
                  </List>
                </SectionFrame>

                <SectionFrame>
                  <SectionTitle>Stack</SectionTitle>
                  <TagGrid>
                    {selectedProject.stack.map(stackItem => (
                      <StackTag key={stackItem}>{stackItem}</StackTag>
                    ))}
                  </TagGrid>
                </SectionFrame>
              </TwoColumnSection>

              <SectionFrame>
                <SectionTitle>{selectedProject.detailTitle}</SectionTitle>
                {selectedProject.command && <InstallBox>{selectedProject.command}</InstallBox>}
                <List>
                  {selectedProject.details.map(detailItem => (
                    <ListItem key={detailItem}>{detailItem}</ListItem>
                  ))}
                </List>
              </SectionFrame>

              {selectedProject.accessGuide && (
                <AccessGuideCard>
                  <SectionTitle>{selectedProject.accessGuide.title}</SectionTitle>
                  <SectionText>{selectedProject.accessGuide.description}</SectionText>
                  <StepList>
                    {selectedProject.accessGuide.steps.map((step, index) => (
                      <StepItem key={step}>
                        <StepNumber>{index + 1}</StepNumber>
                        <span>{step}</span>
                      </StepItem>
                    ))}
                  </StepList>
                </AccessGuideCard>
              )}

              {selectedProject.links.length > 0 && (
                <LinkSection>
                  {selectedProject.links.map(linkItem => (
                    <LinkCard key={linkItem.label}>
                      <LinkLabel>{linkItem.label}</LinkLabel>
                      <LinkValue>{linkItem.value}</LinkValue>
                      <LinkButton onClick={() => onClickOpenLink(linkItem.value)}>{linkItem.buttonText}</LinkButton>
                    </LinkCard>
                  ))}
                </LinkSection>
              )}
            </WindowBody>
          </AppWindow.ScrollView>
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
  )
}

const WindowBody = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  background: #c3c7cb;
`

const ProjectTabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`

const ProjectTabButton = styled.button`
  min-height: 34px;
  padding: 0 12px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  background: ${props => (props.$isActive ? '#f5f1e8' : '#d4d0c8')};
  color: #1f1f1f;
  font-family: inherit;
  font-size: 0.86rem;
  font-weight: 700;
  cursor: pointer;

  &[aria-pressed='true'] {
    border-top-color: #808080;
    border-left-color: #808080;
    border-right-color: #ffffff;
    border-bottom-color: #ffffff;
    color: #0a2c88;
  }

  &:focus {
    outline: 1px dotted #222222;
    outline-offset: -5px;
  }
`

const HeroSection = styled.section`
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #6f6f6f;
  border-bottom: 2px solid #6f6f6f;
  background: linear-gradient(180deg, #1249a0 0%, #062d73 100%);
  color: #f8fbff;
`

const HeroTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-size: 0.76rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`

const HeroLabel = styled.span`
  color: #d8e6ff;
`

const HeroVersion = styled.span`
  font-weight: 700;
  color: #ffffff;
`

const HeroTitle = styled.h2`
  margin: 0;
  font-size: 2rem;
  line-height: 1.05;
`

const HeroDescription = styled.p`
  margin: 0;
  line-height: 1.6;
  color: #dbe7ff;
`

const HeroBadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const HeroBadge = styled.span`
  padding: 4px 8px;
  border: 1px solid rgba(255, 255, 255, 0.38);
  background: rgba(255, 255, 255, 0.12);
  font-size: 0.76rem;
  font-weight: 700;
`

const SectionFrame = styled.section`
  padding: 14px 14px 12px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  background: linear-gradient(180deg, #f5f1e8 0%, #dfd8cc 100%);
`

const SectionTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 1rem;
  color: #0a2c88;
`

const SectionText = styled.p`
  margin: 0;
  line-height: 1.6;
  color: #1f1f1f;
`

const TwoColumnSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const List = styled.ul`
  margin: 0;
  padding-left: 18px;
  color: #1f1f1f;
`

const ListItem = styled.li`
  line-height: 1.6;

  & + & {
    margin-top: 6px;
  }
`

const TagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`

const StackTag = styled.span`
  padding: 5px 9px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  background: #d8dde5;
  font-size: 0.78rem;
  font-weight: 700;
  color: #203254;
`

const InstallBox = styled.pre`
  margin: 0 0 12px;
  padding: 10px 12px;
  overflow-x: auto;
  border-top: 2px solid #808080;
  border-left: 2px solid #808080;
  border-right: 2px solid #ffffff;
  border-bottom: 2px solid #ffffff;
  background: #101010;
  color: #98ffb6;
  font-size: 0.84rem;
  font-family: 'Courier New', monospace;
`

const AccessGuideCard = styled.section`
  padding: 14px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #6f6f6f;
  border-bottom: 2px solid #6f6f6f;
  background: linear-gradient(180deg, #e9edf3 0%, #d1d7e0 100%);
`

const StepList = styled.ol`
  margin: 12px 0 0;
  padding: 0;
  display: grid;
  gap: 8px;
  list-style: none;
`

const StepItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  line-height: 1.5;
  color: #1f1f1f;
`

const StepNumber = styled.span`
  width: 22px;
  height: 22px;
  flex-shrink: 0;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  background: #d4d0c8;
  color: #0a2c88;
  font-size: 0.78rem;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
`

const LinkSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const LinkCard = styled.section`
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #808080;
  border-bottom: 2px solid #808080;
  background: linear-gradient(180deg, #e9edf3 0%, #d1d7e0 100%);
`

const LinkLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: #304262;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

const LinkValue = styled.span`
  font-size: 0.82rem;
  line-height: 1.5;
  color: #1f1f1f;
  word-break: break-all;
`

const LinkButton = styled(Button)`
  width: 120px;
`
