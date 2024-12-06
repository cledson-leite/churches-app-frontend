import { Icons } from '@/components/atoms/Icons';

export type SubRoute = {
  label: string;
  href: string;
};

export type Route = {
  icon: keyof typeof Icons;
  label: string;
  href: string;
  subItems?: SubRoute[];
};

export const Months = {
  Jan: 'Janeiro',
  Feb: 'Fevereiro',
  Mar: 'Março',
  Apr: 'Abril',
  May: 'Maio',
  Jun: 'Junho',
  Jul: 'Julho',
  Aug: 'Agosto',
  Sep: 'Setembro',
  Oct: 'Outubro',
  Nov: 'Novembro',
  Dec: 'Dezembro',
};
export type Month = {
  [key in keyof typeof Months]: {
    revenues: number;
    expenses: number;
  };
};

export type Totals = {
  revenues: number;
  expenses: number;
  balance: number;
};
