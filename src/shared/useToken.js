import { useState } from 'react';

export default function useToken() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  };

  const [token, setToken] = useState(getToken());

  const saveToken = authData => {
    sessionStorage.setItem('token', JSON.stringify({ token: authData.token }));
    sessionStorage.setItem('user', JSON.stringify(authData.user));
    setToken(authData.token);
  };

  return {
    setToken: saveToken,
    token
  }
}
