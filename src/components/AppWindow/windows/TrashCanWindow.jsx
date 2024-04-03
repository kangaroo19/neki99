import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import AppWindow from '../AppWindow'
import BgIcon from 'components/bgIcon/BgIcon'
import fileIcon from 'asset/images/fileIcon.png'

export default function TrashCanWindow() {
  const { onClickWindowClose } = useAppWindowRender()

  return (
    <AppWindow width="500px">
      <AppWindow.Header onClick={() => onClickWindowClose('trashCanWindow')}>휴지통</AppWindow.Header>
      <AppWindow.Content>
        <AppWindow.ContentSection>
          <BgIcon title="미래" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid rgb(198, 198, 198)" color="black" />
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
  )
}
