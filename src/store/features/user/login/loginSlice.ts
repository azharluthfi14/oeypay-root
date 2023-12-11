import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import type { CommonState, User } from '@/store';
import { addNotification, registerEmailVerify, signInRequire2FA } from '@/store';

const BASE_URL = 'https://dummyjson.com';

export interface LoginSchema {
  username: string;
  password: string;
}

const initialState: CommonState = {
  isSuccess: false,
  isLoading: false,
};

export const loginUserAction = createAsyncThunk(
  'auth/userLogin',
  async (value: LoginSchema, { rejectWithValue, dispatch }) => {
    try {
      const response: User = await axios.post(`${BASE_URL}/auth/login`, value);
      if (response.state === 'pending') {
        dispatch(registerEmailVerify({ requireEmailVerification: true }));
      } else {
        dispatch(signInRequire2FA({ required2FA: response.otp }));
      }

      return response;
    } catch (error: any) {
      const errorMessage = error?.response?.data?.message as string;
      if (errorMessage.includes('missing otp')) {
        dispatch(signInRequire2FA({ required2FA: true }));
      }
      await dispatch(
        addNotification({
          id: Math.random().toString(),
          message: error.response?.data?.message,
          type: 'error',
        }),
      );
      return rejectWithValue(error.response?.data?.message);
    }
  },
);

export const loginUserSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginUserAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUserAction.fulfilled, state => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(loginUserAction.rejected, state => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export const { reducer: loginReducer, actions: loginAction } = loginUserSlice;
