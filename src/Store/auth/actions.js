import { createAction } from 'redux-actions'
import * as types from './constanst'

export const loginRequest = createAction(types.LOGIN_REQUEST)
export const loginSuccess = createAction(types.LOGIN_SUCCESS)
export const loginFailure = createAction(types.LOGIN_FAILURE)

export default { loginRequest, loginSuccess, loginFailure }
