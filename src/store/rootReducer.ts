import { combineReducers } from '@reduxjs/toolkit';

import { notificationReducer } from '@/store/features/public';
import { authReducer, loginReducer, registerReducer } from '@/store/features/user';

const userRootReducer = combineReducers({
  auth: authReducer,
  login: loginReducer,
  register: registerReducer,
});

const publicReducer = combineReducers({
  notification: notificationReducer,
});

export const rootReducer = combineReducers({
  public: publicReducer,
  user: userRootReducer,
});
