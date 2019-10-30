import firebase from 'firebase'
import 'firebase/database'

const FIREBASE_APP_CONFIG = {
  apiKey: 'AIzaSyAriyxl_5ljHRrDIycNKy9pbO0oPLiTRLc',
  authDomain: 'legend-staging.firebaseapp.com',
  databaseURL: 'https://legend-staging.firebaseio.com',
  projectId: 'legend-staging',
  storageBucket: 'legend-staging.appspot.com',
  messagingSenderId: '140136399797',
  appId: '1:140136399797:web:6c625dcc54e44711ec0ffc'
}

function init() {
  firebase.initializeApp(FIREBASE_APP_CONFIG)
  firebase.database()
}

const auth = () => firebase.auth()
const currentUserToken = () => firebase.auth().currentUser.getIdToken()
const getIdTokenResult = () => firebase.auth().currentUser.getIdTokenResult()

export default {
  init,
  auth,
  currentUserToken,
  getIdTokenResult
}
