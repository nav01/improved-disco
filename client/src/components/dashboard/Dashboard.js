import React from 'react';
import Schedule from './Schedule';
import Legend from './Legend';
import Sort from './Sort';
import Filters from './Filters';
import {connect} from 'react-redux';
import {SEARCH} from '../../actions';

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


const mapDispatchToProps = (dispatch) => {
    return {
      updateSearch: (payload) => dispatch({type: SEARCH, payload}),
    }
}

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeDashItem: -1,
      scheduleVisible: false,
      legendVisible: false,
      selectedFilter: 0,
    };

    this.DashItem = Object.freeze({'none': -1, 'schedule': 1, 'legend': 2, 'sorting': 3, 'filters': 4});
  }

  toggleDashItem = (item) => {
    this.setState(prevState => {
      if (prevState.activeDashItem === item)
        return {activeDashItem: this.DashItem.none};
      else
        return {activeDashItem: item};
    })
  };

  render() {
    return (
      <div className="dashboard">
        <button id="schedule" className="dash-item" onClick={() => this.toggleDashItem(this.DashItem.schedule)}>
          <p><i className="fa fa-calendar"></i> E3 Conference Schedule</p>
          <ArrowDownIcon />
        </button>
        <div className="dash-item" id="vods">
          <div>
            <p id="missed-stream">MISSED A STREAM?</p>
            <p id="catch-up">Catch up on all the VODs now</p>
          </div>
          <ArrowRightIcon />
        </div>
        <div className="dash-item" id="search">
          <SearchIcon />
          <input
            onChange={(e) => this.props.updateSearch(e.target.value)}
            id="search-announcements"
            type="text"
            placeholder="Search Game Title..."
            />
        </div>
        <div className="dash-item" id="tools">
          <button
            onClick={() => this.toggleDashItem(this.DashItem.legend)}
            className={this.state.activeDashItem === this.DashItem.legend ? "tool tool-selected": "tool"}
          >
            <LegendIcon />
            <span className="filter-text">Legend</span>
          </button>
          <button
            onClick={() => this.toggleDashItem(this.DashItem.sorting)}
            className={this.state.activeDashItem === this.DashItem.sorting ? "tool tool-selected": "tool"}
          >
            <SortIcon />
            <span className="filter-text">Sorting</span>
          </button>
          <button
            onClick={() => this.toggleDashItem(this.DashItem.filters)}
            className={this.state.activeDashItem === this.DashItem.filters ? "tool tool-selected": "tool"}
          >
            <FilterIcon />
            <span className="filter-text">Filters</span>
          </button>
          <button id="reset-filters" className="tool">
            <ResetIcon />
            <span className="filter-text">Reset</span>
          </button>
        </div>
        {(this.state.activeDashItem === this.DashItem.schedule) && <Schedule />}
        {(this.state.activeDashItem === this.DashItem.legend) && <Legend />}
        {(this.state.activeDashItem === this.DashItem.sorting) && <Sort />}
        {(this.state.activeDashItem === this.DashItem.filters) && <Filters />}
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);
