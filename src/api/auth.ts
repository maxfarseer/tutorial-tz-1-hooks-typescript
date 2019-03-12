import { navigate } from '@reach/router'
import { IUserIdentity } from '../models/user'

interface IAuthResponse {
  status: number;
  data?: any;
  errorText?: string;
}

const checkCredentials = (data: IUserIdentity): boolean => {
  if (data.username === 'Admin' && data.password === '12345') {
    return true
  } else {
    return false
  }
}

export const authenticate = (data: IUserIdentity): Promise<IAuthResponse> => {
  const promise = new Promise<IAuthResponse>((resolve, reject) => {
    if (!checkCredentials(data)) {
      reject({
        status: 500,
        errorText: 'incorrect_login_or_password',
      })
    }
    window.localStorage.setItem('tstz.authenticated', 'true')
    resolve({
      status: 200,
      data: 'ok',
    })
  })

  return promise
}

export const checkAuthStatus = (): boolean => {
  if (localStorage.getItem('tstz.authenticated')) {
    return true
  } else {
    return false
  }
}

export const logout = (): void => {
  window.localStorage.removeItem('tstz.authenticated')
  navigate('/')
}
