export const initialState = {
  number: 0,
  countCalls: 0
}

const constants = {
  DECREMENT: 'DECREMENT',
  INCREMENT: 'INCREMENT'
}

export const actions = {
  decrement: () => ({ type: constants.DECREMENT }),
  increment: () => ({ type: constants.INCREMENT })
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
