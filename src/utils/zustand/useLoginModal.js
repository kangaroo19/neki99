import { create } from 'zustand'

export const useLoginModal = create(set => ({
  isOpen: false,
  setIsOpenTrue: () => {
    set({ isOpen: true })
  },
  setIsOpenFalse:()=>{
    set({ isOpen: false })
  }
}))
