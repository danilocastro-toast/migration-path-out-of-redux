import { connect as connectReduxStore } from 'react-redux'
import { connect } from './react-store'
import DashboardStore from './DashboardStore'
import NumberContext from './NumberContext'
import FibonacciContext from './FibonacciContext'
import { actions as fibonacciActions } from './reducers/fibonacciReducer'
import { actions as numberActions } from './reducers/numberReducer'

function mapStateToProps(state, props) {
  return {
    redux: state,
    ...props
  }
}

const DashboardStoreReactConnectedToNumber = connect(NumberContext)(DashboardStore)
const DashboardStoreReactConnectedToNumberAndFibonacci = connect(FibonacciContext)(DashboardStoreReactConnectedToNumber)

const mapDispatchToProps = {
  ...fibonacciActions,
  ...numberActions
}

export default connectReduxStore(mapStateToProps, mapDispatchToProps)(DashboardStoreReactConnectedToNumberAndFibonacci)
