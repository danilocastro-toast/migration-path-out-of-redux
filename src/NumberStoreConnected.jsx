import React, { useMemo } from 'react'
import { createSelector } from 'reselect'
import NumberStore from './NumberStore'
import useNumberObservableState from './states/useNumberObservableState'

function getNumber(state) {
  return state.numberReducer.number
}

const guessPredictions = createSelector(
  getNumber,
  number => [number - 1, number, number + 1]
)

export function useNumberStoreConnected() {
  const { state, actions } = useNumberObservableState()
  return useMemo(() => {
    const [previous, current, next] = guessPredictions({ numberReducer: state })

    return [
      {
        ...state,
        previous,
        current,
        next
      },
      actions
    ]
  }, [actions, state])
}

export default function NumberStoreConnected() {
  const [state, actions] = useNumberStoreConnected()

  return (
    <NumberStore
      {...state}
      {...actions}
    />
  )
}
