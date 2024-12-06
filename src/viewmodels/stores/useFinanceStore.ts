import { create } from "zustand";
import { FinanceData, FinanceStore } from "./types";

export const useFinanceStore = create<FinanceStore>((set) => ({
  data: {
    totals: {
      revenues: 10200,
      expenses: 875,
      balance: 10200 - 875,
    },
    perMonth: {
      'Jan': {
        revenues: Math.round((100/(100 + 50)) * 100),
        expenses: Math.round((50/(100 + 50)) * 100)
      },
      'Feb': {
        revenues: Math.round((100/(100 + 75)) * 100),
        expenses: Math.round((75/(100 + 75)) * 100)
      },
      'Mar': {
        revenues: Math.round((1000/(1000 + 75)) * 100),
        expenses: Math.round((75/(1000 + 75)) * 100)
      },
      'Apr': {
        revenues: Math.round((1000/(1000 + 75)) * 100),
        expenses: Math.round((75/(1000 + 75)) * 100)
      },
      'May': {
        revenues: Math.round((1000/(1000 + 75)) * 100),
        expenses: Math.round((75/(1000 + 75)) * 100)
      },
      'Jun': {
       revenues: Math.round((1000/(1000 + 75)) * 100),
        expenses: Math.round((75/(1000 + 75)) * 100)
      },
      'Jul': {
        revenues: Math.round((1000/(1000 + 75)) * 100),
        expenses: Math.round((75/(1000 + 75)) * 100)
      },
      'Aug': {
       revenues: Math.round((1000/(1000 + 75)) * 100),
        expenses: Math.round((75/(1000 + 75)) * 100)
      },
      'Sep': {
        revenues: Math.round((1000/(1000 + 75)) * 100),
        expenses: Math.round((75/(1000 + 75)) * 100)
      },
      'Oct': {
        revenues: Math.round((1000/(1000 + 75)) * 100),
        expenses: Math.round((75/(1000 + 75)) * 100)
      },
      'Nov': {
        revenues: Math.round((1000/(1000 + 75)) * 100),
        expenses: Math.round((75/(1000 + 75)) * 100)
      },
      'Dec': {
        revenues: Math.round((1000/(1000 + 75)) * 100),
        expenses: Math.round((75/(1000 + 75)) * 100)
      },
    },
  },
  setData: (values: FinanceData) => {
    set({ data: values });
  },
}));