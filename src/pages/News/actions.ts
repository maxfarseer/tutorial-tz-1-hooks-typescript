import { Dispatch } from 'redux'

import { loadNews } from '../../api/news'

import * as t from './types'

export function newsRequest(): t.NewsActionsType {
  return {
    type: t.NEWS_GET_REQUEST,
  }
}

export const newsSuccess = (data: t.INewsItem[]): t.NewsActionsType => ({
  type: t.NEWS_GET_SUCCESS,
  payload: data,
})

export const newsFailure = (
  errorMsg: string = 'default error msg'
): t.NewsActionsType => ({
  type: t.NEWS_GET_FAILURE,
  error: errorMsg,
})

export function getNews() {
  return (dispatch: Dispatch<t.NewsActionsType>): void => {
    dispatch(newsRequest())

    loadNews()
      .then(result => {
        dispatch(newsSuccess(result.data))
      })
      .catch(err => dispatch(newsFailure(err)))
  }
}
