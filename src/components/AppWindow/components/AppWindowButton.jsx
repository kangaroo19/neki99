import { Button } from 'react95'
import styled from 'styled-components'

export default function AppWindowButton({ children, width, height }) {
  return (
    <ButtonStyled width={width} height={height}>
      {children}
    </ButtonStyled>
  )
}

const ButtonStyled = styled(Button)`
  width: ${props => props.width};
  height: ${props => props.heght};
`
