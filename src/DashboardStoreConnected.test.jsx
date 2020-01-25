import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DashboardStoreConnected from './DashboardStoreConnected'
import NumberContext from './NumberContext'
import FibonacciContext from './FibonacciContext'
import { initialState as initialStateFibonacci } from './reducers/fibonacciReducer'
import { actions as actionsNumber } from './reducers/numberReducer'
import setupMirage from './setupMirage'

describe('DashboardStoreConnected', () => {
  beforeEach(() => {
    setupMirage()
  })

  test('if DashboardStoreConnected renders combined store data', () => {
    const numberReducer = {
      number: 3,
      countCalls: 3
    }
    const fibonacciReducer = initialStateFibonacci
    const dispatchNumber = jest.fn()
    const dispatchFibonacci = jest.fn()
    const numberStore = { getState: () => ({ numberReducer }), dispatch: dispatchNumber }
    const fibonacciStore = { getState: () => ({ fibonacciReducer }), dispatch: dispatchFibonacci }
    const wrapper = render(
      <NumberContext.Provider value={numberStore}>
        <FibonacciContext.Provider value={fibonacciStore}>
          <DashboardStoreConnected />
        </FibonacciContext.Provider>
      </NumberContext.Provider>
    )

    const store = wrapper.container.querySelector('pre')
    expect(store.textContent).toEqual(`
{
  "fibonacciReducer": {
    "serie": [
      0,
      1
    ],
    "timestamps": [
      ${initialStateFibonacci.timestamps[0]},
      ${initialStateFibonacci.timestamps[1]}
    ],
    "countCalls": 0
  },
  "numberReducer": {
    "number": 3,
    "countCalls": 3
  }
}
    `.trim())
  })

  test('if DashboardStoreConnected dipatches combined actions', async () => {
    jest.useFakeTimers()
    const numberReducer = {
      number: 3,
      countCalls: 3
    }
    const fibonacciReducer = initialStateFibonacci
    const dispatchNumber = jest.fn(() => Promise.resolve())
    const dispatchFibonacci = jest.fn()
    const numberStore = { getState: () => ({ numberReducer }), dispatch: dispatchNumber }
    const fibonacciStore = { getState: () => ({ fibonacciReducer }), dispatch: dispatchFibonacci }
    const wrapper = render(
      <NumberContext.Provider value={numberStore}>
        <FibonacciContext.Provider value={fibonacciStore}>
          <DashboardStoreConnected />
        </FibonacciContext.Provider>
      </NumberContext.Provider>
    )

    const button = await wrapper.getByTestId('combined-action')
    fireEvent.click(button)

    jest.advanceTimersByTime(1000)

    expect(dispatchNumber.mock.calls).toEqual([[
      {
        type: 'INCREMENT_COMBINED',
        payload: { increment: actionsNumber.increment, onComplete: expect.any(Function) }
      }
    ]])
  })
})
