import produce, { setAutoFreeze } from 'immer'

// performance
setAutoFreeze(process.env.NODE_ENV !== 'production')

export default (initialState, handlers) => (state = initialState, action) => {
  if (handlers[action.type] !== undefined) {
    return produce(state, draftState => handlers[action.type](draftState, action))
  }
  return state
}
