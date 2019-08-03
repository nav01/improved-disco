import {UPDATE_FILTERS, REMOVE_FILTER, SEARCH, UPDATE_PAGE} from './actions';

const makeGamesFilter = (searchFilter, otherFilters) => {
  return games =>
    games.filter(game => {
        return game.title.toLowerCase().includes(searchFilter.toLowerCase()) &&
          otherFilters.every(filter => filter(game));
    });
}

export default function reducer (state = {}, action) {
  switch (action.type) {
    case SEARCH:
      return {
        ...state,
        searchFilter: action.payload,
        filterGames: makeGamesFilter(
          action.payload,
          state.filtersInternal.map(filter => filter.filterFunc)
        ),
        currentPage: 1
      };
    case UPDATE_FILTERS: {
      let updatedFilters = [
        action.payload,
        ...state.filtersInternal.filter(filter =>
          filter.type != action.payload.type
        ),
      ];
      let search = state.searchFilter;
      return {
        ...state,
        currentPage: 1,
        filtersInternal: updatedFilters,
        filterGames: makeGamesFilter(
          state.searchFilter,
          updatedFilters.map(filter => filter.filterFunc),
        ),
      };
    }
    case REMOVE_FILTER: {
      let updatedFilters = state.filtersInternal.filter(filter =>
        filter.type != action.payload
      );
      let search = state.searchFilter;
      return {
        ...state,
        currentPage: 1,
        filtersInternal: updatedFilters,
        filterGames: makeGamesFilter(
          state.searchFilter,
          updatedFilters.map(filter => filter.filterFunc),
        ),
      };
    }
    case UPDATE_PAGE:
      return {...state, currentPage: action.payload};
    default:
      return state;
  }
}
