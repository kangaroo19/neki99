import BoardItem from 'components/AppWindow/windows/blog/components/BoardItem'
import AppWindow from 'components/AppWindow/AppWindow'
import styled from 'styled-components'
import { useBlogQuery } from 'utils/query/useBlogQuery'

const options = ['React', 'JavaScript', 'Other'].map((label, index) => ({
  value: index + 1,
  label,
}))

export default function BlogHome() {
  const { data, isLoading, isFetching } = useBlogQuery()
  if (isLoading || isFetching) {
    return null
  }
  return (
    <>
      <Title>천재현의 블로그</Title>
      <AppWindow.Select options={options} width="40%" />
      {data.map(item => (
        <BoardItem dataObj={item} key={item.id} />
      ))}
    </>
  )
}

const Title = styled.div`
  position: absoulte;
  width: 100%;
  top: 0;
  left: 0;
  text-align: center;
  font-size: 2rem;
  background: black;
  color: white;
  padding: 20px 0;
`
