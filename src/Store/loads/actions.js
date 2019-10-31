import { createAction } from 'redux-actions'
import types from './constants'

export const getLoads = createAction(types.GET_LOADS_REQUEST)
export const getLoadsSuccess = createAction(types.GET_LOADS_SUCCESS)
export const getLoadsFailure = createAction(types.GET_LOADS_FAILURE)

export const getLoadById = createAction(types.GET_LOAD_BY_ID_REQUEST)
export const getLoadByIdSuccess = createAction(types.GET_LOAD_BY_ID_SUCCESS)
export const getLoadByIdFailure = createAction(types.GET_LOAD_BY_ID_FAILURE)

export default {
  getLoads,
  getLoadsSuccess,
  getLoadsFailure,
  getLoadById,
  getLoadByIdSuccess,
  getLoadByIdFailure
}
