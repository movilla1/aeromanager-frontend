export const setToken = (userToken) => {
  sessionStorage.setItem('token', JSON.stringify(userToken));
};

export const getToken = () => {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

export const currentUser = () => {
  return sessionStorage.getItem('user');
}

export const isLoggedIn = () => (
  sessionStorage.getItem('token') + "x" !== "x"
)