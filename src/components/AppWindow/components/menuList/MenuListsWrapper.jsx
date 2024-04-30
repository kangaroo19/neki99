import { MenuList } from 'react95'
import MenuListsItem from './components/MenuListsItem'

export default function MenuListsWrapper({ children, fullWidth, inline, style, onClick }) {
  return (
    <MenuList fullWidth={fullWidth} inline={inline} style={style} onClick={onClick}>
      {children}
    </MenuList>
  )
}

MenuListsWrapper.Item = MenuListsItem
