import { create } from 'zustand'

export const useAppWindowRender = create(set => ({
  // 수정된 부분: get 함수 제거
  zIndexTemp: 1,
  windowRenderObj: {
    myInfoWindow: {
      zIndexValue: 0,
      isOpen: true,
    },
    myProjectWindow: {
      zIndexValue: 0,
      isOpen: true,
    },
    trashCanWindow: {
      zIndexValue: 0,
      isOpen: false,
    },
    guestBookWindow: {
      zIndexValue: 0,
      isOpen: false,
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
}))
