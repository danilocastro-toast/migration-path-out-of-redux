import { connect as connectReduxStore } from 'react-redux'
import { connect } from './react-store'
import DashboardStore from './DashboardStore'
import { actions as fibonacciActions } from './reducers/fibonacciReducer'
import { actions as numberActions } from './reducers/numberReducer'
import NumberContext from './NumberContext'
import FibonacciContext from './FibonacciContext'

function mapStateToProps(state, props) {
  return {
    redux: state,
    ...props
  }
}

const DashboardStoreReactConnectedToNumber = connect(NumberContext, state => state, numberActions)(DashboardStore)
const DashboardStoreReactConnectedToNumberAndFibonacci = connect(FibonacciContext, state => state, fibonacciActions)(DashboardStoreReactConnectedToNumber)

export default connectReduxStore(mapStateToProps)(DashboardStoreReactConnectedToNumberAndFibonacci)

