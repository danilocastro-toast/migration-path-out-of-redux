export const initialState = {
  serie: [0, 1],
  timestamps: [Date.now(), Date.now()],
  countCalls: 0
}

export const constants = {
  NEXT: 'NEXT',
  NEXT_WITH_TIMESTAMP: 'NEXT_WITH_TIMESTAMP'
}

export const actions = {
  next: ({ steps = 1, timestamp = Date.now() } = {}) => ({ type: constants.NEXT, payload: { steps, timestamp } }),
  nextWithTimestamp: (steps = 1) => ({ type: constants.NEXT_WITH_TIMESTAMP, payload: { steps, next: actions.next } })
}

actions.nextWithTimestamp.isSaga = true

function nextFib(serie) {
  const lastIndex = serie.length - 1
  return serie[lastIndex] + serie[lastIndex - 1]
}

export default function numberReducer(state = initialState, action) {
  const { type, payload } = action
  
  switch (type) {
    case constants.NEXT:
      const { serie: baseSerie, timestamps: baseTimestamps, countCalls } = state
      let { steps } = payload
      const { timestamp } = payload
      
      if (steps < 1) {
        return { ...state, countCalls: countCalls + 1 }
      }

      const serie = [...baseSerie]
      const timestamps = [...baseTimestamps]
      while (steps > 0) {
        serie.push(nextFib(serie))
        timestamps.push(timestamp)
        steps -= 1
      }

      return { serie, timestamps, countCalls: countCalls + 1 }
    default:
      return { ...state, countCalls: state.countCalls + 1 }
  }
}
