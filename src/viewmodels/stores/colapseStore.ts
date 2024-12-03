import {create} from 'zustand';
import { ColapseStore } from './types';

export const useColapseStore = create<ColapseStore>((set) => ({
  isCollapsed: false,
  setIsCollapsed: (value: boolean) => set({ isCollapsed: value }),
}));