import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { RouteComponentProps } from '@reach/router'

import { RootState } from '../../../reducers'
import { getNews } from '../actions'
import { NewsActionsType } from '../types'
import { NewsItem } from './NewsItem'

// https://stackoverflow.com/a/54157279/1916578 option 2
type IStoreProps = ReturnType<typeof mapStateToProps>
type IDispatchProps = ReturnType<typeof mapDispatchToProps>
type INewsContainerProps = IStoreProps & IDispatchProps & RouteComponentProps

const Container: React.FC<INewsContainerProps> = ({ news, onGetNews }) => {
  React.useEffect(() => {
    onGetNews()
  }, [])

  return (
    <div className="news">
      {news.data.map(item => (
        <NewsItem data={item} key={item.id} />
      ))}
    </div>
  )
}

const mapStateToProps = (state: RootState) => ({
  news: state.news,
})

const mapDispatchToProps = (dispatch: Dispatch<NewsActionsType>) =>
  bindActionCreators({ onGetNews: getNews }, dispatch)

const NewsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export { NewsContainer }
