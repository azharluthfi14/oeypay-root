import type { Middleware } from '@reduxjs/toolkit';

import { loginUserAction, removeNotification } from '@/store';
import { route } from '@/utils';

// interface MiddlewareAPI<S, E extends Action> {
//   dispatch: Dispatch<E>;
//   getState(): S;
// }
// type Store = {
//   dispatch: Dispatch;
//   getState: () => RootState;
//   subscribe: (listener: () => void) => () => void;
//   replaceReducer: (reducer: Reducer) => void;
// };

export const notificationMiddleware: Middleware = store => next => (action: any) => {
  if (action.type === 'notifications/addNotification') {
    setTimeout(() => {
      store.dispatch(removeNotification());
    }, 4500);
  }
  return next(action);
};

export const redirectMiddleware: Middleware = () => next => (action: any) => {
  if (action.type === loginUserAction.fulfilled.type) {
    if (route.navigate) {
      route.navigate('/dashboard');
    }
  }
  return next(action);
};
