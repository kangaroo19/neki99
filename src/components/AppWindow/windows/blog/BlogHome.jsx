/* eslint-disable */

import BoardItem from 'components/AppWindow/windows/blog/components/BoardItem'
import AppWindow from 'components/AppWindow/AppWindow'
import styled from 'styled-components'
import { useBlogQuery } from 'utils/query/useBlogQuery'
import { useState, useEffect } from 'react'

const options = ['all', 'React', 'JavaScript', 'Other'].map((label, index) => ({
  value: index + 1,
  label,
}))

export default function BlogHome() {
  const [category, setCategory] = useState(options[0])
  const { data, isLoading, isFetching } = useBlogQuery(category)
  if (isLoading || isFetching) {
    return null
  }
  const onChangeSelect = data => {
    setCategory(data)
  }
  return (
    <>
      <Title>천재현의 블로그</Title>
      <AppWindow.Select onChange={onChangeSelect} options={options} width="40%" />
      {data.length > 0 ? (
        data.map(item => <BoardItem dataObj={item} key={item.id} />)
      ) : (
        <NoDataResult>게시물이 없습니다.</NoDataResult>
      )}
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
// ListWrapper 안에 게시물들과 카테고리 버튼 들어가도록
const ListWrapper = styled.div`
  margin: 0 auto;
  width: 60%;
  padding: 0 30px;
  background: white;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`

const NoDataResult = styled.div`
  height: 400px;
  font-size: 2rem;
  text-align: center;
`
