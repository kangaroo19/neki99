import styled from 'styled-components'

export default function ContentImg({ src, alt, width, height }) {
  return <ContentImage src={src} alt={alt} width={width} height={height} />
}

const ContentImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
`
