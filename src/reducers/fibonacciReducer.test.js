import fibonacciReducer, { actions, initialState } from './fibonacciReducer'

const NOW = Date.now()

describe('fibonacciReducer', () => {
  test('if fibonacciReducer returns current state when steps are not greater than 0', () => {
    const state = fibonacciReducer(undefined, actions.next({ steps: 0, timestamp: NOW }))

    expect(state).toEqual({
      ...initialState,
      countCalls: 1
    })
  })

  test('if fibonacciReducer get next when omitting the steps for initial state', () => {
    const state = fibonacciReducer(undefined, actions.next())

    expect(state.serie).toEqual([...initialState.serie, 1])
    expect(state.timestamps).toHaveLength(state.serie.length)
    expect(state.countCalls).toEqual(1)
  })

  test('if fibonacciReducer get next when omitting the steps for existing state', () => {
    const currentState = { serie: [0, 1, 1, 2, 3], timestamps: [NOW, NOW, NOW, NOW, NOW], countCalls: 2 }
    const state = fibonacciReducer(currentState, actions.next())

    expect(state.serie).toEqual([...currentState.serie, 5])
    expect(state.timestamps).toHaveLength(state.serie.length)
    expect(state.countCalls).toEqual(3)
  })

  test('if fibonacciReducer get next N steps for initial state', () => {
    const state = fibonacciReducer(undefined, actions.next({ steps: 3, timestamp: NOW }))

    expect(state.serie).toEqual([...initialState.serie, 1, 2, 3])
    expect(state.timestamps).toHaveLength(state.serie.length)
    expect(state.countCalls).toEqual(1)
  })

  test('if fibonacciReducer get next N steps for existing state', () => {
    const currentState = { serie: [0, 1, 1, 2, 3], timestamps: [NOW, NOW, NOW, NOW, NOW], countCalls: 2 }
    const state = fibonacciReducer(currentState, actions.next({ steps: 6, timestamp: NOW }))

    expect(state.serie).toEqual([...currentState.serie, 5, 8, 13, 21, 34, 55])
    expect(state.timestamps).toHaveLength(state.serie.length)
    expect(state.countCalls).toEqual(3)
  })
})
