import React from 'react';
import {connect} from 'react-redux';

import Dashboard from './dashboard/Dashboard';
import GameCards from './GameCards';
import MediaOverlay from './MediaOverlay';

import './mainContent.css';

const mapStateToProps = state => {
  return {
    mediaActiveGame: state.mediaActiveGame,
  }
}

const MainContent = props => {
  let {games, activeGameIndex, activeGameMediaIndex} = props.mediaActiveGame;
  return (
    <div id="content">
      <Dashboard />
      <GameCards />
      {
        props.mediaActiveGame &&
        <MediaOverlay
          games={games}
          gameIndex={activeGameIndex}
          chosenGameMediaIndex={activeGameMediaIndex}
        />
      }
    </div>
  );
}

export default connect(mapStateToProps)(MainContent);
