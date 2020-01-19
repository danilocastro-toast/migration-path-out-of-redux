import { createSelector } from 'reselect'
import { connect } from './react-store'
import { actions as mapDispatchToProps } from './reducers/fibonacciReducer'
import FibonacciStore from './FibonacciStore'
import FibonacciContext from './FibonacciContext'

function getFibonacciTimestamps(state) {
  return state.fibonacciReducer.timestamps
}

const getLastUpdate = createSelector(
  getFibonacciTimestamps,
  timestamps => new Date(timestamps[timestamps.length - 1]).toLocaleString()
)


function mapStateToProps(state) {
  const { fibonacciReducer } = state
  const lastUpdate = getLastUpdate(state)
  return {
    ...fibonacciReducer,
    lastUpdate
  }
}

export default connect(FibonacciContext, mapStateToProps, mapDispatchToProps)(FibonacciStore)
