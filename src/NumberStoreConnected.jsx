import { createSelector } from 'reselect'
import { connect } from './react-store'
import NumberContext from './NumberContext'
import NumberStore from './NumberStore'
import { actions as mapDispatchToProps } from './reducers/numberReducer'

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

export default connect(NumberContext, mapStateToProps, mapDispatchToProps)(NumberStore)
