import { put, takeLatest } from 'redux-saga/effects'
import Api from 'Services/Network/Api'
import actions from 'Store/auth/actions'
import types from 'Store/auth/constanst'
import FirebaseHelper from 'Utils/FirebaseHelper'

function* loginSaga({ payload }) {
  try {
    const { email, password } = payload
    const res = Api.login(email, password)
    const token = yield FirebaseHelper.currentUserToken()
    yield put(
      actions.loginSuccess({
        user: res.user,
        token
      })
    )
  } catch (error) {
    yield put(actions.loginFailure(error))
  }
}

export default function* loginWatcher() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga)
}
