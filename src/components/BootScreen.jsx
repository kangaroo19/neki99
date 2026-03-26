import styled, { keyframes } from 'styled-components'

const loadingSegments = ['#87d728', '#7dcc25', '#72c121']

export default function BootScreen() {
  return (
    <BootScreenContainer>
      <BootScreenCenter>
        <BrandBlock>
          <BrandTopText>천재현의</BrandTopText>
          <BrandTitleRow>
            <BrandTitle>프론트엔드</BrandTitle>
            <BrandTitleAccent>XP</BrandTitleAccent>
          </BrandTitleRow>
          <BrandSubTitle>Portfolio Edition</BrandSubTitle>
        </BrandBlock>

        <LoadingBarFrame>
          <LoadingBarTrack>
            <LoadingBarSegments>
              {loadingSegments.map(segmentColor => (
                <LoadingSegment key={segmentColor} $segmentColor={segmentColor} />
              ))}
            </LoadingBarSegments>
          </LoadingBarTrack>
        </LoadingBarFrame>
      </BootScreenCenter>
    </BootScreenContainer>
  )
}

const segmentSlide = keyframes`
  0% {
    transform: translateX(-84px);
  }

  100% {
    transform: translateX(132px);
  }
`

const BootScreenContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background:
    linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.02) 0,
      rgba(255, 255, 255, 0.02) 1px,
      transparent 1px,
      transparent 180px
    ),
    #000000;
  color: #ffffff;
  overflow: hidden;
`

const BootScreenCenter = styled.div`
  width: min(520px, 88vw);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
`

const BrandBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`

const BrandTopText = styled.span`
  font-size: 1rem;
  letter-spacing: 0.03em;
  color: #e7e7e7;
`

const BrandTitleRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  line-height: 0.9;
`

const BrandTitle = styled.span`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 700;
  letter-spacing: -0.03em;
`

const BrandTitleAccent = styled.span`
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: #f58a1f;
  transform: translateY(-4px);
`

const BrandSubTitle = styled.span`
  font-size: clamp(1.2rem, 3.2vw, 2rem);
  color: #f2f2f2;
`

const LoadingBarFrame = styled.div`
  width: min(160px, 45vw);
  padding: 3px;
  border-top: 1px solid #8e8e8e;
  border-left: 1px solid #8e8e8e;
  border-right: 1px solid #f4f4f4;
  border-bottom: 1px solid #f4f4f4;
  border-radius: 4px;
  background: #1d1d1d;
`

const LoadingBarTrack = styled.div`
  position: relative;
  height: 16px;
  overflow: hidden;
  border-radius: 2px;
  background: #050505;
`

const LoadingBarSegments = styled.div`
  position: absolute;
  top: 2px;
  left: 0;
  display: flex;
  gap: 2px;
  animation: ${segmentSlide} 1.5s linear infinite;
`

const LoadingSegment = styled.span`
  width: 18px;
  height: 12px;
  background: ${props => props.$segmentColor};
  box-shadow:
    inset 1px 1px 0 rgba(255, 255, 255, 0.32),
    inset -1px -1px 0 rgba(0, 0, 0, 0.35);
`
