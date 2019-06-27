import React from 'react';
import './sort.css';

function Sort () {
  return(
    <div id="sorting">
      <span className="sort-option">
        <input id="sort-by-new" type="radio" name="sort" value="newest" defaultChecked/>
        <label htmlFor="sort-by-new">Newest</label>
      </span>
      <span className="sort-option">
        <input id="sort-by-old" type="radio" name="sort" value="oldest"/>
        <label htmlFor="sort-by-old">Oldest</label>
      </span>
      <span className="sort-option">
        <input id="sort-by-random" type="radio" name="sort" value="newest"/>
        <label htmlFor="sort-by-random">Random</label>
      </span>
    </div>
  );
}

export default Sort;
