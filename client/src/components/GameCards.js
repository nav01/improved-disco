import React from 'react';
import GameCard from './GameCard';
import GamesNav from './GamesNav';
import {games} from '../data';
import {connect} from 'react-redux';
import {makeGamesFilter} from './dashboard/filtersUtil';
import {getSortFunction} from './dashboard/sortUtil';

import memoize from 'memoize-one';
import isEqual from 'lodash.isequal';

import './game-cards.css';

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    searchFilter: state.searchFilter,
    filters: state.filters,
    sortOption: state.sortOption,
  }
}

class GameCards extends React.Component {
  constructor() {
    super();

    this.gamesPerPage = 40; //changes if visiting on mobile, revisit.
    this.numPages = Math.ceil(games.length / this.gamesPerPage);

    this.state = {
      games,
    }
  }

  //todo: room for optimization
  filter = memoize(
    (games, filters) => {return makeGamesFilter(filters)(games);}
  );

  sort = memoize(
    (games, sortOption) => {return getSortFunction(sortOption)(games);},
    (newArgs, lastArgs) => newArgs[1] === lastArgs[1],
  );

  search = memoize(
    (games, searchFilter) => games.filter(game => {
      return game.title.toLowerCase().includes(searchFilter.toLowerCase());
    })
  );

  render() {
    let sortedGames = this.sort(games, this.props.sortOption);
    let searchFilteredGames = this.search(sortedGames, this.props.searchFilter);
    let filteredGames = this.filter(searchFilteredGames, this.props.filters);

    this.numPages = Math.ceil(filteredGames.length / this.gamesPerPage);
    var gamesIndexStart = (this.props.currentPage - 1) * this.gamesPerPage;
    var gamesIndexEnd = gamesIndexStart + this.gamesPerPage > filteredGames.length ?
      filteredGames.length :
      gamesIndexStart + this.gamesPerPage;

    return (
      <div id="game-cards">
        {filteredGames.slice(gamesIndexStart, gamesIndexEnd).map((game, index) =>
          <GameCard
            game={game}
            visible={true}
            key={game.title + game.conference + game.day}
          />
        )}
        {(this.numPages > 1) &&
          <GamesNav
            numPages={this.numPages}
            currentPage={this.props.currentPage}
          />
        }
      </div>
    );
  }
}

export default connect(mapStateToProps)(GameCards);
