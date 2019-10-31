import { createSelector } from 'reselect'

const loaderReducer = state => state.loaderReducer

export const getFetchingSelector = createSelector(
  loaderReducer,
  isFetching => isFetching
)

export default { getFetchingSelector }
