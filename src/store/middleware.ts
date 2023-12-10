import type { Middleware } from '@reduxjs/toolkit';

import { loginUserAction, removeNotification, store } from '@/store';
import { history } from '@/utils';

export const notificationMiddleware: Middleware =
  () => next => (action: any) => {
    if (action.type === 'notifications/addNotification') {
      setTimeout(() => {
        store.dispatch(removeNotification());
      }, 4500);
    }
    return next(action);
  };

export const redirectMiddleware: Middleware = () => next => (action: any) => {
  if (action.type === loginUserAction.fulfilled.type) {
    if (history.navigate) {
      history.navigate('/dashboard');
    }
  }
  return next(action);
};
