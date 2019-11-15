import { put, call, takeLatest } from 'redux-saga/effects'
import Api from 'Services/Network/Api'
import actions from 'Store/loads/actions'
import types from 'Store/loads/constants'
import { loaderStart, loaderEnd } from 'Store/loader/actions'
import Toast from 'Components/Toast'

function* getLoadsSaga({ payload }) {
  try {
    yield put(loaderStart())
    const res = yield call(Api.getLoads, { params: payload })
    yield put(actions.getLoadsSuccess(res.data))
    yield put(loaderEnd())
  } catch (error) {
    yield put(loaderEnd())
    Toast.showError(error.message)
    yield put(actions.getLoadsFailure(error))
  }
}

export default function* loginWatcher() {
  yield takeLatest(types.GET_LOADS_REQUEST, getLoadsSaga)
}
