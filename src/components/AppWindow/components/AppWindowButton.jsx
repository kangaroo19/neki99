import { Button } from 'react95'
import styled from 'styled-components'

export default function AppWindowButton({ onClick, children, width, height, type = 'button' }) {
  return (
    <ButtonStyled onClick={onClick} width={width} height={height} type={type}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled(Button)`
  width: ${props => props.width};
  height: ${props => props.height};
  flex-direction: column;
`
