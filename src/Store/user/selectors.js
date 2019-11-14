import { createSelector } from 'reselect'

const userReducer = state => state.user

export const getUserSelector = createSelector(
  userReducer,
  user => user
)

export default {
  getUserSelector
}
