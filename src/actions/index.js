export const loginUser = (email, password) => {
  return {
    type: 'LOGIN',
    data: {email: email, password: password}
  }
}

export const actionSaveCurrentUser = (jwt, user) => {
  return {
    type: 'LOGIN_SUCCESS',
    data: {user: user, jwt:jwt}
  }
}

export const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
}
