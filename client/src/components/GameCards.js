import React from 'react';
import GameCard from './GameCard';
import GamesNav from './GamesNav';
import {games} from '../data';
import './game-cards.css';

class GameCards extends React.Component {
  constructor(props) {
    super(props);
    this.games = games.slice(0,20);
  }


  render() {
    return (
      <div id="game-cards">
        {this.games.map((game) =>
          <GameCard gameName={game.title} image={game.image} exclusive={game.moreDetails.exclusive} visible={true} />
        )}
        <GamesNav />
      </div>
    );
  }
}

export default GameCards;
