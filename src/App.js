import { createGlobalStyle, ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
import Layout from './components/layout/Layout'
import { styleReset } from 'react95'
import BgIcon from 'components/bgIcon/BgIcon'
import myComputer from 'asset/images/myComputer.png'
import Galmuri9 from 'asset/font/Galmuri9.ttf'
import MyInfoWindow from 'components/AppWindow/MyInfoWindow'

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Galmuri9}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${Galmuri9}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
  }
`

export default function App() {
  return (
    <ThemeProvider theme={original}>
      <GlobalStyles />
      <Layout>
        <Layout.WindowContainer>
          <BgIcon title="내 컴퓨터" imgObj={{ src: myComputer, alt: 'myComputer' }} />
          <BgIcon title="내 컴퓨터" imgObj={{ src: myComputer, alt: 'myComputer' }} />
          <BgIcon title="내 컴퓨터" imgObj={{ src: myComputer, alt: 'myComputer' }} />
          <MyInfoWindow />
        </Layout.WindowContainer>
        <Layout.TaskBar />
        {/* 나중에 열고 닫는 컴포넌트 패턴으로 작업표시줄에 앱 구현 */}
      </Layout>
    </ThemeProvider>
  )
}
