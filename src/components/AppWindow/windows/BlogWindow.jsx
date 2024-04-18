import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import AppWindow from '../AppWindow'
import styled from 'styled-components'
import BoardItem from '../components/BoardItem'
import { Suspense } from 'react'
import { Hourglass } from 'react95'
import { Route, Routes, useNavigate } from 'react-router-dom'

const options = ['React', 'JavaScript', 'Other'].map((label, index) => ({ value: index + 1, label }))

export default function BlogWindow() {
  const { onClickWindowClose, windowRenderObj, onClickWindow } = useAppWindowRender()
  const navigate = useNavigate()
  return (
    <Suspense fallback={<Hourglass />}>
      <AppWindow width="100vw" height="93vh" top="0%" left="0%" zIndex={windowRenderObj.blogWindow.zIndexValue} onClick={() => onClickWindow('blogWindow')}>
        <AppWindow.Header
          onClick={() => {
            onClickWindowClose('blogWindow')
            navigate('/') // 홈으로 이동
          }}
        >
          블로그
        </AppWindow.Header>
        <AppWindow.HeadMenu />
        <AppWindow.Content height="100%">
          <AppWindow.ContentSection height="80%">
            <AppWindow.ScrollView width="100%" background="white">
              <Routes>
                <Route path="/" element={<BlogHome />} />
                <Route path="/detail" element={<BlogDetail />} />
              </Routes>
            </AppWindow.ScrollView>
          </AppWindow.ContentSection>
        </AppWindow.Content>
      </AppWindow>
    </Suspense>
  )
}

function BlogHome() {
  return (
    <>
      <Title>천재현의 블로그</Title>
      <ListWrapper>
        <AppWindow.Select options={options} width="40%" />
        <BoardItem />
        <BoardItem />
        <BoardItem />
        <BoardItem />
      </ListWrapper>
    </>
  )
}
function BlogDetail() {
  return <div>다이나믹라우팅</div>
}

const Title = styled.div`
  text-align: center;
  font-size: 2rem;
  padding: 10px;
  background: black;
  color: white;
`
// ListWrapper 안에 게시물들과 카테고리 버튼 들어가도록
const ListWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`
