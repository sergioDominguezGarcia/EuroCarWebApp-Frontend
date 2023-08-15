const USER_TOKEN_KEY = "app_token_1234"
const USER_ID = "1234"

export const getToken = () => {
  const response = window.localStorage.getItem(USER_TOKEN_KEY);
  return response;
};

export const setToken = (token: string) => {
  window.localStorage.setItem(USER_TOKEN_KEY, token);
};

export const removeToken = () => {
  window.localStorage.removeItem(USER_TOKEN_KEY);
};


export const getUserId = () => {
  const value = window.localStorage.getItem(USER_ID) || ''
  return value.trim()
}

export const setUserId = (userId: string) => {
  window.localStorage.setItem(USER_ID, userId)
}