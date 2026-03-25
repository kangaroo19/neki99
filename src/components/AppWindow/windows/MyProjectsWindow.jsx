import { Button } from 'react95'
import styled from 'styled-components'
import AppWindow from '../AppWindow'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

const packageInfo = {
  title: 'react-floating-profile',
  version: 'v1.1.8',
  npmUrl: 'https://www.npmjs.com/package/react-floating-profile',
  githubUrl: 'https://github.com/kangaroo19/react-floating-profile',
  installCommand: 'npm install react-floating-profile',
}

const featureList = [
  'GitHub 프로필 정보를 화면 한쪽에 floating UI 형태로 표시',
  'pinned repository를 최대 4개까지 선택해서 함께 노출',
  'top-right, top-left, bottom-right, bottom-left 위치 설정 지원',
  'access token 없이도 동작하고, 필요하면 token으로 API 제한 완화 가능',
]

const stackList = ['React', 'TypeScript', 'react-markdown', 'rehype-raw', 'remark-gfm', 'remark-directive']

const usageSteps = [
  '패키지를 설치한 뒤 컴포넌트를 import 합니다.',
  '표시할 GitHub username과 pinned repository 목록을 넘깁니다.',
  '원하는 위치와 access token을 선택적으로 설정합니다.',
]

export default function MyProjectsWindow() {
  const { onClickWindowClose, windowRenderObj, onClickWindow } = useAppWindowRender()

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
        <AppWindow.ContentTitle text="라이브러리 프로젝트 소개" />
        <AppWindow.ContentSection height="430px">
          <AppWindow.ScrollView width="100%" background="#d4d0c8">
            <WindowBody>
              <HeroSection>
                <HeroTopRow>
                  <HeroLabel>Open Source Package</HeroLabel>
                  <HeroVersion>{packageInfo.version}</HeroVersion>
                </HeroTopRow>
                <HeroTitle>{packageInfo.title}</HeroTitle>
                <HeroDescription>
                  GitHub 프로필을 더 손쉽게 제품이나 포트폴리오 화면에 녹여낼 수 있도록 만든 floating UI
                  라이브러리입니다.
                </HeroDescription>
                <HeroBadgeRow>
                  <HeroBadge>React</HeroBadge>
                  <HeroBadge>TypeScript</HeroBadge>
                  <HeroBadge>GitHub Profile</HeroBadge>
                  <HeroBadge>Floating UI</HeroBadge>
                </HeroBadgeRow>
              </HeroSection>

              <SectionFrame>
                <SectionTitle>About</SectionTitle>
                <SectionText>
                  `react-floating-profile`은 GitHub 사용자 정보를 화면 가장자리에서 자연스럽게 보여줄 수 있도록
                  만든 React 컴포넌트입니다. 단순한 프로필 카드가 아니라, pinned repository와 위치 설정까지
                  포함해서 바로 붙여 쓸 수 있는 형태를 목표로 만들었습니다.
                </SectionText>
              </SectionFrame>

              <TwoColumnSection>
                <SectionFrame>
                  <SectionTitle>Key Features</SectionTitle>
                  <List>
                    {featureList.map(featureItem => (
                      <ListItem key={featureItem}>{featureItem}</ListItem>
                    ))}
                  </List>
                </SectionFrame>

                <SectionFrame>
                  <SectionTitle>Stack</SectionTitle>
                  <TagGrid>
                    {stackList.map(stackItem => (
                      <StackTag key={stackItem}>{stackItem}</StackTag>
                    ))}
                  </TagGrid>
                </SectionFrame>
              </TwoColumnSection>

              <SectionFrame>
                <SectionTitle>Quick Start</SectionTitle>
                <InstallBox>{packageInfo.installCommand}</InstallBox>
                <List>
                  {usageSteps.map(usageStep => (
                    <ListItem key={usageStep}>{usageStep}</ListItem>
                  ))}
                </List>
              </SectionFrame>

              <LinkSection>
                <LinkCard>
                  <LinkLabel>NPM</LinkLabel>
                  <LinkValue>{packageInfo.npmUrl}</LinkValue>
                  <LinkButton onClick={() => onClickOpenLink(packageInfo.npmUrl)}>패키지 보기</LinkButton>
                </LinkCard>
                <LinkCard>
                  <LinkLabel>GitHub</LinkLabel>
                  <LinkValue>{packageInfo.githubUrl}</LinkValue>
                  <LinkButton onClick={() => onClickOpenLink(packageInfo.githubUrl)}>저장소 보기</LinkButton>
                </LinkCard>
              </LinkSection>
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
