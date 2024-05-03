/* eslint-disable */

import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import 'highlight.js/styles/github.css' // 코드 하이라이트 스타일 적용
import 'react-quill/dist/quill.snow.css'
import { Suspense } from 'react'
import { Hourglass } from 'react95'

export default function BlogDetail() {
  const location = useLocation()
  const {
    state: { item },
  } = location
  return (
    <Suspense fallback={<Hourglass />}>
      <TitleWrapper>
        <Title>{item.title}</Title>
        <쩌리컨테이너>
          <게시물생성날짜>생성일 : {item.createdAt}</게시물생성날짜>
          <삭제및수정>수정/삭제</삭제및수정>
        </쩌리컨테이너>
      </TitleWrapper>
      <마크다운 dangerouslySetInnerHTML={{ __html: item.content }} />
    </Suspense>
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
const 삭제및수정 = styled.div``

const 마크다운 = styled.div`
  width: 100%;
  padding: 20px 0;
  * {
    width: 100%;
  }
`