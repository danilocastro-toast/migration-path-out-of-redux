import { useContext, useReducer } from 'react'

export default function useReducerContext(context, reducer, initialState) {
  const data = useContext(context)
  const store = useReducer(reducer, initialState)

  return data && data[1] ? data : store
}
