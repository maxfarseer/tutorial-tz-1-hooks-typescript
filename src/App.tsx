import * as React from 'react'

import { Link, Router } from '@reach/router'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { News } from './pages/News'
import { Profile } from './pages/Profile'

import './App.css'

const App = (props: any) => {
  return (
    <div className="container">
      <h1>TZ #1 with hooks & TypeScript</h1>
      <nav>
        <Link to="/">Home</Link> <Link to="news">News</Link>{' '}
        <Link to="profile">Profile</Link>
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
        <Profile path="/" />
      </App>
    </Router>
  )
}

export { RoutedApp }
