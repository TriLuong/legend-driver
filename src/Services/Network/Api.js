import FirebaseHelper from 'Utils/FirebaseHelper'
import ApiInstance from './ApiInstance'

// export const login = async (email, password) => {
//   await FirebaseHelper.auth()
//     .signInWithEmailAndPassword(email, password)
//     .then(authUser => authUser)
//     .catch(error => error)
// }

export const logout = async () => {
  await FirebaseHelper.auth()
    .signOut()
    .then(authUser => authUser)
    .catch(error => error)
}

export const login = payload => ApiInstance.post('/api/v1/auth/login', payload)
export const forgotPassword = payload => ApiInstance.post('/api/v1/auth/forgotPassword', payload)

export const getLoads = params => ApiInstance.get('/api/v1/loads', params)
export const getLoadById = id => ApiInstance.get(`/api/v1/loads/${id}`)

export default {
  login,
  logout,
  getLoads,
  getLoadById
}
