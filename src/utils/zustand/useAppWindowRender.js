import { create } from 'zustand'

export const useAppWindowRender = create(set => ({
  // 수정된 부분: get 함수 제거
  zIndexTemp: 1, // 어떤 윈도우 클릭하거나 열때 해당 윈도우 zindex 가장 높은 값으로 설정 위함
  windowRenderObj: {
    myInfoWindow: {
      zIndexValue: 1, // 이 윈도우창의 zIndex 속성에 할당할 값
      isOpen: true, // 열려있는 상태인지 아닌지
    },
    myProjectWindow: {
      zIndexValue: 1,
      isOpen: true,
    },
    trashCanWindow: {
      zIndexValue: 1,
      isOpen: false,
    },
    guestBookWindow: {
      zIndexValue: 1,
      isOpen: false,
    },
    blogWindow: {
      zIndexValue: 1,
      isOpen: false,
    },
    alertWindow: {
      zIndexValue: 1, // 이 윈도우창의 zIndex 속성에 할당할 값
      isOpen: false, // 열려있는 상태인지 아닌지
    },
    loginWindow: {
      zIndexValue: 1, // 이 윈도우창의 zIndex 속성에 할당할 값
      isOpen: false, // 열려있는 상태인지 아닌지
    },
    helpWindow: {
      // infoWindow로 하려했는데 myInfoWindow와 네이밍 겹쳐서..
      zIndexValue: 1, // 이 윈도우창의 zIndex 속성에 할당할 값
      isOpen: true, // 열려있는 상태인지 아닌지
    },
  },
  onClickWindow: name => {
    set(state => {
      const newState = {
        ...state,
        zIndexTemp: state.zIndexTemp + 1, // zIndexTemp 증가
        windowRenderObj: {
          ...state.windowRenderObj,
          [name]: { ...state.windowRenderObj[name], zIndexValue: state.zIndexTemp, isOpen: true },
        },
      }
      return newState
    })
  },
  onClickWindowClose: (name, event) => {
    event.stopPropagation()
    set(state => ({
      windowRenderObj: {
        ...state.windowRenderObj,
        [name]: { ...state.windowRenderObj[name], isOpen: false },
      },
    }))
  },
  onClickWindowOpen: name => {
    set(state => {
      const newState = {
        ...state,
        zIndexTemp: state.zIndexTemp + 1, // zIndexTemp 증가
        windowRenderObj: {
          ...state.windowRenderObj,
          [name]: { ...state.windowRenderObj[name], isOpen: true, zIndexValue: state.zIndexTemp },
        },
      }
      return newState
    })
  },
  // 모든 창 닫는 함수
  closeAllWindow: () => {
    set(state => ({
      // 2. 배열 형태를 객체형태로 (fomrEntries 함수 사용 시 다차원 배열을 객체로 만듦)
      windowRenderObj: Object.fromEntries(
        // 1. 객체를 배열형태로 (entries 함수 사용하면 객체가 2차원 배열이 됨)
        Object.entries(state.windowRenderObj).map(([key, value]) => [key, { ...value, isOpen: false }]),
      ),
    }))
  },
}))

// onClickWindow 함수와 onClickWindowOpen 함수가
// 이름도 같고 기능도 사실상 비슷해서 하나로 통일하려 했음
// 차이점이라면 isOpen:true 로 하는 로직이 있냐없냐
// 그래서
// 한 함수에 isOpen:true 로 해주고 zIndex값도 설정해주는
// 로직을 뭉쳐서 코드를 짰는데
// 이벤트 위임때문에 의도치 않은 동작발생
// onClickWindowClose 함수실행 안함( 사실은 하는데 안하는 것처럼 보임)
// 창 클릭했을 떄
// 1. onClickWindowClose 함수 실행
// 2. onCLickWindow (변경된 함수라는 가정) 함수 실행
// 이래서 close 함수 안먹는 것처럼 동작

// 원래 함수가 제대로 동작했던 이유는
// onClickWindow는 원래 isOpen:true로 하는 로직이 없었기 때문
// onClickClose에 이벤트 위임 방지 코드 추가함으로써 해결

// onClickWindowOpen 이 함수 없다고 생각 다 지울것
