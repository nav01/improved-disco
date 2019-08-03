import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import GameCards from './components/GameCards';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer';

import chevronLeft from './icons/chevron-left.svg';
import chevronRight from './icons/chevron-right.svg';

import './App.css';

const initialState = {
  currentPage: 1,
  filtersInternal: [],
  searchFilter: '',
  filterGames: (games) => games,
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
