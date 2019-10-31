import createReducer from 'Utils/createReducer'
import types from './constants'

function getLoadsSuccess(state, action) {
  state = action.payload
  return state
}

// eslint-disable-next-line no-unused-vars
const authReducer = createReducer(null, {
  [types.GET_LOADS_SUCCESS]: getLoadsSuccess
})

export default authReducer
