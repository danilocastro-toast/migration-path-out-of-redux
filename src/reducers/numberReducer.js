export const initialState = {
  number: 0,
  countCalls: 0
}

export const constants = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT',
  INCREMENT_COMBINED: 'INCREMENT_COMBINED'
}

export const actions = {
  decrement: () => ({ type: constants.DECREMENT }),
  increment: () => ({ type: constants.INCREMENT }),
  incrementCombined: steps => ({
    type: constants.INCREMENT_COMBINED,
    payload: { steps, increment: actions.increment }
  })
}

export default function numberReducer(state = initialState, action) {
  const { type } = action
  const { number, countCalls } = state

  switch (type) {
    case constants.DECREMENT:
      return { number: number - 1, countCalls: countCalls + 1 }
    case constants.INCREMENT:
      return { number: number + 1, countCalls: countCalls + 1 }
    default:
      return { ...state, countCalls: countCalls + 1 }
  }
}
