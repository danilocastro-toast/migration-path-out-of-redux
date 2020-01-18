export const initialState = {
  number: 0
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
  const { number } = state

  switch (type) {
    case constants.DECREMENT:
      return { number: number - 1 }
    case constants.INCREMENT:
      return { number: number + 1 }
    default:
      return state
  }
}
