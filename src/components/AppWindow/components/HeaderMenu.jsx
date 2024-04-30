import MenuListsWrapper from './menuList/MenuListsWrapper'

const defaultValueArr = [
  {
    title: 'File',
    icon: null,
  },
  {
    title: 'Edit',
    icon: null,
  },
  {
    title: 'View',
    icon: null,
  },
  {
    title: 'Help',
    icon: null,
  },
]

export default function HeaderMenu({ arr = defaultValueArr }) {
  return (
    <MenuListsWrapper inline fullWidth style={menuListStyle}>
      {arr.map(item => (
        <MenuListsWrapper.Item itemObj={item} />
      ))}
    </MenuListsWrapper>
  )
}

const menuListStyle = {
  margin: '0',
  boxShadow: 'none',
  padding: '0 4px',
  borderRight: 'none',
  borderLeft: 'none',
}
