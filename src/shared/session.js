export const currentUser = () => {
  const userData = JSON.parse(sessionStorage.getItem('user'));
  return userData;
}

export const isLoggedIn = () => (
  sessionStorage.getItem('token') + "x" !== "x"
)

export const logOut = () => {
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('user');
}

export const setCurrentUser = (userData) => (
  sessionStorage.setItem('user', JSON.stringify(userData))
)