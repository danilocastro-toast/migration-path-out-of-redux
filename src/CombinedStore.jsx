import React, { useCallback } from 'react'
import useFibonacciObservableState from './states/useFibonacciObservableState'
import useNumberObservableState from './states/useNumberObservableState'
import useRenderCount from './useRenderCount'
import InternalBlock from './InternalBlock'

export default function CombinedStore(props) {
  const fibonacci = useFibonacciObservableState()
  const number = useNumberObservableState()
  const count = useRenderCount()
  
  const state = { fibonacci: fibonacci.state, number: number.state }
  const { incrementCombined } = number.actions
  const { nextWithTimestamp } = fibonacci.actions
  const onClick = useCallback(
    /**
     * Both actions are wrapped with individual dispatches (each store slice)
     */
    () => incrementCombined(() => {
      nextWithTimestamp(3)
    }),
    [incrementCombined, nextWithTimestamp])

  return (
    <>
      <h1>JSON Store</h1>
      {count}
      <button type="button" onClick={onClick}>Increment Combined</button>
      <InternalBlock />
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>  
    </>
  )
}

