import createReducer from 'Utils/createReducer'
import { clearAll } from 'Utils/localStorage'
import types from './constanst'

function loginSuccess(state, action) {
  state = action.payload
  return state
}

// eslint-disable-next-line no-unused-vars
function loginFailure(state, action) {
  state = null
  clearAll()
  return state
}

const authReducer = createReducer(null, {
  [types.LOGIN_SUCCESS]: loginSuccess,
  [types.LOGIN_FAILURE]: loginFailure,
  [types.LOGOUT_SUCCESS]: loginFailure
})

export default authReducer
