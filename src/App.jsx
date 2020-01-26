import React from 'react';
import './App.css';
import setupMirage from './setupMirage';
import DashboardStore from './DashboardStore';

setupMirage()

function App() {
  return (<DashboardStore />);
}

export default App;

