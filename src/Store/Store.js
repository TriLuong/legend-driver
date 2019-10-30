// eslint-disable-next-line no-underscore-dangle
let _store = null

export function setStore(store) {
  // eslint-disable-next-line no-const-assign
  _store = store
}

export function getStore() {
  return _store
}
