import { useState } from 'react';

import { loginUserAction, useAppDispatch } from '@/store';

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const [loginData, setLoginData] = useState({
    name: '',
    password: '',
  });

  const handleLogin = () => {
    dispatch(
      loginUserAction({
        password: loginData.password,
        username: loginData.name,
      }),
    );
  };

  return (
    <div>
      LoginPage
      <input
        type="text"
        name="name"
        value={loginData.name}
        onChange={e => setLoginData({ ...loginData, name: e.target.value })}
      />
      <input
        type="text"
        name="password"
        value={loginData.password}
        onChange={e => setLoginData({ ...loginData, password: e.target.value })}
      />
      <button type="button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
