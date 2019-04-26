import { combineReducers } from 'redux'
import { newsReducer } from '../pages/News'

const rootReducer = combineReducers({
  news: newsReducer,
})

export { rootReducer }

export type RootState = ReturnType<typeof rootReducer>
