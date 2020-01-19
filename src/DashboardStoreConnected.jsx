import { connect as connectReduxStore } from 'react-redux'
import { connect } from './react-store'
import DashboardStore from './DashboardStore'
import NumberContext from './NumberContext'
import FibonacciContext from './FibonacciContext'

function mapStateToProps(state, props) {
  return {
    redux: state,
    ...props
  }
}

const DashboardStoreReactConnectedToNumber = connect(NumberContext)(DashboardStore)
const DashboardStoreReactConnectedToNumberAndFibonacci = connect(FibonacciContext)(DashboardStoreReactConnectedToNumber)

export default connectReduxStore(mapStateToProps)(DashboardStoreReactConnectedToNumberAndFibonacci)
