import numberReducer, { actions } from './numberReducer'

describe('numberReducer', () => {
  test('if numberReducer increments initial state', () => {
    const state = numberReducer(undefined, actions.increment())

    expect(state).toEqual({
      number: 1,
      countCalls: 1
    })
  })

  test('if numberReducer decrements initial state', () => {
    const state = numberReducer(undefined, actions.decrement())

    expect(state).toEqual({
      number: -1,
      countCalls: 1
    })
  })

  test('if numberReducer increments a current state', () => {
    const currentState = { number: 55, countCalls: 3 }
    const state = numberReducer(currentState, actions.increment())

    expect(state).toEqual({
      number: 56,
      countCalls: 4
    })
  })

  test('if numberReducer decrements a current state', () => {
    const currentState = { number: 55, countCalls: 3 }
    const state = numberReducer(currentState, actions.decrement())

    expect(state).toEqual({
      number: 54,
      countCalls: 4
    })
  })
})
