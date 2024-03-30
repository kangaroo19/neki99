import styled from 'styled-components'

export default function ContentTitle({ children }) {
  return <Title>{children}</Title>
}

const Title = styled.div`
  font-weigth: 700;
  font-size: 1.6rem;
  padding-bottom: 10px;
`
