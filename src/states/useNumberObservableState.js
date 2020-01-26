import { useMemo } from 'react'
import createSagaMiddleware from 'redux-saga'
import { ObservableState, useObservableState, useObservableStateActions } from '../observable-state'
import numberReducer, { actions as mapDispatch, initialState } from '../reducers/numberReducer'
import sagas from '../sagas'

const middlewares = [{
  middleware: createSagaMiddleware(),
  onRegistered: middleware => sagas.forEach(saga => middleware.run(saga))
}]

const observableState = ObservableState.create(initialState)

export default function useNumberObservableState() {
  const [state, setState] = useObservableState(observableState)
  const actions = useObservableStateActions(observableState, numberReducer, mapDispatch, middlewares)

  return useMemo(
    () => ({
      state, setState, actions
    }),
    [state, setState, actions]
  )
}
