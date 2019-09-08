import React from 'react';
import {connect} from 'react-redux';
import {UPDATE_FILTERS, REMOVE_FILTER} from '../../actions';

import './filter.css';

const mapStateToProps = (state, ownProps) => {
  let filter =
    state.filters.find(filter => filter.type === ownProps.type);
  if (!filter)
    return {selectedValues: []};
  else
    return {selectedValues: filter.values};
}

const mapDispatchToProps = dispatch => {
  return {
    updateFilters: filterDetails =>
      dispatch({type: UPDATE_FILTERS, payload: filterDetails}),
    removeFilter: filterType =>
      dispatch({type: REMOVE_FILTER, payload: filterType})
  };
}

class Filter extends React.Component {
  onChange = event => {
    let checkedValue = event.target.value;

    let newFilterValues = undefined;
    if (this.props.selectedValues.includes(checkedValue))
      newFilterValues = this.props.selectedValues.filter(value => value !== checkedValue);
    else
      newFilterValues = [checkedValue, ...this.props.selectedValues];

    let {type, updateFilters, removeFilter} = this.props;

    if (newFilterValues.length)
      updateFilters({
        type,
        values: newFilterValues,
      });
    else
      removeFilter(type)
  }

  render() {
    return (
      <div id={'filter' + this.props.index} className="filter-dropdown">
        {
          this.props.values.map((value, index) => {
            let id = this.props.type + '-' + value.value.split(' ').join('-')  + '-' + index;
            return <div className="filter-value-container">
              <input id={id}
                className="filter-value"
                type="checkbox"
                value={value.value}
                checked={this.props.selectedValues.includes(value.value)}
                onChange={this.onChange}
              />
              <label htmlFor={id} className="filter-value-label">
                {value.label}
              </label>
            </div>
          })
        }
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
