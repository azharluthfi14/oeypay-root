import { combineReducers } from '@reduxjs/toolkit';

import { notificationReducer } from '@/store/features/public';
import { loginReducer } from '@/store/features/user';

const userRootReducer = combineReducers({
  user: loginReducer,
});

const publicReducer = combineReducers({
  notification: notificationReducer,
});

export const rootReducer = combineReducers({
  public: publicReducer,
  user: userRootReducer,
});
