import { create } from 'zustand'

export const useAuthStore = create(set => ({
  isAuth: false,
  setIsAuthTrue: () => {
    set({ isAuth: true })
  },
}))
