import React from 'react';
import {connect} from 'react-redux';
import {
  SET_MEDIA_OVERLAY_DISABLED,
} from '../actions';

import './mediaOverlay.css';
import {ChevronLeftIcon, ChevronRightIcon, MovieIcon} from './icons';

const mapDispatchToProps = dispatch => ({
  closeOverlay: () => dispatch({type: SET_MEDIA_OVERLAY_DISABLED}),
});

class MediaOverlay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaIndex: props.chosenGameMediaIndex,
      gameIndex: props.gameIndex,
    }
  }

  nextGame = () => {
    this.setState(prevState => ({
      gameIndex: (prevState.gameIndex + 1) % this.props.games.length,
      mediaIndex: 0,
    }));
  }

  previousGame = () => {
    this.setState(prevState => ({
      gameIndex: (prevState.gameIndex - 1 + this.props.games.length) % this.props.games.length,
      mediaIndex: 0,
    }));
  }

  render() {
    let game = this.props.games[this.state.gameIndex];
    return (
      <div id="media-overlay">
        <div id="media">
          <div id="video-wrapper">
            <iframe
              title={game.title + ' ' + game.media[this.state.mediaIndex].mediaType}
              src={game.media[this.state.mediaIndex].mediaLink}
            >
            </iframe>
          </div>
          <div id="video-footer">
            <span id="media-game-title">{game.title}</span>
            <div id="video-footer-right">
              {
                (game.media.length > 1) && game.media.map((media, i) =>
                  (
                    <button
                      className={
                        this.state.mediaIndex === i ?
                          "media-selection media-selection-chosen" :
                          "media-selection"
                      }
                      onClick={() => this.setState({mediaIndex: i})}
                    >
                      <MovieIcon />
                    </button>
                  )
                )
              }
              <button
                id="close-media"
                onClick={this.props.closeOverlay}
              >
                &times;
              </button>
            </div>
          </div>
        </div>
        {
          (this.props.games.length > 1) &&
          <div id="media-footer">
            <button
              onClick={this.previousGame}
              className="media-change-card"
            >
              <ChevronLeftIcon htmlClass="media-change-chevron" color={"#ffffff"} />
              <span>Previous Card</span>
            </button>
            <button
              onClick={this.nextGame}
              className="media-change-card"
            >
              <span>Next Card</span>
              <ChevronRightIcon htmlClass="media-change-chevron" color={"#ffffff"} />
            </button>
          </div>
        }
      </div>
    );
  }
};

export default connect(null, mapDispatchToProps)(MediaOverlay);
