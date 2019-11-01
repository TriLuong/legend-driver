import { createSelector } from 'reselect'

const loadsReducer = state => state.loadsReducer

export const getLoadsSelector = createSelector(
  loadsReducer,
  data => data
)

export default { getLoadsSelector }
