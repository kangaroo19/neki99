import styled from 'styled-components'
import ContentImg from '../../../components/ContentImg'
import { Link } from 'react-router-dom'
import { useGetBlogDetail } from 'utils/query/useBlogQuery'

export default function BoardItem({ dataObj }) {
  const { refetch, isLoading, isFetching } = useGetBlogDetail(dataObj.id)
  const onClick = () => {
    refetch()
    // console.log(dataObj)
  }
  if (isFetching || isLoading) return null
  return (
    <BoardItemWrapper>
      <ImgWrapper>
        <ContentImg src={dataObj.img} width="100%" height="100%" />
      </ImgWrapper>
      <TextWrapperLink onClick={onClick} to={`/blog/${dataObj.id}`}>
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
  box-sizing: border-box;
  padding: 10px 0;
  @media screen and (max-width: 600px) {
    height: 100px;
  }
`

const ImgWrapper = styled.div`
  width: 18%;
  height: 100%;
  padding: 10px;
  @media screen and (max-width: 600px) {
    width: 80px;
    height: 80px;
  }
`
const TextWrapperLink = styled(Link)`
  width: 82%;
  height: 100%; /* 원하는 최대 높이 설정 */
  overflow: hidden;
  flex-direction: column;
  text-decoration: none;
`
const BoardTitle = styled.div`
  font-weight: 600;
  white-space: nowrap; /*글자를 한줄로 모아준다*/
  overflow: hidden;
  font-size: 1.4rem;
  width: 100%;
  cursor: pointer;
  text-overflow: ellipsis;
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`
const BoardContent = styled.div`
  font-size: 1rem;
  text-overflow: ellipsis;
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`
