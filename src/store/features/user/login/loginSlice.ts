import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { addNotification } from '@/store';

const BASE_URL = 'https://dummyjson.com';

export interface LoginSchema {
  username: string;
  password: string;
}

const initialState = {
  isSuccess: false,
  isLoading: false,
  countState: 5,
};

export const loginUserAction = createAsyncThunk(
  'auth/userLogin',
  async (value: LoginSchema, { rejectWithValue, dispatch }) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, value);
      const { accessToken, refreshToken }: { accessToken: string; refreshToken: string } =
        response.data;
      // Store the tokens in localStorage or secure cookie for later use
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
    } catch (error: any) {
      console.log('error', error);
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
