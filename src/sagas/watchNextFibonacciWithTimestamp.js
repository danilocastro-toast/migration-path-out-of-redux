import { call, put, takeLatest } from 'redux-saga/effects'
import { constants } from '../reducers/fibonacciReducer'

function* json(response) {
  try {
    return yield response.json()
  } catch {
    return yield null
  }
}

function* nextFibonacciWithTimestamp(action) {
  const { payload } = action
  const { next, steps } = payload

  const response = yield fetch(`${window.location.origin}/api/timestamp`)
  const data = yield call(json, response)
  if (response.ok) {
    const { timestamp } = data
    yield put(next({ steps, timestamp }))
  }
}

export default function* watchNextFibonacciWithTimestamp() {
  yield takeLatest(constants.NEXT_WITH_TIMESTAMP, nextFibonacciWithTimestamp)
}
