import styled from 'styled-components'
import MenuListsWrapper from 'components/AppWindow/components/menuList/MenuListsWrapper'
import { useAppWindowRender } from 'utils/zustand/useAppWindowRender'

export default function StartMenu({ onClickStartBtn }) {
  const { onClickWindowOpen } = useAppWindowRender()

  const onClickRoutes = url => {
    window.open(url)
  }

  const menuListItemArr = [
    { title: 'Github', icon: 'GH', onClick: () => onClickRoutes('https://github.com/kangaroo19') },
    {
      title: 'NPM',
      icon: 'NP',
      onClick: () => onClickRoutes('https://www.npmjs.com/package/react-floating-profile'),
    },
    {
      title: 'LinkedIn',
      icon: 'IN',
      onClick: () => onClickRoutes('https://www.linkedin.com/in/jaehyun-cheon-84891a2b8/'),
    },
    { title: 'Login', icon: 'LG', onClick: () => onClickWindowOpen('loginWindow') },
    { title: 'Help', icon: '??', onClick: () => onClickWindowOpen('helpWindow') },
  ]

  return (
    <StartMenuContainer onClick={onClickStartBtn}>
      <StartMenuBrandBar>
        <StartMenuBrandText>Windows 95</StartMenuBrandText>
      </StartMenuBrandBar>
      <StartMenuPanel>
        <MenuListsWrapper style={menuListStyle}>
          {menuListItemArr.map(item => (
            <MenuListsWrapper.Item key={item.title} itemObj={item} />
          ))}
        </MenuListsWrapper>
      </StartMenuPanel>
    </StartMenuContainer>
  )
}

const menuListStyle = {
  margin: '0',
  width: '220px',
  minWidth: '220px',
  boxSizing: 'border-box',
}

const StartMenuContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  display: flex;
  align-items: stretch;
  padding: 3px;
  border-top: 2px solid #ffffff;
  border-left: 2px solid #ffffff;
  border-right: 2px solid #4f4f4f;
  border-bottom: 2px solid #4f4f4f;
  background: #c0c0c0;
  box-shadow:
    inset 1px 1px 0 #dfdfdf,
    inset -1px -1px 0 #7b7b7b;
`

const StartMenuBrandBar = styled.div`
  width: 34px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 10px 0 12px;
  background: linear-gradient(180deg, #1a49b3 0%, #001f73 100%);
  border-right: 2px solid #89a4e8;
`

const StartMenuBrandText = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #f5f8ff;
  text-shadow: 1px 1px 0 #001142;
`

const StartMenuPanel = styled.div`
  padding-left: 4px;

  ul {
    padding: 2px;
    background: #c0c0c0;
  }

  li {
    min-height: 34px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.95rem;
    color: #111111;
    transition: none;
  }

  li + li {
    border-top: 1px solid #7e7e7e;
    box-shadow: inset 0 1px 0 #f4f4f4;
  }

  li:hover {
    background: #000080;
    color: #ffffff;
  }

  li > span:first-child {
    width: 28px;
    height: 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-sizing: border-box;
    border-top: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
    border-right: 1px solid #6a6a6a;
    border-bottom: 1px solid #6a6a6a;
    background: linear-gradient(180deg, #f7f7f7 0%, #d9d9d9 100%);
    color: #1f1f1f;
    font-size: 0.62rem;
    font-weight: 700;
    letter-spacing: 0.04em;
  }

  li:hover > span:first-child {
    border-top-color: #d8e0ff;
    border-left-color: #d8e0ff;
    border-right-color: #001f5c;
    border-bottom-color: #001f5c;
    background: linear-gradient(180deg, #dbe5ff 0%, #a9bdf7 100%);
    color: #00194a;
  }
`
