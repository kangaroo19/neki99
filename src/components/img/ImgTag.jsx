import styled from 'styled-components'

export default function ImgTag({ imgObj, width, height }) {
  return <ImgStyle src={imgObj.src} alt={imgObj.alt} width={width} height={height} />
}

const ImgStyle = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`
