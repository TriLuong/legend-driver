import FirebaseHelper from 'Utils/FirebaseHelper'
import ApiInstance from './ApiInstance'

export const login = async (email, password) => {
  const authUser = await FirebaseHelper.auth().signInWithEmailAndPassword(email, password)
  return authUser
}

export const logout = async () => {
  const authUser = FirebaseHelper.auth().signOut()
  return authUser
}

export const getLoads = params => ApiInstance.get('/api/v1/loads', params)

export default {
  login,
  logout,
  getLoads
}
