import styled from 'styled-components'

export default function SpinnerContainer({ children, width, height }) {
  return (
    <SpinnerContainerStyled width={width} height={height}>
      {children}
    </SpinnerContainerStyled>
  )
}

const SpinnerContainerStyled = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: center;
  align-items: center;
`
