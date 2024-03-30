import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
import Layout from './components/layout/Layout'
import BgIcon from 'components/bgIcon/BgIcon'
import myComputer from 'asset/images/myComputer.png'
import MyInfoWindow from 'components/AppWindow/MyInfoWindow'

export default function App() {
  return (
    <ThemeProvider theme={original}>
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
