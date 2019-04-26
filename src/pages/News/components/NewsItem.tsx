import * as React from 'react'

import { INewsItem } from '../types'

interface INewsItemProps {
  data: INewsItem;
}

const NewsItem: React.FC<INewsItemProps> = ({
  data: { title, text, timestamp, link },
}) => {
  return (
    <article>
      <br />
      <div>
        {
          <a href={link} target="_blank">
            {title}
          </a>
        }{' '}
        | {timestamp.toLocaleDateString()}
      </div>
      <div>{text}</div>
    </article>
  )
}

export { NewsItem }
