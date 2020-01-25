import { useMemo } from 'react'

export default function useObservableStateActions(observable, reducer, mapDispatch) {
  return useMemo(() => {
    const actions = {}
    Object.keys(mapDispatch).forEach(actionName => {
      actions[actionName] = (...args) => {
        const actionArgs = mapDispatch[actionName](...args)
        observable.set(state => reducer(state, actionArgs))
      }
    })

    return actions
  }, [mapDispatch, observable, reducer])
}
