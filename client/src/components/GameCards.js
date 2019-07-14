import React from 'react';
import GameCard from './GameCard';
import GamesNav from './GamesNav';
import {games} from '../data';
import './game-cards.css';

class GameCards extends React.Component {
  constructor() {
    super();

    this.gamesPerPage = 40; //changes if visiting on mobile, revisit.
    this.numPages = Math.ceil(games.length / this.gamesPerPage);
    this.games = games.slice(0,20);

    this.state = {
      currentPage: 1,
    }
  }

  incrementPage  = () => {
    this.setState(prevState => {
      let page = prevState.currentPage + 1;
      return {currentPage: (page > this.numPages ? 1 : page)};
    });
  }

  decrementPage = () => {
    this.setState(prevState => {
      let page = prevState.currentPage - 1;
      return {currentPage: (page <= 0 ? this.numPages : page)};
    });
  }

  changePage = (pageNum) => {
    this.setState(prevState =>
      prevState.currentPage === pageNum ? {}
      : {currentPage: pageNum}
    );
  }

  render() {
    var gamesIndexStart = (this.state.currentPage - 1) * this.gamesPerPage;
    var gamesIndexEnd = gamesIndexStart + this.gamesPerPage > games.length ? games.length : gamesIndexStart + this.gamesPerPage;

    console.log(gamesIndexStart);
    console.log(gamesIndexEnd);
    return (
      <div id="game-cards">
        {games.slice(gamesIndexStart, gamesIndexEnd).map((game) =>
          <GameCard
            game={game}
            gameName={game.title}
            image={game.image} exclusive={game.moreDetails.exclusive}
            visible={true}
          />
        )}
        <GamesNav
          numPages={this.numPages}
          currentPage={this.state.currentPage}
          changePage={this.changePage}
          incrementPage={this.incrementPage}
          decrementPage={this.decrementPage}
        />
      </div>
    );
  }
}

export default GameCards;
