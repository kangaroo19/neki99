import { MenuList, MenuListItem } from 'react95'
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
    <MenuList style={menuListStyle} onClick={onClickStartBtn}>
      {MenuListItemArr.map(item => (
        <MenuListItem onClick={item.onClick}>
          <span>{item.icon}</span>
          {item.title}
        </MenuListItem>
      ))}
    </MenuList>
  )
}

const menuListStyle = {
  position: 'absolute',
  left: '0',
  bottom: '100%',
  boxSizing: 'border-box',
  margin: '0',
}
