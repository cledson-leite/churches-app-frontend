import {create} from 'zustand';
import { User, UserStore } from './types'

export const useUserStore = create<UserStore>((set) => ({
  user: {
    name: 'Cledson Leite',
    position: 'membro',
    avatar: '',
  },
  setUser: (user: User) => set({ user }),
}));
