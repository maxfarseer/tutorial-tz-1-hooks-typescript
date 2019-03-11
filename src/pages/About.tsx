import * as React from 'react'

import { RouteComponentProps } from '@reach/router'

interface IAboutProps extends RouteComponentProps {
  source?: string;
}

const About: React.FC<IAboutProps> = props => {
  return <p>{props.source}</p>
}

export { About }
