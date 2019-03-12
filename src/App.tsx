import * as React from 'react'

import './App.css'

interface IAppProps {
  name: string;
  site: string;
}

const App: React.FC<IAppProps> = props => {
  return (
    <div className="container">
      <h1>TZ #1 with hooks & TypeScript</h1>
      <nav>
        <p>Навигация</p>
      </nav>

      <p>Отрисовка роутов</p>
      <p>Привет, {props.name}</p>
      <p>Сайт: {props.site}</p>
      {props.children}
    </div>
  )
}

const Baby = () => {
  return <p>дочерний компонент</p>
}

const RoutedApp = () => {
  return (
    <App name="Max Frontend" site="maxpfrontend.ru">
      <Baby />
    </App>
  )
}

export { RoutedApp }
