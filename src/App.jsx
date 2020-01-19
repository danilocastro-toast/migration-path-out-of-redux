import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import DashboardStore from './DashboardStoreConnected';
import setupMirage from './setupMirage';
import store from './store';
import useStoreProvider from './react-store/useStoreProvider';
import FibonacciContext from './FibonacciContext';
import fibonacciReducer, { initialState as initialStateFibonacci, actions as fibonacci } from './reducers/fibonacciReducer'
import NumberContext from './NumberContext';
import numberReducer, { initialState as initialStateNumber, actions as number } from './reducers/numberReducer'

import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'

function wrap(store, actions) {
  const wrapped = {}
  Object.keys(actions).forEach(key => {
    wrapped[key] = (...args) => store.dispatch(actions[key](...args))
  })

  return wrapped
}

window.actions = { fibonacci:  wrap(store, fibonacci), number:  wrap(store, number) }

setupMirage()

// const sagaMiddleware = createSagaMiddleware()

// const middlewares = [sagaMiddleware]


// function App() {
//   const NumberStoreProvider = useStoreProvider(NumberContext, 'numberReducer', numberReducer, initialStateNumber)
//   const FibonacciStoreProvider = useStoreProvider(FibonacciContext, 'fibonacciReducer', fibonacciReducer, initialStateFibonacci, middlewares)

//   useEffect(() => {
//     sagas.forEach(saga => {
//       sagaMiddleware.run(saga)
//     })
//   }, [])

const sagaMiddlewareFibonacci = [createSagaMiddleware()]
const sagaMiddlewareNumber = [createSagaMiddleware()]

function App() {
  const NumberStoreProvider = useStoreProvider(NumberContext, 'numberReducer', numberReducer, initialStateNumber, sagaMiddlewareNumber)
  const FibonacciStoreProvider = useStoreProvider(FibonacciContext, 'fibonacciReducer', fibonacciReducer, initialStateFibonacci, sagaMiddlewareFibonacci)

  useEffect(() => {
    sagas.forEach(saga => {
      [
        ...sagaMiddlewareFibonacci,
        ...sagaMiddlewareNumber
      ].forEach(middleware => {
        middleware.run(saga)
      })
    })
  }, [])
  return (
    <Provider store={store}>
      <FibonacciStoreProvider>
        <NumberStoreProvider>
          <DashboardStore />
        </NumberStoreProvider>
      </FibonacciStoreProvider>
    </Provider>
  );
}

export default App;

