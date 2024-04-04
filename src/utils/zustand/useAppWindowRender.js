import { create } from 'zustand'

export const useAppWindowRender = create(set => ({
  isOpen: {
    myInfoWindow: true,
    myProjectWindow: true,
    trashCanWindow: false,
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
