# Neki99 프로젝트 개요

## 한 줄 요약

`Neki99`는 Windows 95 스타일 데스크톱 UI를 컨셉으로 만든 개인 포트폴리오 웹사이트입니다.  
배경 아이콘을 더블클릭해 여러 윈도우를 열고, 하단 작업 표시줄과 시작 메뉴를 사용하는 형태로 구성되어 있습니다.

## 프로젝트 목적

- 예전 바닐라 JavaScript/jQuery 기반 개인 웹페이지를 React로 마이그레이션한 프로젝트
- 자기소개, 개인 프로젝트 소개, 방명록, 블로그 기능을 한 사이트 안에서 제공
- `react95`를 활용해 레트로 데스크톱 경험을 구현

## 기술 스택

- `React 18`
- `react-scripts` 기반 CRA 구성
- `react-router-dom v6`
- `styled-components`
- `react95`
- `zustand`
- `@tanstack/react-query`
- `firebase` (`Firestore`, `Storage`)
- `react-hook-form`
- `react-draggable`
- `react-quill`
- `react-markdown`

## 실행/배포

- 개발 서버: `npm start`
- 프로덕션 빌드: `npm run build`
- 정적 배포: `npm run deploy`
- 배포 대상: `gh-pages`
- `homepage`: `http://neki99.kro.kr`

## 최상위 구조

### 진입점

- [src/index.js](/Users/82103/Documents/GitHub/neki99/src/index.js)
  - `BrowserRouter`로 앱 감쌈
- [src/App.js](/Users/82103/Documents/GitHub/neki99/src/App.js)
  - `QueryClientProvider`, `ThemeProvider(react95)` 설정
  - `Main`을 lazy 로딩
  - `ESC` 입력 시 모든 창을 닫는 전역 동작 연결

### 메인 레이아웃

- [src/components/Main.jsx](/Users/82103/Documents/GitHub/neki99/src/components/Main.jsx)
  - `Background`
  - `WindowRender`
  - `TaskBar`
  - `AppRouter`
- [src/components/layout/Layout.jsx](/Users/82103/Documents/GitHub/neki99/src/components/layout/Layout.jsx)
  - 합성 컴포넌트 형태로 레이아웃 하위 모듈 연결

## 핵심 UI 개념

### 1. 바탕화면 아이콘

- [src/components/layout/background/Background.jsx](/Users/82103/Documents/GitHub/neki99/src/components/layout/background/Background.jsx)
- 바탕화면 아이콘 목록:
  - 내 정보
  - 내 프로젝트
  - 방명록
  - 블로그
  - 휴지통
- 아이콘 더블클릭 시 zustand 상태를 바꿔 해당 윈도우를 열고, 블로그는 `/blog` 라우트로 이동

### 2. 윈도우 시스템

- [src/components/AppWindow/AppWindow.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/AppWindow.jsx)
- 공통 `AppWindow` 컴포넌트가 모든 윈도우 UI의 베이스
- 특징:
  - `react95` `Window` 기반
  - `react-draggable`로 드래그 이동
  - 모바일에서는 드래그 비활성화
  - Header/Content/Footer/Input/Button/Select 등 합성 컴포넌트 패턴 사용

### 3. 창 렌더링

- [src/components/layout/windowRender/WindowRender.jsx](/Users/82103/Documents/GitHub/neki99/src/components/layout/windowRender/WindowRender.jsx)
- zustand 상태에 따라 아래 창들을 조건부 렌더링
  - `MyProjectsWindow`
  - `MyInfoWindow`
  - `TrashCanWindow`
  - `GuestBookWindow`
  - `LoginWindow`
- `blogWindow`는 별도 라우팅으로 렌더링됨

### 4. 작업 표시줄/시작 메뉴

- [src/components/layout/bottomBar/BottomBar.jsx](/Users/82103/Documents/GitHub/neki99/src/components/layout/bottomBar/BottomBar.jsx)
- [src/components/layout/bottomBar/components/StartMenu.jsx](/Users/82103/Documents/GitHub/neki99/src/components/layout/bottomBar/components/StartMenu.jsx)
- 현재 동작:
  - Start 버튼으로 메뉴 토글
  - 현재 시간/날짜 표시
  - Github 링크 이동
  - Login 창 열기
  - Help 창 열기
- 참고:
  - 작업 표시줄의 `TaskBtn`은 아직 실제 열린 창 목록을 보여주지 않고 `Welcome`만 표시

## 상태 관리

### 윈도우 상태

- [src/utils/zustand/useAppWindowRender.js](/Users/82103/Documents/GitHub/neki99/src/utils/zustand/useAppWindowRender.js)
- 관리 내용:
  - 각 창의 `isOpen`
  - 각 창의 `zIndexValue`
  - 현재 최상단 창 처리를 위한 `zIndexTemp`
- 주요 액션:
  - `onClickWindow`
  - `onClickWindowOpen`
  - `onClickWindowClose`
  - `closeAllWindow`

### 시작 메뉴 상태

- [src/utils/zustand/useStartMenuStore.js](/Users/82103/Documents/GitHub/neki99/src/utils/zustand/useStartMenuStore.js)
- Start 메뉴 열림/닫힘 토글만 담당

### 인증 상태

- [src/utils/zustand/useAuthStore.js](/Users/82103/Documents/GitHub/neki99/src/utils/zustand/useAuthStore.js)
- `isAuth` 플래그만 관리
- 관리자 기능 접근 전에 로그인 여부를 판별하는 용도

## 데이터 연동

### Firebase

- [src/firebase.js](/Users/82103/Documents/GitHub/neki99/src/firebase.js)
- `.env` 기반으로 Firebase 초기화
- 사용 중인 서비스:
  - Firestore
  - Storage

### React Query

- [src/utils/query/useGuestBookQuery.js](/Users/82103/Documents/GitHub/neki99/src/utils/query/useGuestBookQuery.js)
  - `guestBook` 컬렉션 조회/등록
  - 최신순(`createdAt desc`) 정렬
- [src/utils/query/useBlogQuery.js](/Users/82103/Documents/GitHub/neki99/src/utils/query/useBlogQuery.js)
  - 블로그 목록 조회
  - 블로그 상세 조회
  - 썸네일/요약 중심 목록 데이터 최적화
- [src/utils/query/useBlogMutation.js](/Users/82103/Documents/GitHub/neki99/src/utils/query/useBlogMutation.js)
  - 블로그 생성/삭제
  - 수정(update)은 아직 미구현

## 주요 화면 정리

### 내 정보

- [src/components/AppWindow/windows/MyInfoWindow.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/windows/MyInfoWindow.jsx)
- 자기소개, 커리어, 기술 스택, 자격증 등의 정보를 마크다운 형태로 보여줌

### 내 프로젝트

- [src/components/AppWindow/windows/MyProjectsWindow.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/windows/MyProjectsWindow.jsx)
- [src/components/AppWindow/data/dataObj.js](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/data/dataObj.js)
- 프로젝트 데이터를 별도 객체로 관리
- Prev/Next로 프로젝트 소개를 넘기며 확인
- 사이트 링크/깃허브 링크/구현 내용/기술 스택 탭 제공

### 방명록

- [src/components/AppWindow/windows/GuestBookWindow.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/windows/GuestBookWindow.jsx)
- Firestore에 방명록 조회/등록
- `react-hook-form`으로 입력 관리
- 등록 성공 시 입력 초기화 후 목록 재조회

### 블로그

- [src/components/AppWindow/windows/BlogWindow.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/windows/BlogWindow.jsx)
- 내부 라우팅:
  - `/blog` 목록
  - `/blog/:id` 상세
  - `/blog/textEdit` 작성
- 관련 파일:
  - [src/components/AppWindow/windows/blog/BlogHome.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/windows/blog/BlogHome.jsx)
  - [src/components/AppWindow/windows/blog/[id].jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/windows/blog/[id].jsx)
  - [src/components/AppWindow/windows/blog/TextEdit.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/windows/blog/TextEdit.jsx)
- 특징:
  - 목록은 카테고리 선택 가능
  - 상세는 Firestore에서 개별 조회
  - 작성 화면은 Quill 에디터 사용
  - 로그인 시에만 글쓰기/삭제 등 관리 동작 허용

### 로그인

- [src/components/AppWindow/windows/login/LoginWindow.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/windows/login/LoginWindow.jsx)
- `.env`의 `REACT_APP_AUTH` 값과 비교해 간단한 관리자 인증 수행

### 휴지통

- [src/components/AppWindow/windows/TrashCanWindow.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/windows/TrashCanWindow.jsx)
- 감정 단어들을 파일 아이콘처럼 배치한 컨셉성 창

### 도움말

- [src/components/AppWindow/windows/info/HelpWindow.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/windows/info/HelpWindow.jsx)
- 더미 텍스트가 들어 있는 도움말 창
- 현재 `WindowRender`에서는 실제 렌더링되지 않아서 UI상 열리지 않음

## 반응형 처리

- [src/utils/hook/useMediaQuery.js](/Users/82103/Documents/GitHub/neki99/src/utils/hook/useMediaQuery.js)
- 뷰포트 크기를 `mobile/tablet/laptop/desktop`으로 구분
- 모바일에서 공통 창 컴포넌트는 다음 규칙을 가짐:
  - 드래그 비활성화
  - `top/left` 고정
  - `width: 100vw`
  - `height: 90vh`

## 라우팅 구조

- [src/routes/AppRouter.jsx](/Users/82103/Documents/GitHub/neki99/src/routes/AppRouter.jsx)
- 현재 별도 라우트로 다루는 건 블로그 창뿐
- `blogWindow.isOpen` 상태일 때만 `/blog/*` 라우트를 렌더링

## 지금 바로 기억해두면 좋은 포인트

- 이 프로젝트의 핵심은 "페이지"보다 "윈도우 앱"처럼 생각하는 것이 이해가 빠름
- 실제 기능 진입은 대부분 `Background.jsx`와 `useAppWindowRender.js`에서 시작됨
- 새 창을 추가할 때는 보통 아래 순서로 보면 됨
  1. `useAppWindowRender.js`에 상태 추가
  2. `Background.jsx` 또는 `StartMenu.jsx`에 진입점 추가
  3. `WindowRender.jsx` 또는 라우터에 렌더링 연결
  4. `components/AppWindow/windows` 아래 실제 창 구현

## 현재 코드베이스에서 보이는 미완성/주의 사항

- `HelpWindow`는 파일은 있지만 `WindowRender.jsx`에서 `null` 처리되어 실제로 안 뜸
- 블로그 수정 로직은 `useBlogMutation.js`의 `updateBlogItem`이 비어 있어 미완성 상태
- `TextEdit.jsx`는 현재 전송 시 항상 `'post'`만 호출하므로 수정 화면과 생성 화면 분기가 아직 부족함
- `TaskBtn.jsx`는 열린 창 목록을 표시하지 않는 임시 구현 상태
- `BlogHome.jsx`의 카테고리별 조회 함수는 현재 모두 같은 전체 조회 로직을 사용하고 있어 실질적인 필터링이 없음
- 코드 전반에 `eslint-disable`, `Math.random()` key 사용 등 유지보수 관점에서 다듬을 포인트가 보임

## 이번에 기능 추가할 때 먼저 보면 좋은 파일

- 윈도우 여닫기/최상단 처리:
  - [src/utils/zustand/useAppWindowRender.js](/Users/82103/Documents/GitHub/neki99/src/utils/zustand/useAppWindowRender.js)
- 공통 창 레이아웃:
  - [src/components/AppWindow/AppWindow.jsx](/Users/82103/Documents/GitHub/neki99/src/components/AppWindow/AppWindow.jsx)
- 데스크톱 아이콘 진입:
  - [src/components/layout/background/Background.jsx](/Users/82103/Documents/GitHub/neki99/src/components/layout/background/Background.jsx)
- 하단 메뉴/로그인 진입:
  - [src/components/layout/bottomBar/components/StartMenu.jsx](/Users/82103/Documents/GitHub/neki99/src/components/layout/bottomBar/components/StartMenu.jsx)
- 데이터 연동:
  - [src/firebase.js](/Users/82103/Documents/GitHub/neki99/src/firebase.js)
  - [src/utils/query/useGuestBookQuery.js](/Users/82103/Documents/GitHub/neki99/src/utils/query/useGuestBookQuery.js)
  - [src/utils/query/useBlogQuery.js](/Users/82103/Documents/GitHub/neki99/src/utils/query/useBlogQuery.js)
  - [src/utils/query/useBlogMutation.js](/Users/82103/Documents/GitHub/neki99/src/utils/query/useBlogMutation.js)

## 확인 메모

- 이 문서는 2026-03-22 기준으로 현재 코드베이스를 직접 읽고 정리한 내용입니다.
- 빌드 검증은 진행했지만 기본 제한 시간 안에 완료되지 않아, 동작 구조는 코드 기준으로 정리했습니다.
