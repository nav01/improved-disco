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
    console.log("help, i am unmounting");
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
    let {game} = this.props;

    return (
      <div ref={this.imageRef} className="game-card">
        {
          !this.state.flipped ? <div onClick={this.state.disabled ? null : this.flip} className="card-front">
            {game.exclusive ? (
              <div className="game-text">
                <p className="game-title">{game.title}</p>
                <p className="exclusive">&#9733; EXCLUSIVE</p>
              </div>
            ) : (
              <p className="game-title game-text">{game.title}</p>
            )}
            {
              this.state.loadImage ?
                <img className="game-image" src={game.image} />
                : <img className="game-image" data-src={game.image} src="" />
            }
            <div className={"img-before " + (this.state.disabled ? "img-before-disabled" : "img-before-enabled")}>
            </div>
            {
              !this.state.disabled ?
              <img onClick={this.toggleDisabled} className="card-icon visibility-off" src={visibilityOff} />
              : <img onClick={this.toggleDisabled} className="card-icon visibility-on" src={visibilityOn} />
            }
          </div>
          : <div className="card-back">
            <div className="card-back-header">
              <div className="card-back-header-left">
                <p className="card-back-title">{game.title}</p>
                {
                  typeof game.developer === 'object' ?
                    <a className="card-back-developer" href={game.developer.devLink}>{game.developer.devName}</a>
                    :<p className="card-back-developer">{game.developer}</p>
                }
              </div>
              <div className="card-back-header-right">
                <img onClick={this.toggleDisabled} className="card-icon" src={visibilityOff} />
                <img onClick={this.flip} className="card-icon" src={flipCard} />
              </div>
            </div>
            <div className="card-back-lower">
              <div className="card-back-details">
                <div className="card-back-details-release-date">
                  <p className="card-back-detail-header">Release Date</p>
                  <p className="card-back-detail">{game.releaseDate}</p>
                </div>
                {
                  game.platforms &&
                  <div className="card-back-details-platforms">
                    <p className="card-back-detail-header">Platforms</p>
                    <p className="card-back-detail">{game.platforms.join(', ')}</p>
                  </div>
                }
                {
                  game.genre &&
                  <div className="card-back-details-genre">
                    <p className="card-back-detail-header">Genre</p>
                    <p className="card-back-detail">{game.genre}</p>
                  </div>
                }
              </div>
              <div className={"card-back-media " + this.determineMediaClass(game.media.length)}>
                {
                  game.media.map((media, index) =>
                    <button
                      className="card-back-media-item "
                      data-link={media.mediaLink}
                      key={index}
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
