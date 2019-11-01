import createReducer from 'Utils/createReducer'
import types from './constants'

function getLoadsSuccess(state, action) {
  state = action.payload
  return state
}

// eslint-disable-next-line no-unused-vars
const loadsReducer = createReducer(null, {
  [types.GET_LOADS_SUCCESS]: getLoadsSuccess,
  [types.GET_LOAD_BY_ID_SUCCESS]: getLoadsSuccess
})

export default loadsReducer
