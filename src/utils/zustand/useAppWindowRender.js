import { create } from 'zustand'

export const useAppWindowRender = create(set => ({
  isOpen: {
    myInfoWindow: false,
    myProjectWindow: false,
    trashCanWindow: true,
    guestBookWindow: false,
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
