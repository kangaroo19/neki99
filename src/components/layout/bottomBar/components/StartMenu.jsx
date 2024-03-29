import { MenuList, MenuListItem, Separator } from 'react95';

export default function StartMenu({ onClickStartBtn }) {
  return (
    <MenuList
      style={{
        position: 'absolute',
        left: '0',
        bottom: '100%',
      }}
      onClick={onClickStartBtn}
    >
      <MenuListItem>
        <span>dd</span>
        Github
      </MenuListItem>
      <MenuListItem>
        <span role='img' aria-label='📁'>
          📁
        </span>
        My account
      </MenuListItem>
      <Separator />
      <MenuListItem disabled>
        <span role='img' aria-label='🔙'>
          🔙
        </span>
        Logout
      </MenuListItem>
    </MenuList>
  );
}
