/* MODEL */

export interface INewsItem {
  id: number;
  title: string;
  text: string;
  link: string;
  timestamp: Date;
}

export interface INewsState {
  data: INewsItem[];
  isLoading: boolean;
  errorMsg: null | string;
}

/* ACTIONS */

const NEWS_GET_REQUEST = 'NEWS_GET_REQUEST'
const NEWS_GET_SUCCESS = 'NEWS_GET_SUCCESS'
const NEWS_GET_FAILURE = 'NEWS_GET_FAILURE'

export interface INewsGetRequest {
  type: typeof NEWS_GET_REQUEST;
}

export interface INewsGetSuccess {
  type: typeof NEWS_GET_SUCCESS;
  payload: INewsItem[];
}

export interface INewsGetFailure {
  type: typeof NEWS_GET_FAILURE;
  error: string;
}

/* EXPORTS */

export { NEWS_GET_REQUEST, NEWS_GET_SUCCESS, NEWS_GET_FAILURE }

export type NewsActionsType =
  | INewsGetRequest
  | INewsGetSuccess
  | INewsGetFailure
