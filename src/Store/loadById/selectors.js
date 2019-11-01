import { createSelector } from 'reselect'

const loadById = state => state.loadById

export const getLoadByIdSelector = createSelector(
  loadById,
  load => load
)

export default { getLoadByIdSelector }
