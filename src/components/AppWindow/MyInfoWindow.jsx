import { Monitor } from 'react95'
import AppWindow from './AppWindow'
// import myFace from 'asset/images/myFace.jpeg'

export default function MyInfoWindow() {
  return (
    <AppWindow>
      <AppWindow.Header>내 정보</AppWindow.Header>
      <AppWindow.Content>
        <AppWindow.ContentTitle>프론트엔드 개발자가 되고싶은 천재현입니다.</AppWindow.ContentTitle>
        <AppWindow.ContentSection>
          <AppWindow.ScrollView>
            <Monitor backgroundStyles={{ background: 'blue' }} />
          </AppWindow.ScrollView>
          <AppWindow.Nav />
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
  )
}
