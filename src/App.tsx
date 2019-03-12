import * as React from 'react'

import { Link, RouteComponentProps, Router } from '@reach/router'

import { About } from './pages/About'
import { News } from './pages/News'

import './App.css'

interface IAppProps extends RouteComponentProps {
  name: string;
  site: string;
}

const App: React.FC<IAppProps> = props => {
  return (
    <div className="container">
      <h1>TZ #1 with hooks & TypeScript</h1>
      <nav>
        <Link to="/">Домой</Link> <Link to="news">Новости</Link>{' '}
        <Link to="/about/habr">Про habr</Link>{' '}
      </nav>
      <hr />
      <p>
        {' '}
        Автор: {props.name} | Сайт: {props.site}
      </p>
      <hr />
      {props.children}
    </div>
  )
}

const RoutedApp = () => {
  return (
    <Router>
      <App path="/" name="Max Frontend" site="maxpfrontend.ru">
        <News path="/news" />
        <About path="/about/:source" />
      </App>
    </Router>
  )
}

export { RoutedApp }
