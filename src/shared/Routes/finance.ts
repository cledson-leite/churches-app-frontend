import { Route, SubRoute } from '../types';

const subItems: SubRoute[] = [
  {
    label: 'Despesas',
    href: '/finance/expenses',
  },
  {
    label: 'Receitas',
    href: '/finance/revenues',
  },
]

export const finance: Route = {
  icon: 'Money',
  label: 'Financeiro',
  href: '/finance',
  subItems
};
