import BoardItem from 'components/AppWindow/windows/blog/BoardItem'
import AppWindow from 'components/AppWindow/AppWindow'
import styled from 'styled-components'
import { useBlogQuery } from 'utils/query/useBlogQuery'
import { Hourglass } from 'react95'

const options = ['React', 'JavaScript', 'Other'].map((label, index) => ({ value: index + 1, label }))

export default function BlogHome() {
  const { data, isLoading } = useBlogQuery()
  return (
    <>
      <Title>천재현의 블로그</Title>
      <ListWrapper>
        <AppWindow.Select options={options} width="40%" />
        {!isLoading ? data.map(item => <BoardItem dataObj={item} />) : <Hourglass />}
      </ListWrapper>
    </>
  )
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
