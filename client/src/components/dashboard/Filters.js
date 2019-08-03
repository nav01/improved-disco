import React from 'react';
import {
  conferences,
  platforms,
  days,
  releaseQuarters,
  exclusivesMisc,
  vr,
  quarterizeDate,
} from './filtersUtil';
import Filter from './Filter';
import arrowDropDown from '../../icons/arrow-drop-down.svg';
import './filters.css';

const FILTERS = Object.freeze({
  none: 0,
  conference: 1,
  platform: 2,
  day: 3,
  release: 4,
  exclusivesMisc: 5,
  vr: 6,
});


class Filters extends React.Component {
  constructor() {
    super();
    this.state = {
      activeFilters: [],
    }
  }

  static filterFuncFactory = (filter, filterValues) => {
    switch (filter) {
      case FILTERS.conference:
        return game => filterValues.includes(game.conference.toLowerCase());
      case FILTERS.platform:
        return game => {
          if (!game.platforms)
            return false;
          let platformsToLower = game.platforms.map(platform => platform.toLowerCase());
          return filterValues.some(filterValue => platformsToLower.includes(filterValue))
        }
      case FILTERS.day:
        let days = filterValues.slice(1).map(day => day.split(' ')[1]);
        let newFilterValues = [filterValues[0].toLowerCase(), ...days];
        return game => newFilterValues.includes(game.day);
      case FILTERS.release:
        return game => {
          const TBA = 'To Be Announced';
          if (game.releaseDate === TBA)
            return filterValues.includes(game.releaseDate);
          else {
            let quarterDate = quarterizeDate(game.releaseDate).toLowerCase();
            return filterValues.includes(quarterDate);
          }
        };
      case FILTERS.exclusivesMisc:
        return game => {
          return filterValues.some(value => game.moreDetails.includes(value)) ||
          (
            game.moreDetails.includes('exclusive') &&
            game.platforms.some(platform => filterValues.includes(platform.toLowerCase()))
          );
        }
      case FILTERS.vr:
        return game => filterValues.includes(game.vr);
    }
  }

  setActiveFilters = filter => {
    this.setState(prevState => {
      return prevState.activeFilters.includes(filter) ?
      {activeFilters: prevState.activeFilters.filter(activeFilter => activeFilter != filter)} :
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
              <img className="drop-down" src={arrowDropDown}/>
            </button>
            {
              (this.state.activeFilters.includes(data.filter)) &&
              <Filter
                type={data.filter}
                index={index}
                values={data.values}
                filterFuncFactory={Filters.filterFuncFactory}
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
    filterFuncGenerator: Filters.makeSimpleFilter,
  },
  {
    label: 'Platform',
    values: platforms,
    filter: FILTERS.platform,
    filterFuncGenerator: Filters.makeSimpleFilter,
  },
  {
    label: 'Day',
    values: days,
    filter: FILTERS.day,
    filterFuncGenerator: Filters.makeSimpleFilter,
  },
  {
    label: 'Release',
    values: releaseQuarters,
    filter: FILTERS.release,
    filterFuncGenerator: Filters.makeDateFilter,
  },
  {
    label: 'Exclusives & Misc',
    values: exclusivesMisc,
    filter: FILTERS.exclusivesMisc,
    filterFuncGenerator: Filters.makeSimpleFilter,

  },
  {
    label: 'Virtual Reality',
    values: vr,
    filter: FILTERS.vr,
    filterFuncGenerator: Filters.makeSimpleFilter,
  },
];

export default Filters;
