import styled from 'styled-components'

export default function ContentSection({ children }) {
  return <SectionContainer>{children}</SectionContainer>
}

const SectionContainer = styled.section`
  display: flex;
  height: 300px;

`
