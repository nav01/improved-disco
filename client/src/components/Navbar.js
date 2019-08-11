import React from 'react';

import './navbar.css'
import {
  HomeIcon,
  VideoCameraIcon,
  HelpIcon,
  RewindIcon,
} from './icons';

function Navbar (props) {
  return (
    <ul className="navbar">
      <li className="logo">
        <div>
          <RewindIcon />
          <span><span id="e3-e">E</span><span id="e3-3">3</span>RECAP</span>
        </div>
      </li>
      <li className="navItemLarge">Home</li>
      <li className="navItemLarge">Watch</li>
      <li className="navItemLarge">About</li>
      <li className="navItemLarge">Social</li>
      <li className="navItemSmall"><HomeIcon /></li>
      <li className="navItemSmall"><VideoCameraIcon /></li>
      <li className="navItemSmall"><HelpIcon /></li>
    </ul>
  );
}

export default Navbar;
