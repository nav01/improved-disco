import React from 'react';
import GameCard from './GameCard';
import GamesNav from './GamesNav';
import './game-cards.css';

function GameCards () {
  const games = [
    {
      gameName: 'Granblue Fantasy: Versus',
      image: 'https://e3recap2019.b-cdn.net/images/game-cards/jf1WY1RPhJg.jpg',
    },
    {
      gameName: 'Phantom Brigade',
      image: 'https://e3recap2019.b-cdn.net/images/game-cards/ul7BQeFbsp4.jpg',
      exclusive: true,
    },
    {
      gameName: 'BurgerTime Party!',
      image: 'https://e3recap2019.b-cdn.net/images/game-cards/iLyH4DgTYyM.jpg',
    },
    {
      gameName: 'Granblue Fantasy: Versus',
      image: 'https://e3recap2019.b-cdn.net/images/game-cards/jf1WY1RPhJg.jpg',
      exclusive: true,
    },
  ];

  return (
    <div id="game-cards">
      {games.map((game) =>
        <GameCard gameName={game.gameName} image={game.image} exclusive={game.exclusive} visible={true} />
      )}
      <GamesNav />
    </div>
  );
}

export default GameCards;
