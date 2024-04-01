import { ThemeProvider } from 'styled-components'
import original from 'react95/dist/themes/original'
import Layout from './components/layout/Layout'
import BgIcon from 'components/bgIcon/BgIcon'
import myComputer from 'asset/images/myComputer.png'
import MyInfoWindow from 'components/AppWindow/MyInfoWindow'
import trashIcon from 'asset/images/trash.png'
import networkIcon from 'asset/images/network.png'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

export default function App() {
  const { onClickWindowOpen } = useAppWindowRender()
  return (
    <ThemeProvider theme={original}>
      <Layout>
        <Layout.WindowContainer>
          <BgIcon title="내 정보" imgObj={{ src: myComputer, alt: 'myComputer' }} onDoubleClick={() => onClickWindowOpen('myInfoWindow')} />
          <BgIcon title="내 프로젝트" imgObj={{ src: networkIcon, alt: 'networkIcon' }} />
          <BgIcon title="휴지통" imgObj={{ src: trashIcon, alt: 'trashicon' }} />
          <MyInfoWindow />
        </Layout.WindowContainer>
        <Layout.TaskBar />
        {/* 나중에 열고 닫는 컴포넌트 패턴으로 작업표시줄에 앱 구현 */}
      </Layout>
    </ThemeProvider>
  )
}
