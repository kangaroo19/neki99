/* eslint-disable */

import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import 'highlight.js/styles/github.css' // 코드 하이라이트 스타일 적용
import 'react-quill/dist/quill.snow.css'
import { useGetBlogDetail } from 'utils/query/useBlogQuery'
import { useBlogItemMutation } from 'utils/query/useBlogMutation'

export default function BlogDetail() {
  const { id } = useParams() // 현재 페이지의 id값
  const { data, isLoading } = useGetBlogDetail(id) // id 값에 따른 블로그 GET
  const { mutate } = useBlogItemMutation(2)
  const onClickTest = (method, data) => {
    // mutate 함수는 단일인자만 받으므로 여러 값을 인자로 넣으려면 객체로 보내야함
    mutate({
      method: method,
      data: data,
    })
  }
  return (
    <>
      {!isLoading && (
        <>
          <TitleWrapper>
            <Title>{data.title}</Title>
            <쩌리컨테이너>
              <게시물생성날짜>생성일 : {data.createdAt}</게시물생성날짜>
              <삭제및수정>
                <span onClick={() => onClickTest('update', 'updateData')}>수정</span>
                <span>/</span>
                <span onClick={() => onClickTest('delete', id)}>삭제</span>
              </삭제및수정>
            </쩌리컨테이너>
          </TitleWrapper>
          <마크다운 dangerouslySetInnerHTML={{ __html: data.content }} />
        </>
      )}
    </>
  )
}

const TitleWrapper = styled.div`
  padding: 10px;
  border-bottom: 3px solid #696969;
`
const Title = styled.div`
  padding: 10px;
  font-size: 2rem;
  text-align: center;
  @media screen and (max-width: 600px) {
    font-size: 1.6rem;
  }
`
const 쩌리컨테이너 = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`
const 게시물생성날짜 = styled.div``
const 삭제및수정 = styled.div`
  > span {
    cursor: pointer;
  }
`

const 마크다운 = styled.div`
  width: 100%;
  padding: 20px 0;
  * {
    width: 100%;
  }
`
