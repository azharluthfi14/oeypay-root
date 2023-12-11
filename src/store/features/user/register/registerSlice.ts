import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import {
  addNotification,
  type CommonState,
  registerEmailVerify,
  type User,
} from '@/store';

export interface RegisterSchema {
  email: string;
  fullname: string;
  password: string;
}

const initialState: CommonState = {
  isLoading: false,
  isSuccess: false,
};

export const registerUserAction = createAsyncThunk(
  'auth/userRegister',
  async (value: RegisterSchema, { rejectWithValue, dispatch }) => {
    try {
      const response: User = await axios.post('', { value });
      if (response.state === 'pending') {
        dispatch(registerEmailVerify({ requireEmailVerification: true }));
      }
      return response;
    } catch (error: any) {
      dispatch(
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

export const registerUserSlice = createSlice({
  name: 'registerSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(registerUserAction.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUserAction.fulfilled, state => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(registerUserAction.rejected, state => {
        state.isLoading = false;
        state.isSuccess = false;
      });
  },
});

export const { reducer: registerReducer, actions: registerAction } = registerUserSlice;
