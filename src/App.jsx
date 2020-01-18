import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import DashboardStore from './DashboardStoreConnected';
import setupMirage from './setupMirage';
import store from './store';

setupMirage()

function App() {
  return (
    <Provider store={store}>
      <DashboardStore />
    </Provider>
  );
}

export default App;
