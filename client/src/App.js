import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import {Provider} from 'react-redux';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store} id="app">
      <Navbar />
      <MainContent />
    </Provider>
  );
}

export default App;
