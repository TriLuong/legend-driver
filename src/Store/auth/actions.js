import { createAction } from 'redux-actions'
import * as types from './constanst'

export const loginRequest = createAction(types.LOGIN_REQUEST)
export const loginSuccess = createAction(types.LOGIN_SUCCESS)
export const loginFailure = createAction(types.LOGIN_FAILURE)

export const logoutRequest = createAction(types.LOGOUT_REQUEST)
export const logoutSuccess = createAction(types.LOGOUT_SUCCESS)
export const logoutFailure = createAction(types.LOGOUT_FAILURE)

export const forgotPassword = createAction(types.FORGOT_PASSWORD)
export const forgotPasswordSuccess = createAction(types.FORGOT_PASSWORD_SUCCESS)
export const forgotPasswordFailure = createAction(types.FORGOT_PASSWORD_FAILURE)

export default {
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  forgotPassword,
  forgotPasswordSuccess,
  forgotPasswordFailure
}
