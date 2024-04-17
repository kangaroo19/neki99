import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import AppWindow from '../AppWindow'
import styled from 'styled-components'
import { GroupBox } from 'react95'

export default function BlogWindow() {
  const { onClickWindowClose, windowRenderObj, onClickWindow } = useAppWindowRender()
  return (
    <AppWindow width="100vw" height="93vh" top="0%" left="0%" zIndex={windowRenderObj.blogWindow.zIndexValue} onClick={() => onClickWindow('blogWindow')}>
      <AppWindow.Header onClick={() => onClickWindowClose('blogWindow')}>블로그</AppWindow.Header>
      <AppWindow.HeadMenu />
      <AppWindow.Content height="100%">
        <AppWindow.ContentSection height="80%">
          <AppWindow.ScrollView width="100%" background="white">
            <Title>네키의 블로그</Title>
            <ListWrapper>
              <GroupBox label="category">
                {/* <ul>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                  <li>React</li>
                </ul> */}
                <AppWindow.Button width="25%">React</AppWindow.Button>
                <AppWindow.Button width="25%">React</AppWindow.Button>
                <AppWindow.Button width="25%">React</AppWindow.Button>
                <AppWindow.Button width="25%">React</AppWindow.Button>
              </GroupBox>
            </ListWrapper>
          </AppWindow.ScrollView>
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
  )
}

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 10px;
`
// ListWrapper 안에 게시물들과 카테고리 버튼 들어가도록
const ListWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
