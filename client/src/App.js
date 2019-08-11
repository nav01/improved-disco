import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import GameCards from './components/GameCards';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';

import './App.css';

const initialState = {
  sortOption: 1, //REVISIT, SHOULD BE SORT ENUM
  currentPage: 1,
  filters: [],
  searchFilter: '',
}

const store = createStore(reducer, initialState);

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
