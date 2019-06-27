import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import GameCards from './components/GameCards';

import chevronLeft from './icons/chevron-left.svg';
import chevronRight from './icons/chevron-right.svg';

import './App.css';

function App() {
  return (
    <div id="app">
      <Navbar />
      <div id="content">
        <Dashboard />
        <GameCards />
      </div>
    </div>
  );
}

export default App;
