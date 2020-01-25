import React, { useEffect, useMemo, useReducer, useRef, useCallback } from 'react'

const defaultMiddlewares = []

function applyMiddleware(store, middlewares) {
  middlewares = middlewares.slice().concat(() => () => action => store.dispatch(action))
  middlewares.reverse()
  let dispatch = store.dispatch
  middlewares.forEach(middleware => {
    dispatch = middleware(store)(dispatch)
  })
  return Object.assign({}, store, { dispatch })
}

export default function useStoreProvider(context, sliceName, reducer, initialState, middlewares = defaultMiddlewares) {
  const { Provider } = context
  return useMemo(() => function StoreProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const stateRef = useRef(state)
    const getState = useCallback(() => stateRef.current, [])
    useEffect(() => {
      stateRef.current = state
    }, [state])

    const { dispatch: proxyDispatch } = useMemo(
      () => applyMiddleware({ getState, dispatch }, middlewares), [getState])
    const store = useMemo(() => ({
      getState: () => ({ [sliceName]: state }),
      dispatch: proxyDispatch
    }), [proxyDispatch, state])

    return (
      <Provider value={store}>
        {props.children}
      </Provider>
    )
  }, [initialState, middlewares, reducer, sliceName])
}