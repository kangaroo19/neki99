import { useNavigate } from 'react-router-dom'
import { MenuList, MenuListItem } from 'react95'
import styled from 'styled-components'

const defaultValueArr = [
  {
    title: 'File',
    url: null,
  },
  {
    title: 'Edit',
    url: null,
  },
  {
    title: 'View',
    url: null,
  },
  {
    title: 'Help',
    url: null,
  },
]

export default function HeaderMenu({ arr = defaultValueArr }) {
  const navigate = useNavigate()

  return (
    <MenuListContainer inline fullWidth>
      {arr.map(item => (
        <MenuListItem
          onClick={() => {
            navigate(item.url)
          }}
        >
          {item.title}
        </MenuListItem>
      ))}
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
