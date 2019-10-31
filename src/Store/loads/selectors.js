import { createSelector } from 'reselect'

const loadsReducer = state => state.loadsReducer

export const getLoadsSelector = createSelector(
  loadsReducer,
  loads => loads
)

export default { getLoadsSelector }
