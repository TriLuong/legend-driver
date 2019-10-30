import FirebaseHelper from 'Utils/FirebaseHelper'
import { apiAxiosInstance } from './ApiInstance'

export const login = async (email, password) => {
  const authUser = await FirebaseHelper.auth().signInWithEmailAndPassword(email, password)
  return authUser
}

export const logout = async () => {
  const authUser = FirebaseHelper.auth().signOut()
  return authUser
}

export const getUserProfile = async () => await apiAxiosInstance.get('/api/users/my_profile')

export default {
  login,
  logout,
  getUserProfile
}
