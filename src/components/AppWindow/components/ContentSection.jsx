import styled from 'styled-components'

export default function ContentSection({ children, height }) {
  return <SectionContainer height={height}>{children}</SectionContainer>
}

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: ${props => props.height};
`
