import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar';
import Tools from './components/Tools';

import visibility from './icons/visibility.svg';
import visibilityOff from './icons/visibility-off.svg';
import chevronLeft from './icons/chevron-left.svg';
import chevronRight from './icons/chevron-right.svg';

import './App.css';

function App() {
  return (
    <div id="app">
      <Navbar />
      <div id="content">
        <Tools />
        <div id="announcement-cards">
          <div className="announcement-card">
            <p className="game-title game-text">Granblue Fantasy: Versus</p>
            <img className="announcement-image" src="https://e3recap2019.b-cdn.net/images/game-cards/jf1WY1RPhJg.jpg" />
            <div className="img-before"></div>
            <img className="visibility-off" src={visibilityOff} />
          </div>
          <div className="announcement-card">
            <div className="game-text">
              <p className="game-title">Phantom Brigade</p>
              <p className="exclusive">&#9733; EXCLUSIVE</p>
            </div>
            <img className="announcement-image" src="https://e3recap2019.b-cdn.net/images/game-cards/ul7BQeFbsp4.jpg" />
            <div className="img-before"></div>
            <img className="visibility-off" src={visibilityOff} />
          </div>
          <div className="announcement-card">
            <p className="game-title game-text">BurgerTime Party!</p>
            <img className="announcement-image" src="https://e3recap2019.b-cdn.net/images/game-cards/iLyH4DgTYyM.jpg" />
            <div className="img-before"></div>
            <img className="visibility-off" src={visibilityOff} />
          </div>
          <div className="announcement-card">
            <p className="game-title game-text">Granblue Fantasy: Versus</p>
            <img className="announcement-image" src="https://e3recap2019.b-cdn.net/images/game-cards/jf1WY1RPhJg.jpg" />
            <div className="img-before"></div>
            <img className="visibility-off" src={visibilityOff} />
          </div>
        </div>
      </div>
      <div id="announcements-nav">
        <a id="nav-left" href="#"><img className="nav-chevron" src={chevronLeft} /></a>
        <a className="nav-page-num" href="#">1</a>
        <a className="nav-page-num" href="#">2</a>
        <a className="nav-page-num" href="#">3</a>
        <a className="nav-page-num" href="#">4</a>
        <a className="nav-page-num" href="#">5</a>
        <a className="nav-page-num" href="#">6</a>
        <a className="nav-page-num" href="#">7</a>
        <a id="nav-right" href="#"><img className="nav-chevron" src={chevronRight} /></a>
      </div>
    </div>
  );
}

export default App;
