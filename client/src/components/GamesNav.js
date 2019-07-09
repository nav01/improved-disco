import React from 'react';
import './games-nav.css';
import chevronLeft from '../icons/chevron-left.svg';
import chevronRight from '../icons/chevron-right.svg';

class GamesNav extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    var pages = Array.from({length: this.props.numPages}, (x,i) => i + 1);

    return (
      <div id="announcements-nav">
        <a id="nav-left" href="#" onClick={this.props.decrementPage}>
          <img className="nav-chevron" src={chevronLeft} />
        </a>
        {
          pages.map((page) => {
            return (
              <a
                className={this.props.currentPage === page ? "nav-page-num nav-page-num-selected" : "nav-page-num"}
                href="#"
                onClick={() => this.props.changePage(page)}
              >
              {page}
              </a>
            )
          })
        }
        <a id="nav-right" href="#" onClick={this.props.incrementPage}>
          <img className="nav-chevron" src={chevronRight} />
        </a>
      </div>
    );
  }
}

export default GamesNav;
