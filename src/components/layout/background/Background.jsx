import styles from './Background.module.css'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'
import BgIcon from 'components/layout/background/components/BgIcon'
import myComputer from 'asset/images/myComputer.png'
import trashIcon from 'asset/images/trash.png'
import networkIcon from 'asset/images/network.png'
import neki from 'asset/images/네키.png'
import { useNavigate } from 'react-router-dom'

export default function Background() {
  const { onClickWindowOpen } = useAppWindowRender()
  const navigate = useNavigate()
  const bgIconArr = [
    {
      title: '내 정보',
      imgObj: { src: myComputer, alt: 'myComputer' },
      onDoubleClick: () => onClickWindowOpen('myInfoWindow'),
    },
    {
      title: '내 프로젝트',
      imgObj: { src: networkIcon, alt: 'networkIcon' },
      onDoubleClick: () => onClickWindowOpen('myProjectWindow'),
    },
    {
      title: '방명록',
      imgObj: { src: networkIcon, alt: 'networkIcon' },
      onDoubleClick: () => onClickWindowOpen('guestBookWindow'),
    },
    {
      title: '블로그',
      imgObj: { src: neki, alt: 'nekiIcon' },
      onDoubleClick: () => {
        onClickWindowOpen('blogWindow')
        navigate('/blog')
      },
    },
    {
      title: '휴지통',
      imgObj: { src: trashIcon, alt: 'trashicon' },
      onDoubleClick: () => onClickWindowOpen('trashCanWindow'),
    },
  ]
  return (
    <div className={styles.boxContainer}>
      {bgIconArr.map(item => (
        <BgIcon title={item.title} imgObj={item.imgObj} onDoubleClick={item.onDoubleClick} />
      ))}
    </div>
  )
}
