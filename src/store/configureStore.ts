
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from '../reducers'

/* prettier fails here, todo */
declare const __REDUX_DEVTOOLS_EXTENSION_COMPOSE__:
  (arg: { name: string }) => typeof compose

const middleware = [thunk]

const composeEnhancers =
  typeof window === 'object' &&
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'ts-tz-1v2'
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
)

const store = createStore(rootReducer, enhancer)

export {
  store
}