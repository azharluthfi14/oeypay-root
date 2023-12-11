export interface CommonState {
  isLoading: boolean;
  isSuccess: boolean;
}

export type StateUser = 'active' | 'pending' | 'inactive';

export interface User {
  email: string;
  uid: string;
  role: string;
  otp: boolean;
  state: StateUser;
  username: string;
}
