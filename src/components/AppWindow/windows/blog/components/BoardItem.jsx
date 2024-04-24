import styled from 'styled-components'
import ContentImg from '../../../components/ContentImg'
import { Link } from 'react-router-dom'
import getThumnailImg from 'utils/getThumbnailImg'

export default function BoardItem({ dataObj }) {
  return (
    <BoardItemWrapper>
      <ImgWrapper>
        <ContentImg src={getThumnailImg(dataObj.content)} width="100%" height="100%" />
      </ImgWrapper>
      <TextWrapperLink to={`/blog/${dataObj.id}`} state={{ item: dataObj }}>
        <BoardTitle>{dataObj.title}</BoardTitle>
        <BoardContent>{dataObj.summary}</BoardContent>
      </TextWrapperLink>
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
const TextWrapperLink = styled(Link)`
  width: 82%;
  height: 100%; /* 원하는 최대 높이 설정 */
  overflow: hidden;
  text-overflow: ellipsis;
  display: flex;
  flex-direction: column;
  text-decoration: none;
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
