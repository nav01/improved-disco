import React from 'react';
import './games-nav.css';
import chevronLeft from '../icons/chevron-left.svg';
import chevronRight from '../icons/chevron-right.svg';

class GamesNav extends React.Component {
  constructor (props) {
    super(props);

    this.pages = 7;
    this.state = {
      page: 1,
    }
  }

  changePage = (pageNum) => {
    this.setState((prevState) =>
      prevState.page === pageNum ? {}
      : {page: pageNum}
    );
  }

  incrementPage = () => {
    this.setState((prevState) => ({
      page: (prevState.page + 1) % this.pages,
    }));
  }

  decrementPage = () => {
    this.setState((prevState) => ({
      page: ((prevState.page - 1 + this.pages) % this.pages),
    }));
  }


  render () {
    var pages = [...Array(7).keys()];

    return (
      <div id="announcements-nav">
        <a id="nav-left" href="#" onClick={this.decrementPage}>
          <img className="nav-chevron" src={chevronLeft} />
        </a>
        {
          pages.map((page) => {
            return (
              <a
                className={this.state.page === page ? "nav-page-num nav-page-num-selected" : "nav-page-num"}
                href="#"
                onClick={() => this.changePage(page)}
                >
              {page}
              </a>
            )
          })
        }
        <a id="nav-right" href="#" onClick={this.incrementPage}>
          <img className="nav-chevron" src={chevronRight} />
        </a>
      </div>
    );
  }
}

export default GamesNav;
