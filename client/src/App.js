import React from 'react';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Watch from './components/Watch';
import About from './components/About';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import store from './store';

import './App.css';

function App() {
  return (
    <Provider store={store} id="app">
      <Router>
        <Navbar />
        <Route path='/' exact component={MainContent} />
        <Route path='/watch' component={Watch} />
        <Route path='/about' component={About} />
      </Router>

    </Provider>
  );
}

export default App;
