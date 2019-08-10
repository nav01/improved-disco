import {
  CHANGE_SORT_OPTION,
  UPDATE_FILTERS,
  REMOVE_FILTER,
  SEARCH,
  UPDATE_PAGE
} from './actions';

const makeGamesFilter = (searchFilter, otherFilters) => {
  return games =>
    games.filter(game => {
        return game.title.toLowerCase().includes(searchFilter.toLowerCase()) &&
          otherFilters.every(filter => filter(game));
    });
};

export default function reducer (state = {}, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchFilter: action.payload,
        currentPage: 1
      };
    case CHANGE_SORT_OPTION:
      return {
        ...state,
        sortOption: action.payload,
      };
    case UPDATE_FILTERS: {
      let filterWithoutType = state.filters.filter(filter => filter.type != action.payload.type);
      let newFilters = [action.payload, ...filterWithoutType];
      return {
        ...state,
        filters: newFilters,
        currentPage: 1,
      };
    }
    case REMOVE_FILTER: {
      return {
        ...state,
        filters: state.filters.filter(filter => filter.type != action.payload),
        currentPage: 1,
      }
    }
    case UPDATE_PAGE:
      return {...state, currentPage: action.payload};
    default:
      return state;
  }
};
