import { createContext } from 'react'

// default to mock store
export default createContext({ getState: {}, dispatch: () => false, __isDefault: true })
