import { connect as connectReduxStore } from 'react-redux'
import { connect } from './react-store'
import DashboardStore from './DashboardStore'
import { actions as fibonacciActions } from './reducers/fibonacciReducer'
import { actions as numberActions } from './reducers/numberReducer'
import NumberContext from './NumberContext'

function mapStateToProps(state, props) {
  return {
    redux: state,
    ...props
  }
}

const mapDispatchToProps = {
  ...fibonacciActions,
  ...numberActions
}

const DashboardStoreReactConnected = connect(NumberContext)(DashboardStore)

export default connectReduxStore(mapStateToProps, mapDispatchToProps)(DashboardStoreReactConnected)
