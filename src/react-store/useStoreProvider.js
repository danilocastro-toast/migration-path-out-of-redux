import React, { useMemo, useReducer } from 'react'

export default function useStoreProvider(context, sliceName, reducer, initialState) {
  const { Provider } = context
  return useMemo(() => function StoreProvider(props) {
    // [state, dispatch]
    const [state, dispatch] = useReducer(reducer, initialState)
    const store = useMemo(() => ({
      getState: () => ({ [sliceName]: state }),
      dispatch
    }), [state, dispatch])

    return (
      <Provider value={store}>
        {props.children}
      </Provider>
    )
  }, [initialState, reducer, sliceName])
}