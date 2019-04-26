import { INewsState, NewsActionsType } from './types'
import * as t from './types'

const initialState: INewsState = {
  data: [],
  isLoading: false,
  errorMsg: null,
}

export function newsReducer(
  state = initialState,
  action: NewsActionsType
): INewsState {
  switch (action.type) {
    case t.NEWS_GET_REQUEST: {
      return {
        ...state,
        isLoading: true,
      }
    }

    case t.NEWS_GET_SUCCESS: {
      return {
        ...state,
        data: action.payload,
      }
    }

    case t.NEWS_GET_FAILURE: {
      return {
        ...state,
        errorMsg: action.error,
      }
    }

    default: {
      return state
    }
  }
}
