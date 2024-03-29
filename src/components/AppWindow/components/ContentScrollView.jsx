import { ScrollView } from 'react95'
import styled from 'styled-components'

export default function ContentScrollView({ children }) {
  return <ScorllViewContainer>{children}</ScorllViewContainer>
}

const ScorllViewContainer = styled(ScrollView)`
  width: 75%;
  height: 100%;
  background: beige;
`
