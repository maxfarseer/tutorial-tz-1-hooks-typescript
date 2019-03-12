import * as React from 'react'

import { RouteComponentProps } from '@reach/router'
import { getNews } from '../api/news'
import { NewsItem } from '../components/NewsItem'
import { INewsItem } from '../models/news'

const News: React.FC<RouteComponentProps> = () => {
  const [news, setNews] = React.useState<INewsItem[]>([])

  React.useEffect(() => {
    getNews()
      .then(res => {
        setNews(res.data)
      })
      .catch(err => {
        // tslint:disable-next-line: no-console
        console.warn('Getting news problem', err)
      })
  }, [])

  return (
    <div className="news">
      {news.map(item => (
        <NewsItem data={item} key={item.id} />
      ))}
    </div>
  )
}

export { News }
