import * as React from 'react'

import { navigate, RouteComponentProps } from '@reach/router'

import { authenticate } from '../api/auth'
import { IUserIdentity } from '../models/user'

const Login: React.FC<RouteComponentProps> = () => {
  const [user, setField] = React.useState<IUserIdentity>({
    username: '',
    password: '',
  })

  const [notification, setNotification] = React.useState<string>('')

  const onInputChange = (fieldName: string) => (
    e: React.SyntheticEvent<HTMLInputElement>
  ): void => {
    setField({
      ...user,
      [fieldName]: e.currentTarget.value,
    })
    setNotification('')
  }

  const onSubmit = (e: React.SyntheticEvent<HTMLFormElement>): void => {
    e.preventDefault()
    authenticate(user)
      .then(() => {
        navigate(`/profile`)
      })
      .catch(err => {
        if (err.errorText) {
          setNotification(err.errorText)
        } else {
          // tslint:disable-next-line: no-console
          console.warn('request problem', err)
        }
      })
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        {notification ? <p>{notification}</p> : null}
        <input
          type="text"
          value={user.username}
          onChange={onInputChange('username')}
        />
        <input
          type="text"
          value={user.password}
          onChange={onInputChange('password')}
        />
        <button>Login</button>
      </form>
    </>
  )
}

export { Login }
