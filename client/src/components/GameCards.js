import React from 'react';
import GameCard from './GameCard';
import GamesNav from './GamesNav';
import {games} from '../data';
import {connect} from 'react-redux';

import './game-cards.css';

const mapStateToProps = (state) => {
  return {
    searchFilter: state.searchFilter,
    currentPage: state.currentPage,
    filterGames: state.filterGames,
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

  render() {
    let filteredGames = this.props.filterGames(games);

    this.numPages = Math.ceil(filteredGames.length / this.gamesPerPage);
    var gamesIndexStart = (this.props.currentPage - 1) * this.gamesPerPage;
    var gamesIndexEnd = gamesIndexStart + this.gamesPerPage > filteredGames.length ? filteredGames.length : gamesIndexStart + this.gamesPerPage;

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
