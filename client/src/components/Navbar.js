import React from 'react';
import {Link} from 'react-router-dom';

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
      <li id="logo-container">
        <Link to='/' style={{textDecoration: 'none'}}>
          <span id="logo">
            <span id="nav-rewind-icon"><RewindIcon color="#FFFFFF" htmlClass={"nav-icon"}/></span>
            <span>
              <span id="e3-e">E</span>
              <span id="e3-3">3</span>
              <span id="e3-recap">RECAP</span>
            </span>
          </span>
        </Link>
      </li>
      <li className="nav-item-large">
        <Link to='/' className={"nav-item-text"} style={{textDecoration: 'none'}}>Home</Link>
      </li>
      <li className="nav-item-large">
        <Link to='/watch' className={"nav-item-text"} style={{textDecoration: 'none'}}>Watch</Link>
      </li>
      <li className="nav-item-large">
        <Link to='/about' className={"nav-item-text"} style={{textDecoration: 'none'}}>About</Link>
      </li>
      <li className="nav-item-small">
        <Link to='/'><HomeIcon /></Link>
      </li>
      <li className="nav-item-small">
        <Link to='/watch'><VideoCameraIcon /></Link>
      </li>
      <li className="nav-item-small">
        <Link to='/about'><HelpIcon /></Link>
      </li>
    </ul>
  );
}

export default Navbar;
