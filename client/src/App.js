import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import GameCards from './components/GameCards';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {UPDATE_FILTERS, SEARCH, UPDATE_PAGE} from './actions';

import chevronLeft from './icons/chevron-left.svg';
import chevronRight from './icons/chevron-right.svg';

import './App.css';

function reducer (state = {}, action) {
  switch (action.type) {
    case SEARCH:
      return {searchFilter: action.payload, currentPage: 1};
    case UPDATE_FILTERS:
      return {currentPage: 1};
    case UPDATE_PAGE:
      return {currentPage: action.payload};
    default:
      return state;
  }
}

const store = createStore(reducer, {currentPage: 1});

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
