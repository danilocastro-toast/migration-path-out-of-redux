import { useMemo } from 'react'
import createSagaMiddleware from 'redux-saga'
import { ObservableState, useObservableState, useObservableStateActions } from '../observable-state'
import fibonacciReducer, { actions as mapDispatch, initialState } from '../reducers/fibonacciReducer'
import sagas from '../sagas'

const middlewares = [{
  middleware: createSagaMiddleware(),
  onRegistered: middleware => sagas.forEach(saga => middleware.run(saga))
}]

const observableState = ObservableState.create(initialState)

export default function useFibonacciObservableState() {
  const [state, setState] = useObservableState(observableState)
  const actions = useObservableStateActions(observableState, fibonacciReducer, mapDispatch, middlewares)

  return useMemo(
    () => ({
      state, setState, actions
    }),
    [state, setState, actions]
  )
}
