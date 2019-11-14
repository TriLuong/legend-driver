import createSagaMiddleware from 'redux-saga'
import axios from 'axios'
import throttle from 'lodash/throttle'
import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { forceReducerReload, createInjectorsEnhancer } from 'redux-injectors'
import { loadState, saveState } from 'Utils/localStorage'
import { setStore } from './Store'
import createReducer from './reducers'

const defaultState = {
  appLoading: true,
  isFetching: false,
  token: null,
  user: null
}

export function configureStore(history) {
  let composeEnhancers = compose
  const reduxSagaMonitorOptions = {}

  const initialState = Object.assign(defaultState, loadState())

  if (typeof initialState.token === 'string' && initialState.token !== '') {
    axios.defaults.headers.common.Authorization = initialState.token
  }
  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    }

    // NOTE: Uncomment the code below to restore support for Redux Saga
    // Dev Tools once it supports redux-saga version 1.x.x
    if (window.__SAGA_MONITOR_EXTENSION__) {
      // eslint-disable-next-line no-const-assign
      reduxSagaMonitorOptions = {
        sagaMonitor: window.__SAGA_MONITOR_EXTENSION__
      }
    }
    /* eslint-enable */
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions)

  const middleware = [sagaMiddleware, routerMiddleware(history)]
  // if (process.env.NODE_ENV !== 'production') {
  //   middleware.push(require('redux-logger').createLogger())
  // }

  const runSaga = sagaMiddleware.run

  const enhancers = [
    applyMiddleware(...middleware),
    createInjectorsEnhancer({
      createReducer,
      runSaga
    })
  ]

  const store = createStore(createReducer(), initialState, composeEnhancers(...enhancers))

  store.subscribe(throttle(() => saveState(store.getState()), 1000))

  setStore(store)

  if (module.hot) {
    forceReducerReload(store)
  }

  return store
}

export default {}
