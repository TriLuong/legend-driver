import { createSelector } from 'reselect'

const authReducer = state => state.token

export const getTokenSelector = createSelector(
  authReducer,
  token => token
)

export default {
  getTokenSelector
}
