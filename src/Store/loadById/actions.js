import { createAction } from 'redux-actions'
import types from './constants'

export const getLoadById = createAction(types.GET_LOAD_BY_ID_REQUEST)
export const getLoadByIdSuccess = createAction(types.GET_LOAD_BY_ID_SUCCESS)
export const getLoadByIdFailure = createAction(types.GET_LOAD_BY_ID_FAILURE)

export default {
  getLoadById,
  getLoadByIdSuccess,
  getLoadByIdFailure
}
