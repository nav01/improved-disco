import React from 'react';
import arrowDropDown from '../icons/arrow-drop-down.svg';
import './filters.css';

function Filters () {
  return (
    <table id="filter-temp">
      <tr>
        <td>
          <button className="filter-item">
            <span className="filter-type">Conference</span>
            <img className="drop-down" src={arrowDropDown}/>
          </button>
        </td>
        <td>
          <button className="filter-item">
            <span className="filter-type">Platform</span>
            <img className="drop-down" src={arrowDropDown}/>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button className="filter-item">
            <span className="filter-type">Day</span>
            <img className="drop-down" src={arrowDropDown}/>
          </button>
        </td>
        <td>
          <button className="filter-item">
            <span className="filter-type">Release</span>
            <img className="drop-down" src={arrowDropDown}/>
          </button>
        </td>
      </tr>
      <tr>
        <td>
          <button className="filter-item">
            <span className="filter-type">Exclusives & Misc</span>
            <img className="drop-down" src={arrowDropDown}/>
          </button>
        </td>
        <td>
          <button className="filter-item">
            <span className="filter-type">Virtual Reality</span>
            <img className="drop-down" src={arrowDropDown}/>
          </button>
        </td>
      </tr>
    </table>
  )
}

export default Filters;
