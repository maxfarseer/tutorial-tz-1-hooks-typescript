import * as React from 'react'

import { Redirect, RouteComponentProps } from '@reach/router'

import { checkAuthStatus } from '../../api/auth'

// about noThrow https://reach.tech/router/api/Redirect

const Authenticated: React.FC<RouteComponentProps> = ({ children }) => {
  return checkAuthStatus() ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Redirect to="/login" noThrow={true} />
  )
}

export { Authenticated }
