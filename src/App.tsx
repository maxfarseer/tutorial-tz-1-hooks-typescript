import * as React from 'react'

import { Link, RouteComponentProps, Router } from '@reach/router'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { News } from './pages/News'
import { Profile } from './pages/Profile'

import './App.css'

const App: React.FC<RouteComponentProps> = props => {
  return (
    <div className="container">
      <h1>TZ #1 with hooks & TypeScript</h1>
      <nav>
        <Link to="/">Домой</Link> <Link to="news">Новости</Link>{' '}
        <Link to="profile">Профиль</Link>
      </nav>

      {props.children}
    </div>
  )
}

const RoutedApp = () => {
  return (
    <Router>
      <App path="/">
        <Home path="/" />
        <Login path="/login" />
        <News path="/news" />
        <Profile path="/profile" />
      </App>
    </Router>
  )
}

export { RoutedApp }
