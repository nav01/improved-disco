import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import GameCards from './components/GameCards';
import {Provider} from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store} id="app">
      <Navbar />
      <div id="content">
        <Dashboard />
        <GameCards />
      </div>
    </Provider>
  );
}

export default App;
