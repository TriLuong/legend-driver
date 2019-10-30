import { createSelector } from 'reselect'

const tokenSelector = state => state.token

export const getTokenSelector = createSelector(
  tokenSelector,
  token => token
)

export default {
  getTokenSelector
}
