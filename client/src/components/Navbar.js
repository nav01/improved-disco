import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
import home from '../icons/home.svg';
import videoCam from '../icons/video-cam.svg';
import help from '../icons/help.svg';
import rewind from '../icons/rewind.svg';

function Navbar (props) {
  return (
    <ul className="navbar">
      <li className="logo">
        <div>
          <img id="rewind" src={rewind} />
          <span><span id="e3-e">E</span><span id="e3-3">3</span>RECAP</span>
        </div>
      </li>
      <li className="navItemLarge">Home</li>
      <li className="navItemLarge">Watch</li>
      <li className="navItemLarge">About</li>
      <li className="navItemLarge">Social</li>
      <li className="navItemSmall"><img src={home} /></li>
      <li className="navItemSmall"><img src={videoCam} /></li>
      <li className="navItemSmall"><img src={help} /></li>
    </ul>
  );
}

export default Navbar;
