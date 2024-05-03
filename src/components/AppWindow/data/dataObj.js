import mapleImg from 'asset/images/maple2.jpeg'
import armyImg from 'asset/images/army.webp'
import monsterImg from 'asset/images/monster.jpg'
import windowImg from 'asset/images/WIN98SE.jpg'

export const dataObj = [
  {
    title: <div style={{ background: 'rgb(57, 66, 77)', fontSize: '1.2rem', color: 'white', padding: '3px' }}>개인 웹페이지</div>,
    content: `
예전에 바닐라 **자바스크립트** 및 **제이쿼리**로 만든 개인 포트폴리오 사이트를 \n
**리액트**로 **마이그레이션** 하여 다시 만든 웹페이지 입니다.
**React95** 라는 UI 라이브러리를 활용하여 만들었습니다.
    `,
    imgSrc: windowImg,
    path: {
      sitePath: 'http://neki99.kro.kr',
      gitPath: 'https://github.com/kangaroo19/neki99',
    },
    tabDataObj: {
      implementTab: `
- 내 정보, 내 프로젝트에 대한 정보
- 방명록 기능,
- 블로그 (작업중) 
- 전체적인 퍼블리싱`,
      skillTab: `
- React
- React95
- Zustand
- Tanstack-Query
- Firebase`,
    },
  },
  {
    title: <div style={{ background: 'rgb(57, 66, 77)', fontSize: '1.2rem', color: 'white', padding: '3px' }}>몬스터도감</div>,
    content: `
제목은 **몬스터 도감**이지만 사실상 **ToDoList**입니다.\n
react-query와 react-hook-form을 배우고 학습하기 위해\n
간단히 웹앱을 만들어 보았습니다.`,
    imgSrc: monsterImg,
    path: {
      sitePath: null,
      gitPath: 'https://github.com/kangaroo19/common_component',
    },
    tabDataObj: {
      implementTab: `
- 기본적인 CRUD 기능
- 목업데이터 활용
- 전체적인 퍼블리싱`,
      skillTab: `
- React
- zustand
- react-query
- react-hook-form`,
    },
  },
  {
    title: <div style={{ background: 'rgb(57, 66, 77)', fontSize: '1.2rem', color: 'white', padding: '3px' }}>1vs1 같은그림찾기</div>,
    content: `
  어릴 때 재미있게 플레이하던\n 
  '**메이플스토리**'라는 게임 안에 있는 미니게임인\n 
  같은그림찾기게임을 **채팅기능**을 포함해 **1vs1 실시간**으로 할 수 있게 웹 상에 구현하였습니다.`,
    imgSrc: mapleImg,
    path: {
      sitePath: 'http://cjh.cafe24app.com/',
      gitPath: 'https://github.com/kangaroo19/chatting',
    },
    tabDataObj: {
      implementTab: `
  - 캐릭터 선택 기능
  - 전반적인 게임 진행
  - 점수에 따른 승/패 처리    
  - node.js 사용한 채팅 기능
  - 전체적인 퍼블리싱`,
      skillTab: `
  - HTML/CSS
  - JavaScript
  - Node.js
  `,
    },
  },
  {
    title: <div style={{ background: 'rgb(57, 66, 77)', fontSize: '1.2rem', color: 'white', padding: '3px' }}>MTPLANET</div>,
    content: `
**MTPLANET**은 기업정보,리뷰 서비스를 제공하는 \n
"**잡플래닛**"이라는 사이트와 비슷하게 \n 
**군 훈련소**들의 리뷰를 볼 수 있는 웹페이지 입니다`,
    imgSrc: armyImg,
    path: {
      sitePath: 'https://kangaroo19.github.io/mtplanet/#/',
      gitPath: 'https://github.com/kangaroo19/mtplanet',
    },
    tabDataObj: {
      implementTab: `
- firebase 사용한 로그인 기능      
- 군 훈련소 리뷰 작성/읽기      
- 각 훈련소의 랭킹
- 자유 게시판
- 군 관련 뉴스
`,
      skillTab: `
- React
- firebase`,
    },
  },
]
