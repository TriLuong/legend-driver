import { createSelector } from 'reselect'

const loadsReducer = state => state.loadsReducer

export const getLoadsSelector = createSelector(
  loadsReducer,
  data => data
)

// export const getLoadByIdSelector = createSelector(
//   loadsReducer,
//   data => data.load
// )

export default { getLoadsSelector }
