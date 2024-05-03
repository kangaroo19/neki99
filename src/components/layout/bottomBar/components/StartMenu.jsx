import MenuListsWrapper from 'components/AppWindow/components/menuList/MenuListsWrapper'
import LoginWindow from 'components/AppWindow/windows/login/LoginWindow'
import { useLoginModal } from 'utils/zustand/useLoginModal'

export default function StartMenu({ onClickStartBtn }) {
  const { isOpen, setIsOpenTrue } = useLoginModal()
  const onClickRoutes = url => {
    window.open(url)
  }
  const MenuListItemArr = [
    { title: 'Github', icon: '👨‍💻', onClick: () => onClickRoutes('https://github.com/kangaroo19') },
    { title: 'Login', icon: '🔒', onClick: () => setIsOpenTrue() },
  ]

  return (
    <MenuListsWrapper style={menuListStyle} onClick={onClickStartBtn}>
      {MenuListItemArr.map(item => (
        <MenuListsWrapper.Item itemObj={item} />
      ))}
      {isOpen && <LoginWindow />}
    </MenuListsWrapper>
  )
}

const menuListStyle = {
  margin: '0',
  position: 'absolute',
  left: '0',
  bottom: '100%',
  boxSizing: 'border-box',
}
