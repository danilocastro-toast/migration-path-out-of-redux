import React, { useMemo } from 'react'
import useStoreData from './useStoreData'

function defaultMapState(state) {
  return state
}

const defaultDispatch = {}

export default function connect(context, mapStateToProps = defaultMapState, mapDispatchToProps = defaultDispatch) {
  return Component => function ConnectedComponent(props) {
    const [state, actions] = useStoreData(context, mapDispatchToProps)
    const stateToProps = useMemo(() => mapStateToProps(state, props), [props, state])
    return <Component {...props} {...stateToProps} {...actions} />
  }
}