const TOKEN_KEY = "app_token_1234"
const USER_ID = "1234"

export const getToken = () => {
  const value = window.localStorage.getItem(TOKEN_KEY) || ""
  return value.trim()
}

export const setToken = (token: string) => {
  window.localStorage.setItem(TOKEN_KEY, token)
}

export const removeToken = () => {
  window.localStorage.removeItem(TOKEN_KEY)
}

export const getUserId = () => {
  const value = window.localStorage.getItem(USER_ID) || ''
  return value.trim()
}

export const setUserId = (userId: string) => {
  window.localStorage.setItem(USER_ID, userId)
}