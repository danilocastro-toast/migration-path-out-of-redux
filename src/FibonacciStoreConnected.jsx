import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { actions as mapDispatchToProps } from './reducers/fibonacciReducer'
import FibonacciStore from './FibonacciStore'

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

export default connect(mapStateToProps, mapDispatchToProps)(FibonacciStore)
