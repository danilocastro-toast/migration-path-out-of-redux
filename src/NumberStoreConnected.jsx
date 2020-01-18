import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { actions as mapDispatchToProps } from './reducers/numberReducer'
import NumberStore from './NumberStore'

function getNumber(state) {
  return state.numberReducer.number
}

const guessPredictions = createSelector(
  getNumber,
  number => [number - 1, number, number + 1]
)

function mapStateToProps(state) {
  const [previous, current, next] = guessPredictions(state)
  return {
    previous,
    current,
    next
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumberStore)
