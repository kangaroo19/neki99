import { TypeAnimation } from 'react-type-animation'
import styled from 'styled-components'

export default function ContentTitle({ text }) {
  return (
    <Title
      sequence={[
        // Same substring at the start will only be typed once, initially
        text,
        1000,
      ]}
      repeat={Infinity}
      speed={200}
    />
  )
}

const Title = styled(TypeAnimation)`
  font-weigth: 700;
  display: block;
  font-size: 1.8rem;
  padding-bottom: 10px;
  text-align: center;
  
`
