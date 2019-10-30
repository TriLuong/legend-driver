// import { NetInfo } from 'react-native'
import Axios from 'axios'

const API_BASE_URL = 'https://legend-staging.firebaseapp.com'
const API_REQUEST_TIMEOUT = 60000

export const apiAxiosInstance = Axios.create({
  baseURL: API_BASE_URL,
  timeout: API_REQUEST_TIMEOUT
})

// apiAxiosInstance.interceptors.request.use(async config => {
//   const isConnected = await NetInfo.isConnected.fetch()
//   if (!isConnected) {
//     return Promise.reject(Error('Network not available'))
//   }

//   // eslint-disable-next-line no-undef
//   if (__DEV__) {
//     const tag = 'Request'.padEnd(16)
//     const method = `[${config.method.toUpperCase()}]`.padEnd(10)
//     const url = `${config.baseURL}${config.url}`
//     const title = `${tag}${method}${url}`

//     console.group(`%c ${title}`, ...['color: #03A9F4; font-weight: bold;'])

//     config.headers && console.log('Headers'.padEnd(14), config.headers)
//     config.params && console.log('Param'.padEnd(14), config.params)
//     config.data && console.log('Body'.padEnd(14), config.data)
//     console.groupEnd()
//   }
//   return config
// })

apiAxiosInstance.interceptors.response.use(
  response => {
    // eslint-disable-next-line no-undef
    if (__DEV__) {
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
      const errorData = error.response.data
      const hasError = errorData && Array.isArray(errorData.errors) && errorData.errors.length
      const errorResponse = hasError ? errorData.errors[0] : null
      error.message = errorResponse ? errorResponse.message : 'Internal Error'
      error.code = errorResponse ? errorResponse.code : 500
    }

    // eslint-disable-next-line no-undef
    if (__DEV__) {
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

export default {}
