import * as React from 'react'

import { RouteComponentProps } from '@reach/router'

const News: React.FC<RouteComponentProps> = () => {
  return (
    <div className="news">
      <p>Новости</p>
    </div>
  )
}

export { News }
