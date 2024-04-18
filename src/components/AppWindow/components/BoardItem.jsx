import styled from 'styled-components'
import ContentImg from './ContentImg'
import testImg from 'asset/images/myFace.jpg'

export default function BoardItem() {
  return (
    <BoardItemWrapper>
      <ImgWrapper>
        <ContentImg src={testImg} width="100%" height="100%" />
      </ImgWrapper>
      <TextWrapper>
        <BoardTitle>깃허브 페이지와 커스텀 도메인</BoardTitle>
        <BoardContent>
          깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와
          커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀
          도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인깃허브 페이지와 커스텀 도메인
        </BoardContent>
      </TextWrapper>
    </BoardItemWrapper>
  )
}

const BoardItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #696969;
  height: 130px;
  padding: 10px 0;
`

const ImgWrapper = styled.div`
  width: 120px;
  height: 120px;
  padding: 10px;
`
const TextWrapper = styled.div`
  width: 80%;
  max-height: 100%; /* 원하는 최대 높이 설정 */
  overflow: hidden;
  text-overflow: ellipsis;

`
const BoardTitle = styled.div`
  font-weight: 600;
  font-size: 1.4rem;
  height: 20%;
  cursor: pointer;
`
const BoardContent = styled.div`
  font-size: 1rem;
  text-overflow: ellipsis;
  height: 80%;
`
