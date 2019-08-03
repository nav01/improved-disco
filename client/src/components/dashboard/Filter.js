import React from 'react';
import {connect} from 'react-redux';
import {UPDATE_FILTERS, REMOVE_FILTER} from '../../actions';

import './filter.css';

const mapDispatchToProps = dispatch => {
  return {
    updateFilters: filterDetails =>
      dispatch({type: UPDATE_FILTERS, payload: filterDetails}),
    removeFilter: filterType =>
      dispatch({type: REMOVE_FILTER, payload: filterType})
  };
}

class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedValues: [],
    }
  }

  onChange = event => {
    let checkedValue = event.target.value;
    this.setState(prevState => {
      if (prevState.selectedValues.includes(checkedValue))
        return {selectedValues: prevState.selectedValues.filter(value => value != checkedValue)};
      else
        return {selectedValues: [...prevState.selectedValues, checkedValue]};
    }, () => {
      let {type, updateFilters, removeFilter, filterFuncFactory} = this.props;
      if (this.state.selectedValues.length)
        updateFilters({
          type,
          filterFunc: filterFuncFactory(type, [...this.state.selectedValues])
        });
      else
        removeFilter(type)
    });
  }

  render() {
    return (
      <div id={'filter' + this.props.index} className="filter-dropdown">
        {
          this.props.values.map((value, index) =>
            <div className="filter-value-container">
              <input id={value + index}
                className="filter-value"
                type="checkbox"
                value={value.value}
                onChange={this.onChange}
              />
              <label htmlFor={value+index} className="filter-value-label">
                {value.label}
              </label>
            </div>
          )
        }
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Filter);
