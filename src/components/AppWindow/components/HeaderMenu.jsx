import { MenuList, MenuListItem } from 'react95'
import styled from 'styled-components'

export default function HeaderMenu() {
  return (
    <MenuListContainer inline fullWidth>
      <MenuListItem>File</MenuListItem>
      <MenuListItem>Edit</MenuListItem>
      <MenuListItem>View</MenuListItem>
      <MenuListItem>Help</MenuListItem>
    </MenuListContainer>
  )
}

const MenuListContainer = styled(MenuList)`
  margin: 0;
  box-shadow: none;
  padding: 0 4px;
  border-right: none;
  border-left: none;
`
