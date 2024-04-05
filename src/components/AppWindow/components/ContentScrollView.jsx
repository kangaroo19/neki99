import { ScrollView } from 'react95'
import styled from 'styled-components'

export default function ContentScrollView({ children, flex = false, width, background = 'beige' }) {
  return (
    <ScorllViewContainer flex={flex} width={width} background={background}>
      {children}
    </ScorllViewContainer>
  )
}

const ScorllViewContainer = styled(ScrollView)`
  width: ${props => props.width};
  height: 100%;
  background: ${props => props.background};
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
  > div {
    display: ${props => (props.flex ? 'flex' : 'block')};
    justify-content: center;
    flex-wrap: wrap;
  }
`
