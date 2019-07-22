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
  }
}

class GameCards extends React.Component {
  constructor() {
    super();

    this.gamesPerPage = 40; //changes if visiting on mobile, revisit.
    this.numPages = Math.ceil(games.length / this.gamesPerPage);

    this.state = {
      currentPage: 1,
      games,
    }
  }


  filterByName = (title, search) =>
    title.toLowerCase().includes(search.toLowerCase()) ? true : false;



  filter = (games) => {
    return games.filter(game => {
      let include = true;
      if (this.props.searchFilter)
        include = include && this.filterByName(game.title, this.props.searchFilter);
      return include;
    });
  }


  render() {
    let filteredGames = this.filter(games);

    this.numPages = Math.ceil(filteredGames.length / this.gamesPerPage);
    var gamesIndexStart = (this.props.currentPage - 1) * this.gamesPerPage;
    var gamesIndexEnd = gamesIndexStart + this.gamesPerPage > filteredGames.length ? filteredGames.length : gamesIndexStart + this.gamesPerPage;

    return (
      <div id="game-cards">
        {filteredGames.slice(gamesIndexStart, gamesIndexEnd).map((game, index) =>
          <GameCard
            game={game}
            visible={true}
            key={index}
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
