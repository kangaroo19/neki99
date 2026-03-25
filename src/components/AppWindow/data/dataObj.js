import windowImg from 'asset/images/WIN98SE2.webp'

export const dataObj = [
  {
    title: (
      <div style={{ background: 'rgb(57, 66, 77)', fontSize: '1.2rem', color: 'white', padding: '3px' }}>
        react-floating-profile
      </div>
    ),
    content: `
**react-floating-profile**은 GitHub 프로필 정보를 화면 한쪽에
floating 형태로 띄울 수 있게 만든 **React 컴포넌트 라이브러리**입니다.\n
프로젝트에 간단히 붙일 수 있는 구조를 목표로 만들었고,
GitHub 스타일의 UI와 pinned repository 표시를 함께 제공합니다.
    `,
    imgSrc: windowImg,
    path: {
      sitePath: 'https://www.npmjs.com/package/react-floating-profile',
      gitPath: 'https://github.com/kangaroo19/react-floating-profile',
    },
    tabDataObj: {
      implementTab: `
- GitHub 프로필 정보를 floating widget 형태로 노출
- pinned repository를 최대 4개까지 표시
- 화면 위치를 top-right, top-left, bottom-right, bottom-left로 설정 가능
- access token 없이도 동작하고, 필요하면 token으로 GitHub API 제한을 완화 가능`,
      skillTab: `
- React
- TypeScript
- react-markdown
- rehype-raw
- remark-gfm
- remark-directive`,
    },
  },
]
