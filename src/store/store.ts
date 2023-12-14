import { configureStore } from '@reduxjs/toolkit';

import { notificationMiddleware, redirectMiddleware } from './middleware';
import { rootReducer } from './rootReducer';

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat([redirectMiddleware, notificationMiddleware]),
  devTools: import.meta.env.MODE === 'development',
});
