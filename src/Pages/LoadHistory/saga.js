import { put, call, takeLatest } from 'redux-saga/effects'
import Api from 'Services/Network/Api'
import actions from 'Store/loads/actions'
import types from 'Store/loads/constants'
import { loaderStart, loaderEnd } from 'Store/loader/actions'

function* getLoadsSaga({ payload }) {
  try {
    yield put(loaderStart())
    const res = yield call(Api.getLoads, payload)
    yield put(actions.getLoadsSuccess(res.data))
    yield put(loaderEnd())
  } catch (error) {
    console.log(error)
    yield put(loaderEnd())
    alert(error)
    yield put(actions.getLoadsFailure(error))
  }
}

function* getLoadByIdSaga({ payload }) {
  try {
    yield put(loaderStart())
    const res = yield call(Api.getLoadById, payload)
    yield put(actions.getLoadByIdSuccess(res.data))
    yield put(loaderEnd())
  } catch (error) {
    console.log(error)
    yield put(loaderEnd())
    alert(error)
    yield put(actions.getLoadByIdFailure(error))
  }
}

export default function* loginWatcher() {
  yield takeLatest(types.GET_LOADS_REQUEST, getLoadsSaga)
  yield takeLatest(types.GET_LOAD_BY_ID_REQUEST, getLoadByIdSaga)
}
