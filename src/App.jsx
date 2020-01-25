import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import DashboardStore from './DashboardStoreConnected';
import setupMirage from './setupMirage';
import store from './store';
import useStoreProvider from './react-store/useStoreProvider';
import NumberContext from './NumberContext';
import numberReducer, { initialState as initialStateNumber } from './reducers/numberReducer'

setupMirage()

function App() {
  const NumberStoreProvider = useStoreProvider(NumberContext, 'numberReducer', numberReducer, initialStateNumber)
  return (
    <Provider store={store}>
      <NumberStoreProvider>
        <DashboardStore />
      </NumberStoreProvider>
    </Provider>
  );
}

export default App;
