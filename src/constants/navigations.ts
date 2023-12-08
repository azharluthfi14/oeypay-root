export const navigation = [
  {
    id: 1,
    name: 'Balance',
    route: '/home',
  },
  {
    id: 2,
    name: 'Transaction',
    route: '/explorer',
  },
  {
    id: 3,
    name: 'Discover',
    route: '/discover',
  },
] as const;

export const navigationName = {
  BALANCE: 'balance',
  TRANSACTION: 'transaction',
  DISCOVER: 'discover',
};
