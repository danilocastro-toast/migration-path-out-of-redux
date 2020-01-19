import { connect as connectReduxStore } from 'react-redux'
import { connect } from './react-store'
import DashboardStore from './DashboardStore'
import NumberContext from './NumberContext'

function mapStateToProps(state, props) {
  return {
    redux: state,
    ...props
  }
}

const DashboardStoreReactConnected = connect(NumberContext)(DashboardStore)

export default connectReduxStore(mapStateToProps)(DashboardStoreReactConnected)
