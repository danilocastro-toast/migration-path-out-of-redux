import { connect } from 'react-redux'
import DashboardStore from './DashboardStore'

function mapStateToProps(state, props) {
  return {
    ...state,
    ...props
  }
}

export default connect(mapStateToProps)(DashboardStore)
