import { put, call, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import ApiInstance from 'Services/Network/ApiInstance'
import Api from 'Services/Network/Api'
import actions from 'Store/auth/actions'
import types from 'Store/auth/constanst'
import FirebaseHelper from 'Utils/FirebaseHelper'
import { loaderStart, loaderEnd } from 'Store/loader/actions'

function* loginSaga({ payload }) {
  try {
    yield put(loaderStart())
    const { email, password } = payload
    const res = yield call(Api.login, email, password)
    const token = yield FirebaseHelper.currentUserToken()
    const currentIdTokenResult = yield FirebaseHelper.getIdTokenResult()
    const role = currentIdTokenResult.claims.role
    if (role === 'Driver') {
      ApiInstance.defaults.headers.common.Authorization = `Bearer ${token}`
      yield put(actions.loginSuccess(token))
      yield put(loaderEnd())
      yield put(push('/driver'))
    } else {
      throw new Error('Not Driver')
    }
  } catch (error) {
    console.log(error)
    yield put(loaderEnd())
    alert(error)
    yield put(actions.loginFailure(error))
  }
}

function* logoutSaga() {
  try {
    console.log('LOGOUT')
    ApiInstance.defaults.headers.common.Authorization = ''
    yield put(push('/login'))
    yield put(loaderStart())
    yield call(Api.logout)
    yield put(loaderEnd())
    yield put(push('/login'))
  } catch (error) {
    yield put(loaderEnd())
    alert(error)
  }
}

export default function* loginWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga)
  yield takeLatest(types.LOGOUT_REQUEST, logoutSaga)
}
