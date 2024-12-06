import { Month, Totals } from '../../shared/types';
export type User = {
  name: string;
  position: string;
  avatar: string;
};

export type UserStore = {
  user: User;
  setUser: (user: User) => void;
};

export type ColapseStore = {
  isCollapsed: boolean;
  setIsCollapsed: (isCollapsed: boolean) => void;
};

export type FinanceData = {
  totals: Totals;
  perMonth: Month;
};

export type FinanceStore = {
  data: FinanceData;
  setData: (data: FinanceData) => void;
};
