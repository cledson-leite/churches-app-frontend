import { create } from 'zustand';
import { ColapseStore } from './types';

export const useColapseStore = create<ColapseStore>(set => ({
  isCollapsed: true,
  setIsCollapsed: (value: boolean) => set({ isCollapsed: value }),
}));
