import React from 'react';
import Schedule from './Schedule';
import Legend from './Legend';
import Sort from './Sort';
import Filters from './Filters';
import './dashboard.css';

import downArrow from '../icons/down-arrow.svg';
import rightArrow from '../icons/forward-arrow.svg';
import search from '../icons/search.svg';
import legend from '../icons/legend.svg';
import sort from '../icons/sort.svg';
import filter from '../icons/filter.svg';
import reset from '../icons/reset.svg';

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
        <button className="dash-item" onClick={() => this.toggleDashItem(this.DashItem.schedule)} className="dash-item" id="schedule">
          <h3><i className="fa fa-calendar"></i> E3 Conference Schedule</h3>
          <img className="arrow-icon dash-icon" src={downArrow}/>
        </button>
        <div className="dash-item" id="vods">
          <div>
            <p id="missed-stream">MISSED A STREAM?</p>
            <p id="catch-up">Catch up on all the VODs now</p>
          </div>
          <img className="arrow-icon dash-icon" src={rightArrow} />
        </div>
        <div className="dash-item" id="search">
          <img id="search-icon" className="dash-icon" src={search} />
          <input id="search-announcements" type="text" placeholder="Search Game Title..." />
        </div>
        <div className="dash-item" id="tools">
          <button
            onClick={() => this.toggleDashItem(this.DashItem.legend)}
            className={this.state.activeDashItem === this.DashItem.legend ? "tool tool-selected": "tool"}
          >
            <img className="dash-icon filter-icons" src={legend} />
            <span className="filter-text">Legend</span>
          </button>
          <button
            onClick={() => this.toggleDashItem(this.DashItem.sorting)}
            className={this.state.activeDashItem === this.DashItem.sorting ? "tool tool-selected": "tool"}
          >
            <img className="dash-icon filter-icons" src={sort} />
            <span className="filter-text">Sorting</span>
          </button>
          <button
            onClick={() => this.toggleDashItem(this.DashItem.filters)}
            className={this.state.activeDashItem === this.DashItem.filters ? "tool tool-selected": "tool"}
          >
            <img className="dash-icon filter-icons" src={filter} />
            <span className="filter-text">Filters</span>
          </button>
          <button id="reset-filters" className="tool">
            <img className="dash-icon filter-icons" src={reset} />
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

export default Dashboard;
