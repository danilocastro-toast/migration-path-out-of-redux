import { useMemo } from 'react'

const DEFAULT_MIDDLEWARES = []
const registeredMiddlewares = []

export default function useObservableStateActions(observable, reducer, mapDispatch, middlewares = DEFAULT_MIDDLEWARES) {
  return useMemo(() => {
    const actions = {}
    const baseDispatch = action => observable.set(state => reducer(state, action))
    const dispatch = applyMiddleware(observable, baseDispatch, middlewares)

    Object.keys(mapDispatch).forEach(actionName => {
      actions[actionName] = (...args) => dispatch(mapDispatch[actionName](...args))
    })

    return actions
  }, [mapDispatch, middlewares, observable, reducer])
}

function applyMiddleware(observable, dispatch, middlewares) {
  let nextDispatch = dispatch
  middlewares.forEach(({ middleware, onRegistered }) => {
    nextDispatch = middleware({ getState: observable.get, dispatch })(nextDispatch)
    if (!registeredMiddlewares.includes(middleware)) {
      registeredMiddlewares.push(middleware)
      onRegistered && onRegistered(middleware)
    }
  })

  return nextDispatch
}

