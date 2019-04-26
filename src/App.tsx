import * as React from 'react'

import { Link, RouteComponentProps, Router } from '@reach/router'
import { Provider } from 'react-redux'

import { Authenticated } from './components/сommon/Authenticated'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { components as News } from './pages/News'
import { Profile } from './pages/Profile'

import { checkAuthStatus, logout } from './api/auth'
import { store } from './store/configureStore'

import './App.css'

const App: React.FC<RouteComponentProps> = props => {
  return (
    <div className="container">
      <h1>TZ #1 with hooks & TypeScript</h1>
      <nav>
        <Link to="/">Домой</Link> <Link to="news">Новости</Link>{' '}
        <Link to="profile">Профиль</Link>{' '}
        {checkAuthStatus() ? <button onClick={logout}>Выйти</button> : null}
      </nav>

      {props.children}
    </div>
  )
}

const RoutedApp = () => {
  return (
    <Provider store={store}>
      <Router>
        <App path="/">
          <Home path="/" />
          <Login path="/login" />
          <News.NewsContainer path="/news" />
          <Authenticated path="/profile">
            <Profile path="/" />
          </Authenticated>
        </App>
      </Router>
    </Provider>
  )
}

export { RoutedApp }
