// import { put, takeEvery } from 'redux-saga/effects'
// import { constants } from '../reducers/numberReducer'
// import { actions as fibonacciActions } from '../reducers/fibonacciReducer'

// function* incrementCombined(action) {
//   const { payload } = action
//   const { steps, increment } = payload
  
//   yield put(increment())
//   yield put(fibonacciActions.nextWithTimestamp(steps))
// }

// export default function* watchIncrementCombined() {
//   yield takeEvery(constants.INCREMENT_COMBINED, incrementCombined)
// }

import { put, takeEvery } from 'redux-saga/effects'
import { constants } from '../reducers/numberReducer'

function* incrementCombined(action) {
  const { payload } = action
  const { increment, onComplete } = payload
  
  console.log({ onComplete })

  yield put(increment())
  onComplete()
}

export default function* watchIncrementCombined() {
  yield takeEvery(constants.INCREMENT_COMBINED, incrementCombined)
}
