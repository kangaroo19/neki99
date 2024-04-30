import { MenuListItem } from 'react95'

export default function MenuListsItem({ itemObj }) {
  return (
    <MenuListItem onClick={itemObj.onClick && itemObj.onClick}>
      {itemObj.icon && <span>{itemObj.icon}</span>}
      {itemObj.title}
    </MenuListItem>
  )
}
