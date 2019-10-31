import { createSelector } from 'reselect'

const authReducer = state => state.authReducer

export const getTokenSelector = createSelector(
  authReducer,
  auth => auth.token
)

export const getRolelector = createSelector(
  authReducer,
  auth => auth.user.role
)

export default {
  getTokenSelector,
  getRolelector
}
