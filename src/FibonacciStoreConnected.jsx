import React, { useMemo } from 'react'
import { createSelector } from 'reselect'
import FibonacciStore from './FibonacciStore'
import useFibonacciObservableState from './states/useFibonacciObservableState'

function getFibonacciTimestamps(state) {
  return state.fibonacciReducer.timestamps
}

const getLastUpdate = createSelector(
  getFibonacciTimestamps,
  timestamps => new Date(timestamps[timestamps.length - 1]).toLocaleString()
)

export function useFibonacciStoreConnected() {
  const { state, actions } = useFibonacciObservableState()
  return useMemo(() => {
    const lastUpdate = getLastUpdate({ fibonacciReducer: state})

    return [
      {
        ...state,
        lastUpdate
      },
      actions
    ]
  }, [actions, state])
}

export default function FibonacciStoreConnected() {
  const [state, actions] = useFibonacciStoreConnected()

  return (
    <FibonacciStore
      {...state}
      {...actions}
    />
  )
}
