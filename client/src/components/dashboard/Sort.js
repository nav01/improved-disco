import React from 'react';
import {SORT} from './sortUtil';
import {connect} from 'react-redux';
import {CHANGE_SORT_OPTION} from '../../actions';

import './sort.css';


const mapStateToProps = state => {
  return {
    sortOption: state.sortOption,
  }
};

const mapDispatchToProps = dispatch => ({
  updateSortOption: sort => dispatch({type: CHANGE_SORT_OPTION, payload: sort}),
});

function Sort (props) {
  return(
    <div id="sorting">
      <span className="sort-option">
        <input id="sort-by-new"
          type="radio"
          name="sort"
          value={SORT.new}
          checked={props.sortOption === SORT.new}
          onChange={() => props.updateSortOption(SORT.new)}
        />
        <label htmlFor="sort-by-new">Newest</label>
      </span>
      <span className="sort-option">
        <input
          id="sort-by-old"
          type="radio"
          name="sort"
          value={SORT.old}
          checked={props.sortOption === SORT.old}
          onChange={() => props.updateSortOption(SORT.old)}
        />
        <label htmlFor="sort-by-old">Oldest</label>
      </span>
      <span className="sort-option">
        <input
          id="sort-by-random"
          type="radio"
          name="sort"
          value={SORT.random}
          checked={props.sortOption === SORT.random}
          onChange={() => props.updateSortOption(SORT.random)}
        />
        <label htmlFor="sort-by-random">Random</label>
      </span>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
