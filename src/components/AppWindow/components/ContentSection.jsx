import styled from 'styled-components'

export default function ContentSection({ children, height, direction = 'column' }) {
  return (
    <SectionContainer height={height} direction={direction}>
      {children}
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  display: flex;
  justify-content: space-between;
  height: ${props => props.height};
  @media screen and (max-width: 600px) {
    flex-direction: ${props => props.direction};
  }
`
