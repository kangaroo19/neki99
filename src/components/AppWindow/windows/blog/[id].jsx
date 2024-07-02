/* eslint-disable */

import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import 'highlight.js/styles/github.css' // 코드 하이라이트 스타일 적용
import 'react-quill/dist/quill.snow.css'
import { useGetBlogDetail } from 'utils/query/useBlogQuery'
import { useBlogItemMutation } from 'utils/query/useBlogMutation'
import { useAuthStore } from 'utils/zustand/useAuthStore'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

export default function BlogDetail() {
  const { id } = useParams() // 현재 페이지의 id값
  const { data, isLoading } = useGetBlogDetail(id) // id 값에 따른 블로그 GET
  const { mutate } = useBlogItemMutation()
  const { isAuth } = useAuthStore() // 로그인 여부 판별
  const { onClickWindow } = useAppWindowRender()
  const navigate = useNavigate()

  // mutate 함수는 단일인자만 받으므로 여러 값을 인자로 넣으려면 객체로 보내야함
  const onClickMutation = (method, data) => {
    if (isAuth) {
      // 로그인된 상태일 경우, method 값에 따른 함수 수행
      mutate({
        method: method,
        data: data,
      })
    } else {
      // 로그인된 상태 아닐 경우 로그인 창 띄움
      onClickWindow('loginWindow')
    }
  }
  const onClickUpdateButton = () => {
    // 나중에 isAuth 판별 로직 추가
    navigate('/blog/textEdit', { state: data })
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
                <span onClick={onClickUpdateButton}>수정</span>
                <span>/</span>
                <span onClick={() => onClickMutation('delete', id)}>삭제</span>
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
