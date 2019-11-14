import createReducer from 'Utils/createReducer'
import types from './constants'

function getUserSuccess(state, action) {
  state = action.payload
  return state
}

function getUserFailure(state, action) {
  state = null
  return state
}

function updateTokenSuccess(state, action) {
  state.token = action.payload
  return state
}

function updateTokenFailure(state, action) {
  return state
}

const userReducer = createReducer(null, {
  [types.GET_USER_SUCCESS]: getUserSuccess,
  [types.GET_USER_FAILURE]: getUserFailure,
  [types.UPDATE_TOKEN_SUCCESS]: updateTokenSuccess,
  [types.UPDATE_TOKEN_FAILURE]: updateTokenFailure
})

export default userReducer
