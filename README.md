# Neki99
![main](https://github.com/kangaroo19/neki99/assets/86513078/ade3d9b5-27b7-4b99-b508-02e8597b4206)

구 : http://천재현.kro.kr <br/>
현 : http://neki99.kro.kr/

약 2년 전 바닐라 자바스크립트로 진행했던 개인 웹 페이지를 리액트로 마이그레이션 하여 재작업한 웹페이지 입니다.


## 사용한 라이브러리
- react95 : 윈도우95 스타일로 작업하기 위해 사용한 UI 라이브러리 입니다.
- styled-component : 스타일 재사용성을 극대화하고 싶은 마음에 사용하였습니다.
- zustand : 현재 윈도우 창에 대한 상태값(윈도우 열린상태인지 아닌지)을 관리하는데 쓰였습니다.
- react-draggable : 윈도우 창의 dnd 적용을 위해 사용하였습니다.
- react-markdown : 각 윈도우 창에 들어갈 텍스트를 마크다운 형식으로 적용하기 위함 입니다.
- react-type-animation : 텍스트 애니메이션 적용을 위해 사용하였습니다.

## 윈도우 창 관련 코드

### Code
```js
/* 윈도우 창 메인 */

export default function AppWindow({ children, width, top, left }) {
  const viewPortSize = useMediaQuery()
  return (
    <Draggable handle=".handle" disabled={viewPortSize === 'mobile' ? true : false}>
      <AppWindowMain width={width} top={top} left={left}>
        {children}
      </AppWindowMain>
    </Draggable>
  )
}

/* 하위 컴포넌트 */
AppWindow.Header = AppWindowHeader
AppWindow.Content = AppWindowContent
AppWindow.ContentTitle = ContentTitle
AppWindow.ContentSection = ContentSection
AppWindow.ScrollView = ContentScrollView
AppWindow.Nav = ContentNav
AppWindow.Image = ContentImg
AppWindow.Tab = ContentTab
```

재사용성과 가독성을 위해 합성 컴포넌트 패턴과 styled-component를 사용하여 윈도우 창에 대한 코드를 작성하였습니다.
이로써 하위 컴포넌트들의 조합만 바꿔주면 다른 컴포넌트에서도 재사용 할 수 있도록 하였습니다.

### Usage

```js
<AppWindow width="500px" top="10%" left="30%">
      <AppWindow.Header onClick={() => onClickWindowClose('trashCanWindow')}>휴지통</AppWindow.Header>
      <AppWindow.Content>
        <AppWindow.ContentSection>
          <BgIcon title="미래" imgObj={{ src: fileIcon, alt: '희망' }} border="1px solid rgb(198, 198, 198)" color="black" />
        </AppWindow.ContentSection>
      </AppWindow.Content>
    </AppWindow>
```

## 내 정보
![info](https://github.com/kangaroo19/neki99/assets/86513078/2d3f46ad-84ff-49a6-87aa-3e5684d63964)

저에 대한 간략한 이력과 제가 사용하는 블로그,노션,깃허브로 이동할 수 있는 윈도우 창입니다.

## 내 프로젝트
![pro](https://github.com/kangaroo19/neki99/assets/86513078/e71ac196-37d6-43ad-8d9a-55a186d521ff)

지금까지 진행했던 개인 프로젝트에 대한 설명과 사용기술 등을 모아놓은 윈도우 창입니다.

## 방명록 (작업중)

## 모바일 적응형
![image (2)](https://github.com/kangaroo19/neki99/assets/86513078/e370c3ce-7d45-4f53-b509-8a386ac3ec7a)

이전 웹페이지와 달리 현 프로젝트는 모바일을 고려하여 작업하였습니다.
