import { Button } from 'react95'
import styled from 'styled-components'

export default function ContentNav() {
  return (
    <ButtonContainer>
      <CustomButton primary>GitHub</CustomButton>
      <CustomButton primary>Blog</CustomButton>
      <CustomButton primary>Notion</CustomButton>
    </ButtonContainer>
  )
}

const ButtonContainer = styled.nav`
  width: 25%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const CustomButton = styled(Button)`
  width: 90%;
`
