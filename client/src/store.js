import {createStore} from 'redux';

import {SORT} from './components/dashboard/sortUtil';

import {
  CHANGE_SORT_OPTION,
  UPDATE_FILTERS,
  REMOVE_FILTER,
  SEARCH,
  UPDATE_PAGE,
  RESET,
} from './actions';

const initialState = {
  sortOption: SORT.new,
  currentPage: 1,
  filters: [],
  searchFilter: '',
  resetActive: false,
}

const makeGamesFilter = (searchFilter, otherFilters) => {
  return games =>
    games.filter(game => {
        return game.title.toLowerCase().includes(searchFilter.toLowerCase()) &&
          otherFilters.every(filter => filter(game));
    });
};

const setResetActive = (searchFilter, filters, sortOption) =>
  searchFilter.length > 0 ||
    filters.length > 0 ||
    sortOption != SORT.new;

function reducer (state = {}, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchFilter: action.payload,
        currentPage: 1,
        resetActive: setResetActive(action.payload, state.filters, state.sortOption),
      };
    case CHANGE_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload,
        resetActive: setResetActive(state.searchFilter, state.filters, action.payload),
      };
    case UPDATE_FILTERS: {
      let filterWithoutType = state.filters.filter(filter => filter.type != action.payload.type);
      let newFilters = [action.payload, ...filterWithoutType];
      return {
        ...state,
        filters: newFilters,
        currentPage: 1,
        resetActive: setResetActive(state.searchFilter, newFilters, state.sortOption),
      };
    }
    case REMOVE_FILTER: {
      let newFilters = state.filters.filter(filter => filter.type != action.payload);
      return {
        ...state,
        filters: newFilters,
        currentPage: 1,
        resetActive: setResetActive(state.searchFilter, newFilters, state.sortOption),
      }
    }
    case UPDATE_PAGE:
      return {...state, currentPage: action.payload};
    case RESET:
      return {...state, ...initialState};
    default:
      return state;
  }
};

export default createStore(reducer, initialState);
