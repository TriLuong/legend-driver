const keyStorage = 'db'
const whiteList = ['user', 'token', 'lead']

export const saveData = (key, data) => {
  try {
    const serializedData = JSON.stringify(data)
    localStorage.setItem(key, serializedData)
  } catch (err) {
    return undefined
  }
  return null
}

export const getData = key => {
  try {
    const data = localStorage.getItem(key)
    if (data == null) {
      return null
    }
    return JSON.parse(data)
  } catch (err) {
    return undefined
  }
}

export const clearAll = () => {
  try {
    localStorage.removeItem(keyStorage)
  } catch (err) {
    return undefined
  }
  return null
}

export const saveState = state => {
  if (!state) return
  try {
    const dupState = {}
    whiteList.map(key => {
      dupState[key] = state[key]
      return null
    })
    saveData(keyStorage, dupState)
  } catch (err) {
    console.log('saveState error', err)
  }
}

export const loadState = () => getData(keyStorage) || {}
