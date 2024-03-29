import { create } from 'zustand';

export const useStartMenuStore = create((set) => ({
  isMenuOpen: false,
  onClickStartBtn: () => {
    set((state) => ({ isMenuOpen: !state.isMenuOpen }));
  },
}));
