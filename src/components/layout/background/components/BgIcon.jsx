import styled from 'styled-components'
import useMediaQuery from 'utils/hook/useMediaQuery'

export default function BgIcon({
  title,
  imgObj,
  onDoubleClick,
  border = '1px solid rgb(0, 128, 128)',
  color = 'white',
}) {
  const viewPortSize = useMediaQuery()

  return (
    <IconContainer
      onClick={viewPortSize === 'mobile' ? onDoubleClick : null}
      onDoubleClick={viewPortSize !== 'mobile' && onDoubleClick}
      border={border}
      color={color}
    >
      <IconImage src={imgObj.src} alt={imgObj.alt} />
      <IconText>{title}</IconText>
    </IconContainer>
  )
}

const IconContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: ${props => props.border};
  color: ${props => props.color};
  &:active {
    border: 1px dotted black;
  }
  @media screen and (max-width: 600px) {
    width: 90px;
    height: 80px;
  }
`
const IconImage = styled.img`
  width: 70%;
  height: 70%;
`

const IconText = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`
