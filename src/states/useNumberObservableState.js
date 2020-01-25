import { useMemo } from 'react'
import { ObservableState, useObservableState, useObservableStateActions } from '../observable-state'
import numberReducer, { actions as mapDispatch, initialState } from '../reducers/numberReducer'

const observableState = ObservableState.create(initialState)

export default function useNumberObservableState() {
  const [state, setState] = useObservableState(observableState)
  const actions = useObservableStateActions(observableState, numberReducer, mapDispatch)

  return useMemo(
    () => ({
      state, setState, actions
    }),
    [state, setState, actions]
  )
}
