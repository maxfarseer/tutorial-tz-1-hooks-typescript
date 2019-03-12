import * as React from 'react'

import { RouteComponentProps } from '@reach/router'

interface IAboutProps extends RouteComponentProps {
  source?: string;
}

const About: React.FC<IAboutProps> = props => {
  return (
    <div className="about">
      <p>Страница about</p>
      <p>{props.source}</p>
    </div>
  )
}

export { About }
