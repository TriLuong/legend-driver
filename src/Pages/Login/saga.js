import { put, call, takeLatest } from 'redux-saga/effects'
import { push } from 'connected-react-router'
import axios from 'axios'
import Api from 'Services/Network/Api'
import actions from 'Store/auth/actions'
import types from 'Store/auth/constanst'
import FirebaseHelper from 'Utils/FirebaseHelper'

function* loginSaga({ payload }) {
  try {
    const { email, password } = payload
    const res = yield call(Api.login, email, password)
    const token = yield FirebaseHelper.currentUserToken()
    const currentIdTokenResult = yield FirebaseHelper.getIdTokenResult()
    const role = currentIdTokenResult.claims.role
    axios.defaults.headers.common.Authorization = `Bearer ${token}`

    yield put(
      actions.loginSuccess({
        user: { uid: res.user.uid, role },
        token
      })
    )
    yield put(push('/'))
  } catch (error) {
    console.log(error)
    yield put(actions.loginFailure(error))
  }
}

export default function* loginWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga)
}
