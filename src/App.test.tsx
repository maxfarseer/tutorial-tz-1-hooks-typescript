import React from 'react'
import ReactDOM from 'react-dom'
import { RoutedApp } from './App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<RoutedApp />, div)
  ReactDOM.unmountComponentAtNode(div)
})
