import React from 'react';
import './tools.css';

import downArrow from '../icons/down-arrow.svg';
import rightArrow from '../icons/forward-arrow.svg';
import search from '../icons/search.svg';
import legend from '../icons/legend.svg';
import sort from '../icons/sort.svg';
import filter from '../icons/filter.svg';
import reset from '../icons/reset.svg';

function Tools () {
  return (
    <div className="tools">
      <div id="schedule">
        <h3><i className="fa fa-calendar"></i> E3 Conference Schedule</h3>
        <img className="arrow-icon dash-icon" src={downArrow}/>
      </div>
      <div id="vods">
        <div>
          <p id="missed-stream">MISSED A STREAM?</p>
          <p id="catch-up">Catch up on all the VODs now</p>
        </div>
        <img className="arrow-icon dash-icon" src={rightArrow} />
      </div>
      <div id="search">
        <img id="search-icon" className="dash-icon" src={search} />
        <input id="search-announcements" type="text" placeholder="Search Game Title..." />
      </div>
      <div id="tools2">
        <div className="filters">
          <img className="dash-icon filter-icons" src={legend} />
          <button className="tool-button">Legend</button>
        </div>
        <div className="filters">
          <img className="dash-icon filter-icons" src={sort} />
          <button className="tool-button">Sorting</button>
        </div>
        <div className="filters">
          <img className="dash-icon filter-icons" src={filter} />
          <button className="tool-button">Filters</button>
        </div>
        <div className="filters">
          <img className="dash-icon filter-icons" src={reset} />
          <button className="tool-button">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Tools;
