import createReducer from 'Utils/createReducer'
import types from './constants'

function getUserSuccess(state, action) {
  console.log('getUserSuccess', action.payload)
  state = action.payload
  return state
}

function getUserFailure(state, action) {
  state = null
  return state
}

const userReducer = createReducer(null, {
  [types.GET_USER_SUCCESS]: getUserSuccess,
  [types.GET_USER_FAILURE]: getUserFailure
})

export default userReducer
