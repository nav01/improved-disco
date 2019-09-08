import React from 'react';
import Schedule from './Schedule';
import Legend from './Legend';
import Sort from './Sort';
import Filters from './Filters';
import {connect} from 'react-redux';
import {SEARCH, RESET} from '../../actions';
import {Link} from 'react-router-dom';

import './dashboard.css';

import {
  ArrowDownIcon,
  ArrowRightIcon,
  SearchIcon,
  LegendIcon,
  SortIcon,
  FilterIcon,
  ResetIcon,
} from '../icons';

const mapStateToProps = state => ({
  searchFilter: state.searchFilter,
  resetActive: state.resetActive,
});

const mapDispatchToProps = dispatch => ({
    updateSearch: (payload) => dispatch({type: SEARCH, payload}),
    reset: () => dispatch({type: RESET}),
});

const DASH_ITEM = Object.freeze({'none': -1, 'schedule': 1, 'legend': 2, 'sorting': 3, 'filters': 4});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDashItem: DASH_ITEM.none,
      scheduleVisible: false,
      legendVisible: false,
      selectedFilter: 0,
    };

  }

  toggleDashItem = (item) => {
    this.setState(prevState => {
      if (prevState.activeDashItem === item)
        return {activeDashItem: DASH_ITEM.none};
      else
        return {activeDashItem: item};
    })
  };

  render() {
    return (
      <div className="dashboard">
        <button id="schedule" className="dash-item" onClick={() => this.toggleDashItem(DASH_ITEM.schedule)}>
          <span><i className="fa fa-calendar"></i> E3 Conference Schedule</span>
          <ArrowDownIcon />
        </button>
        <div id="vods-container">
          <Link to="/watch" style={{textDecoration: 'none'}}>
            <div id="vods" className="dash-item">
              <span>
                <p id="missed-stream">MISSED A STREAM?</p>
                <p id="catch-up">Catch up on all the VODs now</p>
              </span>
              <ArrowRightIcon />
            </div>
          </Link>
        </div>
        <div className="dash-item" id="search">
          <SearchIcon />
          <input
            onChange={(e) => this.props.updateSearch(e.target.value)}
            id="search-announcements"
            type="text"
            placeholder="Search Game Title..."
            value={this.props.searchFilter}
          />
        </div>
        <div className="dash-item" id="tools">
          <button
            onClick={() => this.toggleDashItem(DASH_ITEM.legend)}
            className={this.state.activeDashItem === DASH_ITEM.legend ? "tool tool-selected": "tool"}
          >
            <LegendIcon />
            <span className="filter-text">Legend</span>
          </button>
          <button
            onClick={() => this.toggleDashItem(DASH_ITEM.sorting)}
            className={this.state.activeDashItem === DASH_ITEM.sorting ? "tool tool-selected": "tool"}
          >
            <SortIcon />
            <span className="filter-text">Sorting</span>
          </button>
          <button
            onClick={() => this.toggleDashItem(DASH_ITEM.filters)}
            className={this.state.activeDashItem === DASH_ITEM.filters ? "tool tool-selected": "tool"}
          >
            <FilterIcon />
            <span className="filter-text">Filters</span>
          </button>
          <button
            onClick={this.props.reset}
            id="reset-filters"
            className="tool"
          >
            <ResetIcon active={this.props.resetActive} />
            <span
              className={this.props.resetActive ? "filter-text": "reset-text-disabled"}
            >
              Reset
            </span>
          </button>
        </div>
        {(this.state.activeDashItem === DASH_ITEM.schedule) && <Schedule />}
        {(this.state.activeDashItem === DASH_ITEM.legend) && <Legend />}
        {(this.state.activeDashItem === DASH_ITEM.sorting) && <Sort />}
        {(this.state.activeDashItem === DASH_ITEM.filters) && <Filters />}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
