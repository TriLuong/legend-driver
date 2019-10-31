import { createSelector } from 'reselect'

const authReducer = state => state.token

export const getTokenSelector = createSelector(
  authReducer,
  auth => auth
)

export const getRolelector = createSelector(
  authReducer,
  auth => auth.user.role
)

export default {
  getTokenSelector,
  getRolelector
}
