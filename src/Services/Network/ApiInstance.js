import Axios from 'axios'
import { getStore } from 'Store/Store'
import { logoutRequest } from 'Store/auth/actions'
import { loadState } from 'Utils/localStorage'

const API_BASE_URL = 'https://legend-staging.firebaseapp.com'
const API_REQUEST_TIMEOUT = 60000
const IS_STAGING = process.env.NODE_ENV !== 'production'

const ApiInstance = Axios.create({
  baseURL: API_BASE_URL,
  timeout: API_REQUEST_TIMEOUT
})

const db = loadState()

const { token } = db
if (token) {
  ApiInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}
if (token) {
  ApiInstance.defaults.headers.common.Authorization = `Bearer ${token}`
}

ApiInstance.interceptors.request.use(async config => {
  if (IS_STAGING) {
    const tag = 'Request'.padEnd(16)
    const method = `[${config.method.toUpperCase()}]`.padEnd(10)
    const url = `${config.baseURL}${config.url}`
    const title = `${tag}${method}${url}`

    console.group(`%c ${title}`, ...['color: #03A9F4; font-weight: bold;'])

    config.headers && console.log('Headers'.padEnd(14), config.headers)
    config.params && console.log('Param'.padEnd(14), config.params)
    config.data && console.log('Body'.padEnd(14), config.data)
    console.groupEnd()
  }
  return config
})

ApiInstance.interceptors.response.use(
  response => {
    if (IS_STAGING) {
      const tag = 'Request Success'.padEnd(16)
      const method = `[${response.config.method.toUpperCase()}]`.padEnd(10)
      const url = `${response.config.url}`
      const title = `${tag}${method}${url}`
      console.groupCollapsed(`%c ${title}`, ...['color: #4CAF50; font-weight: bold;'])
      response.config.headers && console.log('Headers'.padEnd(14), response.config.headers)
      response.config.params && console.log('Param'.padEnd(14), response.config.params)
      response.config.data && console.log('Body'.padEnd(14), response.config.data)
      response.data && console.log('Status Code'.padEnd(14), response.status)
      response.data && console.log('Response Data'.padEnd(14), response.data)
      console.groupEnd()
    }
    return response.data
  },
  error => {
    if (error.response) {
      if (error.response && error.response.data) {
        if (Array.isArray(error.response.data.errors) && error.response.data.errors.length) {
          const serverError = error.response.data.errors[0]
          error.message = `(${serverError.code}) - ${serverError.message}`
          error.code = serverError.code
        } else if (
          typeof error.response.data.error === 'object'
          && error.response.data.error.message
        ) {
          const serverError = error.response.data.error
          error = `(${serverError.code}) - ${serverError.message}`
          error.code = serverError.code
        }
      }

      if (error && error.code === 401) {
        getStore().dispatch(logoutRequest())
      }
    }

    if (IS_STAGING) {
      const tag = 'Request Error'.padEnd(16)
      const method = `[${error.config.method.toUpperCase()}]`.padEnd(10)
      const url = `${error.config.url}`
      const title = `${tag}${method}${url}`
      console.group(`%c ${title}`, ...['color: #F20404; font-weight: bold;'])
      error.config.headers && console.log('Headers'.padEnd(14), error.config.headers)
      error.config.params && console.log('Param'.padEnd(14), error.config.params)
      error.config.data && console.log('Body'.padEnd(14), error.config.data)
      error.message && console.log('Error Message'.padEnd(14), error.message)
      error.code && console.log('Error Code'.padEnd(14), error.code)
      console.groupEnd()
    }

    return Promise.reject(error)
  }
)

export default ApiInstance
