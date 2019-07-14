import React from 'react';

import visibilityOff from '../icons/visibility-off.svg';
import visibilityOn from '../icons/visibility-on.svg';
import flipCard from '../icons/flip-card.svg';
import movie from '../icons/movie.svg';

import './game-card.css';

class GameCard extends React.Component {
  constructor (props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = {
      disabled: props.visible ? false : true,
      flipped: false,
      loadImage: false,
    }

    this.observer = new IntersectionObserver(([entry], observer) => {
        if (entry.isIntersecting) {
          observer.disconnect();
          this.setState({loadImage: true});
        }
    }, {threshold: 0.5});
  }

  componentDidMount() {
      this.observer.observe(this.imageRef.current);
  }

  componentWillUnmount() {
    if (!this.state.loadImage)
      this.observer.disconnect();
  }

  toggleDisabled = (event) => {
    //Visibility icons are in a clickable div so click event propogation needs to be stopped.
    event.cancelBubble = true;
    if(event.stopPropagation) event.stopPropagation();
    this.setState(prevState => ({
      disabled: !prevState.disabled,
      flipped: !prevState.disabled ? false : prevState.flipped,
    }));
  }

  flip = () => {
    this.setState(prevState => ({flipped: !prevState.flipped}));
  }


  determineMediaClass = mediaLength => {
    if (mediaLength % 2 === 1)
      return 'card-back-media-odd';
    else if (mediaLength === 2)
      return 'card-back-media-col';
    else if (mediaLength % 2 === 0)
      return 'card-back-media-even';
  }

  render() {
    let game = this.props.game;
    return (
      <div ref={this.imageRef} className="game-card">
        {
          !this.state.flipped ? <div onClick={this.state.disabled ? null : this.flip} class="card-front">
            {this.props.exclusive ? (
              <div className="game-text">
                <p className="game-title">{this.props.gameName}</p>
                <p className="exclusive">&#9733; EXCLUSIVE</p>
              </div>
            ) : (
              <p className="game-title game-text">{this.props.gameName}</p>
            )}
            {
              this.state.loadImage ?
                <img className="game-image" src={this.props.image} />
                : <img className="game-image" data-src={this.props.image} src="" />
            }
            <div className={"img-before " + (this.state.disabled ? "img-before-disabled" : "img-before-enabled")}>
            </div>
            {
              !this.state.disabled ?
              <img onClick={this.toggleDisabled} className="card-icon visibility-off" src={visibilityOff} />
              : <img onClick={this.toggleDisabled} className="card-icon visibility-on" src={visibilityOn} />
            }
          </div>
          : <div class="card-back">
            <div class="card-back-header">
              <div class="card-back-header-left">
                <p class="card-back-title">{game.title}</p>
                {
                  typeof game.developer === 'object' ?
                    <a class="card-back-developer" href={game.developer.devLink}>{game.developer.devName}</a>
                    :<p class="card-back-developer">{game.developer}</p>
                }
              </div>
              <div class="card-back-header-right">
                <img onClick={this.toggleDisabled} className="card-icon" src={visibilityOff} />
                <img onClick={this.flip} className="card-icon" src={flipCard} />
              </div>
            </div>
            <div class="card-back-lower">
              <div class="card-back-details">
                <div class="card-back-details-release-date">
                  <p class="card-back-detail-header">Release Date</p>
                  <p class="card-back-detail">{game.releaseDate}</p>
                </div>
                {
                  game.platforms &&
                  <div class="card-back-details-platforms">
                    <p class="card-back-detail-header">Platforms</p>
                    <p class="card-back-detail">{game.platforms.join(', ')}</p>
                  </div>
                }
                {
                  this.props.game.genre &&
                  <div class="card-back-details-genre">
                    <p class="card-back-detail-header">Genre</p>
                    <p class="card-back-detail">{game.genre}</p>
                  </div>
                }
              </div>
              <div class={"card-back-media " + this.determineMediaClass(game.media.length)}>
                {
                  game.media.map(media =>
                    <button
                      class="card-back-media-item "
                      data-link={media.mediaLink}
                    >
                      <img src={movie} />
                      <br/>
                      <span>{media.mediaType}</span>
                    </button>
                  )
                }
              </div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default GameCard;
