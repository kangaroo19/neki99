import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import AppWindow from '../AppWindow'
import BgIcon from 'components/bgIcon/BgIcon'
import fileIcon from 'asset/images/fileIcon.png'

export default function TrashCanWindow() {
  const { onClickWindowClose, windowRenderObj, onClickWindow } = useAppWindowRender()
  return (
    <AppWindow width="500px" top="10%" left="30%" zIndex={windowRenderObj.trashCanWindow.zIndexValue} onClick={() => onClickWindow('trashCanWindow')}>
      <AppWindow.Header onClick={() => onClickWindowClose('trashCanWindow')}>휴지통</AppWindow.Header>
      <AppWindow.HeadMenu />
      <AppWindow.Content>
        <AppWindow.ContentSection height="300px">
          <AppWindow.ScrollView width="100%" flex background="white">
            <BgIcon title="좌절" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="부정" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="불만" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="거부" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="불평" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="불신" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="비판" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="불쾌" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="우울" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="불안" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="불행" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
            <BgIcon title="괴로움" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid white" color="black" />
          </AppWindow.ScrollView>
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
  )
}
