import MenuListsWrapper from 'components/AppWindow/components/menuList/MenuListsWrapper'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

export default function StartMenu({ onClickStartBtn }) {
  const { onClickWindowOpen } = useAppWindowRender()

  const onClickRoutes = url => {
    window.open(url)
  }
  const MenuListItemArr = [
    { title: 'Github', icon: '👿', onClick: () => onClickRoutes('https://github.com/kangaroo19') },
    { title: 'Login', icon: '📁', onClick: () => onClickWindowOpen('loginWindow') },
  ]

  return (
    <MenuListsWrapper style={menuListStyle} onClick={onClickStartBtn}>
      {MenuListItemArr.map(item => (
        <MenuListsWrapper.Item itemObj={item} />
      ))}
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
