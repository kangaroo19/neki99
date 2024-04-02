import { MenuList, MenuListItem, Separator } from 'react95'

export default function StartMenu({ onClickStartBtn }) {
  const onClickRoutes = url => {
    window.open(url)
  }
  return (
    <MenuList
      style={{
        position: 'absolute',
        left: '0',
        bottom: '100%',
        boxSizing: 'border-box',
        margin: '0',
      }}
      onClick={onClickStartBtn}
    >
      <MenuListItem onClick={() => onClickRoutes('https://github.com/kangaroo19')}>
        <span>👿</span>
        Github
      </MenuListItem>
      <MenuListItem>
        <span role="img" aria-label="📁">
          📁
        </span>
        My account
      </MenuListItem>
      <Separator />
      <MenuListItem disabled>
        <span role="img" aria-label="🔙">
          🔙
        </span>
        Logout
      </MenuListItem>
    </MenuList>
  )
}
