import { create } from 'zustand'

export const useAppWindowRender = create(set => ({
  isOpen: {
    myInfoWindow: false,
    myProjectWindow: true,
  },

  onClickWindowClose: name => {
    set(state => ({
      isOpen: {
        ...state.isOpen,
        [name]: false,
      },
    }))
  },
  onClickWindowOpen: name => {
    set(state => ({
      isOpen: {
        ...state.isOpen,
        [name]: true,
      },
    }))
  },
}))
