import React from 'react';
import {connect} from 'react-redux';

import Dashboard from './dashboard/Dashboard';
import GameCards from './cards/GameCards';
import MediaOverlay from './MediaOverlay';

import './mainContent.css';

const mapStateToProps = state => {
  return {
    mediaOverlayActive: state.mediaOverlayActive,
  }
}

const MainContent = props => {
  let {games, activeGameIndex, activeGameMediaIndex} = props.mediaOverlayActive;
  return (
    <div id="content">
      <Dashboard />
      <GameCards />
      {
        props.mediaOverlayActive &&
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
