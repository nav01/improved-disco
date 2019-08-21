import React from 'react';
import {
  conferences,
  platforms,
  days,
  releaseQuarters,
  exclusivesMisc,
  vr,
  FILTERS,
} from './filtersUtil';
import Filter from './Filter';

import './filters.css';
import {ChevronDownIcon} from '../icons';

class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFilters: [],
    }
  }

  setActiveFilters = filter => {
    this.setState(prevState => {
      return prevState.activeFilters.includes(filter) ?
      {activeFilters: prevState.activeFilters.filter(activeFilter => activeFilter !== filter)} :
      {activeFilters: [...prevState.activeFilters, filter]}
    });
  }

  render() {
    return (
      <div id="filters">
      {
        Filters.filterData.map((data, index) =>
          <div className="filter-item-container">
            <button
              className="filter-item"
              onClick={() => this.setActiveFilters(data.filter)}
            >
              <span className="filter-type">{data.label}</span>
              <ChevronDownIcon />
            </button>
            {
              (this.state.activeFilters.includes(data.filter)) &&
              <Filter
                type={data.filter}
                index={index}
                values={data.values}
              />
            }
          </div>
        )
      }
      </div>
    );
  }
}

Filters.filterData = [
  {
    label: 'Conference',
    values: conferences,
    filter: FILTERS.conference,
  },
  {
    label: 'Platform',
    values: platforms,
    filter: FILTERS.platform,
  },
  {
    label: 'Day',
    values: days,
    filter: FILTERS.day,
  },
  {
    label: 'Release',
    values: releaseQuarters,
    filter: FILTERS.release,
  },
  {
    label: 'Exclusives & Misc',
    values: exclusivesMisc,
    filter: FILTERS.exclusivesMisc,

  },
  {
    label: 'Virtual Reality',
    values: vr,
    filter: FILTERS.vr,
  },
];

export default Filters;
