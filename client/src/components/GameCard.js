import React from 'react';
import visibilityOff from '../icons/visibility-off.svg';
import visibilityOn from '../icons/visibility-on.svg';
import './game-card.css';

class GameCard extends React.Component {
  constructor (props) {
    super(props);

    this.imageRef = React.createRef();
    this.state = {
      visible: props.visible ? true : false,
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

  toggleVisibility = () => {
    this.setState((prevState) => ({visible: !prevState.visible}));
  }

  render() {
    return (
      <div ref={this.imageRef} className="game-card">
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
        <div className="img-before"></div>
        {
          this.state.visible ?
          <img onClick={this.toggleVisibility} className="visibility-off" src={visibilityOff} /> :
          <img onClick={this.toggleVisibility} className="visibility-on" src={visibilityOn} />
        }
      </div>
    );
  }
}

export default GameCard;
