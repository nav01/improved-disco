import React from 'react';
import visibilityOff from '../icons/visibility-off.svg';
import visibilityOn from '../icons/visibility-on.svg';
import './game-card.css';

class GameCard extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      visible: props.visible ? true : false,
    }
  }

  toggleVisibility = () => {
    this.setState((prevState) => ({visible: !prevState.visible}));
  }
  render() {
    return (
      <div className="game-card">
        {this.props.exclusive ? (
          <div className="game-text">
            <p className="game-title">{this.props.gameName}</p>
            <p className="exclusive">&#9733; EXCLUSIVE</p>
          </div>
        ) : (
          <p className="game-title game-text">{this.props.gameName}</p>
        )}
        <img className="game-image" src={this.props.image} />
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
