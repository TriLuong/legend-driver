import { createAction } from 'redux-actions'
import types from './constants'

export const loaderStart = createAction(types.LOADER_START)
export const loaderEnd = createAction(types.LOADER_END)

export default { loaderStart, loaderEnd }
