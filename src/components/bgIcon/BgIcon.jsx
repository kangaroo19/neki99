import styled from 'styled-components'

export default function BgIcon({ title, imgObj, onDoubleClick, color, border }) {
  return (
    <IconContainer onDoubleClick={onDoubleClick} color={color} border={border}>
      <IconImage src={imgObj.src} alt={imgObj.alt} />
      <div>{title}</div>
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
`
const IconImage = styled.img`
  width: 70%;
  height: 70%;
`
