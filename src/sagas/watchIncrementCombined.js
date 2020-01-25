import { call, put, takeEvery } from 'redux-saga/effects'
import { constants } from '../reducers/numberReducer'

function* incrementCombined(action) {
  const { payload } = action
  const { increment, onComplete } = payload

  yield put(increment())
  yield call(onComplete)
}

export default function* watchIncrementCombined() {
  yield takeEvery(constants.INCREMENT_COMBINED, incrementCombined)
}
