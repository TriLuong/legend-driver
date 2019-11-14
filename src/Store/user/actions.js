import { createAction } from 'redux-actions'
import types from './constants'

export const getUser = createAction(types.GET_USER)
export const getUserSuccess = createAction(types.GET_USER_SUCCESS)
export const getUserFailure = createAction(types.GET_USER_FAILURE)

export const updateToken = createAction(types.UPDATE_TOKEN)
export const updateTokenSuccess = createAction(types.UPDATE_TOKEN_SUCCESS)
export const updateTokenFailure = createAction(types.UPDATE_TOKEN_FAILURE)

export default {
  getUser,
  getUserSuccess,
  getUserFailure,
  updateToken,
  updateTokenSuccess,
  updateTokenFailure
}
