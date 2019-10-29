import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootSaga from './rootSaga'

import reducers from './rootReducer'

const saga = createSagaMiddleware()

const middlewares = []
middlewares.push(saga)

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  middlewares.push(logger)
}

export const store = createStore(reducers, applyMiddleware(...middlewares))

saga.run(rootSaga)



export default { store }
