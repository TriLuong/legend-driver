import { createAction } from 'redux-actions'
import types from './constants'

export const getUser = createAction(types.GET_USER)
export const getUserSuccess = createAction(types.GET_USER_SUCCESS)
export const getUserFailure = createAction(types.GET_USER_FAILURE)

export default {
  getUser,
  getUserSuccess,
  getUserFailure
}
