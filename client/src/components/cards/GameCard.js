import React from 'react';

import './game-card.css';
import {
  VisibilityOnIcon,
  VisibilityOffIcon,
  FlipCardIcon,
  MovieIcon,
} from '../icons';

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

  getConferenceOverlay = conference => {
    return conference.toLowerCase().split(' ').join('-') + '-overlay';
  }

  render() {
    let {game} = this.props;
    console.log(`${game.title} - ${this.props.index}`);

    return (
      <div ref={this.imageRef} className={"game-card" + (!this.state.flipped && !this.state.disabled ? " card-not-disabled-front" : " card-disabled")}>
        {
          !this.state.flipped ? <div onClick={this.state.disabled ? null : this.flip} className="card-front">
            {game.moreDetails.includes('exclusive') ? (
              <div className="game-text">
                <p className="game-title">{game.title}</p>
                <p className="exclusive">&#9733; EXCLUSIVE</p>
              </div>
            ) : (
              <p className="game-title game-text">{game.title}</p>
            )}
            {
              this.state.loadImage ?
                <img className="game-image" src={process.env.PUBLIC_URL + '/pictures/' + game.image + '.jpg'} />
                : <img className="game-image" data-src={game.image} src="" />
            }
            <div className={"img-before " + (this.state.disabled ? "img-before-disabled" : this.getConferenceOverlay(game.conference))}>
            </div>
            <span className="card-front-footer">
              <span className="card-front-footer-item card-front-footer-visibility">
                {
                  !this.state.disabled ?
                  <VisibilityOffIcon onClick={this.toggleDisabled} htmlClass="card-icon visibility-on"/>
                  : <VisibilityOnIcon onClick={this.toggleDisabled} />
                }
              </span>
              {
                <span className="card-front-footer-item card-front-footer-flip">
                  <FlipCardIcon />
                </span>
              }
            </span>
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
                <span className="card-back-header-right-item"><VisibilityOffIcon onClick={this.toggleDisabled} htmlClass="card-icon" /></span>
                <span className="card-back-header-right-item"><FlipCardIcon onClick={this.flip} /></span>
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
                      onClick={() => this.props.showMedia(
                        {
                          activeGameIndex: this.props.index,
                          activeGameMediaIndex: index,
                        }
                      )}
                    >
                      <MovieIcon />
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
