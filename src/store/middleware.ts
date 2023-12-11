import type { Action, Dispatch, Reducer } from '@reduxjs/toolkit';

import type { RootState } from '@/store';
import { loginUserAction, removeNotification, store } from '@/store';
import { history } from '@/utils';

interface MiddlewareAPI<S, E extends Action> {
  dispatch: Dispatch<E>;
  getState(): S;
}
type Store = {
  dispatch: Dispatch;
  getState: () => RootState;
  subscribe: (listener: () => void) => () => void;
  replaceReducer: (reducer: Reducer) => void;
};

type Middleware<S, E extends Action> = (
  api?: MiddlewareAPI<S, E>,
) => (next: Dispatch<E>) => (event: E) => ReturnType<Dispatch<E>>;

export const notificationMiddleware: Middleware<Store, Action> = () => next => action => {
  if (action.type === 'notifications/addNotification') {
<<<<<<< HEAD
=======
    // Hapus state notif di store
>>>>>>> b0a7305a7faaff87f065806b6f28806a80cd5f29
    setTimeout(() => {
      store.dispatch(removeNotification());
    }, 4500);
  }
  return next(action);
};

export const redirectMiddleware: Middleware<Store, Action> = () => next => action => {
  if (action.type === loginUserAction.fulfilled.type) {
    if (history.navigate) {
      history.navigate('/dashboard');
    }
  }
  return next(action);
};
