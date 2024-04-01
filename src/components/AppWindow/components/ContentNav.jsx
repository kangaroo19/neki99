import { Button } from 'react95'
import styled from 'styled-components'

export default function ContentNav() {
  const onClickRouteBtn = url => {
    window.open(url)
  }
  return (
    <ButtonContainer>
      <CustomButton primary onClick={() => onClickRouteBtn('https://github.com/kangaroo19')}>
        GitHub
      </CustomButton>
      <CustomButton primary onClick={() => onClickRouteBtn('https://kangcheon.tistory.com/')}>
        Blog
      </CustomButton>
      <CustomButton primary onClick={() => onClickRouteBtn('https://www.notion.so/442406f327bd4af5835947bc7f7d1c98')}>
        Notion
      </CustomButton>
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
