import createReducer from 'Utils/createReducer'
import types from './constants'

function loaderStart(state, action) {
  state = true
  return state
}

function loaderEnd(state, action) {
  state = false
  return state
}

const loaderReducer = createReducer(null, {
  [types.LOADER_START]: loaderStart,
  [types.LOADER_END]: loaderEnd
})

export default loaderReducer
