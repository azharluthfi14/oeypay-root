import { configureStore } from '@reduxjs/toolkit';

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {},
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(),
  devTools: import.meta.env.MODE === 'development',
});
