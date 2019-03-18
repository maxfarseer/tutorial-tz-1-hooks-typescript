import * as React from 'react'
import styled from 'styled-components'

import { INewsItem } from '../models/news'

interface INewsItemProps {
  data: INewsItem;
}

const Article = styled.article`
  margin: 10px;
  border: 1px solid black;
  padding: 5px;
`

const NewsItem: React.FC<INewsItemProps> = ({
  data: { title, text, timestamp, link },
}) => {
  return (
    <Article>
      <div>
        {
          <a href={link} target="_blank">
            {title}
          </a>
        }{' '}
        | {timestamp.toLocaleDateString()}
      </div>
      <div>{text}</div>
    </Article>
  )
}

export { NewsItem }
