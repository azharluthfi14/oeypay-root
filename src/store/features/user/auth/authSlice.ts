import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  required2FA: boolean;
  requireEmailVerification: boolean;
  isEmailVerified: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isEmailVerified: false,
  required2FA: false,
  requireEmailVerification: true,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signInRequire2FA: (state, action: PayloadAction<{ required2FA: boolean }>) => {
      state.required2FA = action.payload.required2FA;
    },
    signInReset2FA: state => {
      state.required2FA = false;
    },
    registerEmailVerify: (
      state,
      action: PayloadAction<{ requireEmailVerification: boolean }>,
    ) => {
      state.requireEmailVerification = action.payload.requireEmailVerification;
    },
    registerEmailVerifyFetch: state => {
      state.isEmailVerified = false;
    },
    registerEmailVerifySuccess: state => {
      state.isEmailVerified = true;
    },
  },
});

export const {
  actions: {
    signInRequire2FA,
    registerEmailVerify,
    registerEmailVerifyFetch,
    registerEmailVerifySuccess,
    signInReset2FA,
  },
  reducer: authReducer,
} = authSlice;
