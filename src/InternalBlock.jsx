import React, { useCallback } from 'react'
import styled from 'styled-components'
import useNumberObservableState from './states/useNumberObservableState'
import useRenderCount from './useRenderCount'

const InternalBlockLayout = styled.div`
  box-sizing: border-box;
  border: 2px solid green;
`

export default function InternalBlock() {
  const { state, actions } = useNumberObservableState()
  const { incrementCombined } = actions
  const onClick = useCallback(
    /**
     * Both actions are wrapped with individual dispatches (each store slice)
     */
    () => incrementCombined(() => {
      alert('Look at the rendering count')
    }),
    [incrementCombined])

  const count = useRenderCount()

  return <InternalBlockLayout>
    <button type="button" onClick={onClick}>Increment Combined Observable</button>
    <div>Number observable is: {state.number}</div>
    {count}
  </InternalBlockLayout>
}
