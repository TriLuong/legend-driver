import { put, call, takeLatest } from 'redux-saga/effects'
import Api from 'Services/Network/Api'
import actions from 'Store/loadById/actions'
import types from 'Store/loadById/constants'
import { loaderStart, loaderEnd } from 'Store/loader/actions'
import Toast from 'Components/Toast'

function* getLoadByIdSaga({ payload }) {
  try {
    yield put(loaderStart())
    const res = yield call(Api.getLoadById, payload)
    yield put(actions.getLoadByIdSuccess(res))
    yield put(loaderEnd())
  } catch (error) {
    yield put(loaderEnd())
    Toast.showError(error.message)
    yield put(actions.getLoadByIdFailure(error))
  }
}

export default function* loginWatcher() {
  yield takeLatest(types.GET_LOAD_BY_ID_REQUEST, getLoadByIdSaga)
}
