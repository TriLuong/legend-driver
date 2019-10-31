import { createAction } from 'redux-actions'
import types from './constants'

export const getLoads = createAction(types.GET_LOADS_REQUEST)
export const getLoadsSuccess = createAction(types.GET_LOADS_SUCCESS)
export const getLoadsFailure = createAction(types.GET_LOADS_FAILURE)

export default { getLoads, getLoadsSuccess, getLoadsFailure }
