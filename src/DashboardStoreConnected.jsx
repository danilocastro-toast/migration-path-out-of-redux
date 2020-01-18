import { connect } from 'react-redux'
import DashboardStore from './DashboardStore'
import { actions as fibonacciActions } from './reducers/fibonacciReducer'
import { actions as numberActions } from './reducers/numberReducer'

function mapStateToProps(state, props) {
  return {
    ...state,
    ...props
  }
}

const mapDispatchToProps = {
  ...fibonacciActions,
  ...numberActions
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStore)
