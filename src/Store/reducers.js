import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import history from 'Utils/history'
import authReducer from './auth/reducer'
import loadsReducer from './loads/reducer'
import loaderReducer from './loader/reducer'
// import { LOGOUT_REQUEST } from './Auth/AuthActionTypes'

export default function createReducer(injectedReducers = {}) {
  const appReducer = combineReducers({
    authReducer,
    loadsReducer,
    loaderReducer,
    router: connectRouter(history),
    ...injectedReducers
  })

  const rootReducer = (state, action) =>
    // if (action.type === LOGOUT_REQUEST) {
    //   state = undefined
    // }
    appReducer(state, action)

  return rootReducer
}
