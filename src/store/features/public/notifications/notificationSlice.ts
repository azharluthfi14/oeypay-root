import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { RootState } from '@/store';

interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
}

interface NotificationsState {
  notifications: Notification[];
}

const initialState: NotificationsState = {
  notifications: [],
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    removeNotification: state => {
      state.notifications = state.notifications.slice(1);
    },
  },
});

export const selectNotifications = (state: RootState): Notification[] =>
  state.public.notification.notifications;

export const {
  actions: { addNotification, removeNotification },
  reducer: notificationReducer,
} = notificationsSlice;
