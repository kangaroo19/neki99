import { create } from 'zustand'

export const useAppWindowRender = create(set => ({
  // 수정된 부분: get 함수 제거
  zIndexTemp: 1, // 어떤 윈도우 클릭하거나 열때 해당 윈도우 zindex 가장 높은 값으로 설정 위함
  windowRenderObj: {
    myInfoWindow: {
      zIndexValue: 3, // 이 윈도우창의 zIndex 속성에 할당할 값
      isOpen: true, // 열려있는 상태인지 아닌지
    },
    myProjectWindow: {
      zIndexValue: 2,
      isOpen: true,
    },
    trashCanWindow: {
      zIndexValue: 2,
      isOpen: false,
    },
    guestBookWindow: {
      zIndexValue: 2,
      isOpen: false,
    },
    blogWindow: {
      zIndexValue: 2,
      isOpen: false,
    },
    alertWindow: {
      zIndexValue: 2, // 이 윈도우창의 zIndex 속성에 할당할 값
      isOpen: false, // 열려있는 상태인지 아닌지
    },
  },
  onClickWindow: name => {
    set(state => {
      const newState = {
        ...state,
        zIndexTemp: state.zIndexTemp + 1, // zIndexTemp 증가
        windowRenderObj: {
          ...state.windowRenderObj,
          [name]: { ...state.windowRenderObj[name], zIndexValue: state.zIndexTemp },
        },
      }
      return newState
    })
  },
  onClickWindowClose: name => {
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
