import React from 'react';
import {connect} from 'react-redux';

import {UPDATE_PAGE} from '../actions';

import './games-nav.css';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from './icons';

const mapDispatchToProps = (dispatch) => {
  return ({
    updatePage: page => dispatch({type: UPDATE_PAGE, payload: page}),
  });
}

class GamesNav extends React.Component {
  constructor (props) {
    super(props);
  }

  incrementPage  = () => {
    let page = this.props.currentPage + 1;
    this.props.updatePage(page > this.props.numPages ? 1 : page);
  }

  decrementPage = () => {
      let page = this.props.currentPage - 1;
      this.props.updatePage(page <= 0 ? this.props.numPages : page);
  }

  changePage = (pageNum) => {
    if (!(this.props.currentPage === pageNum))
      this.props.updatePage(pageNum);
  }

  render () {
    var pages = Array.from({length: this.props.numPages}, (x,i) => i + 1);

    return (
      <div id="announcements-nav">
        <a id="nav-left" href="#" onClick={this.decrementPage}>
          <ChevronLeftIcon />
        </a>
        {
          pages.map((page) => {
            return (
              <a
                className={this.props.currentPage === page ? "nav-page-num nav-page-num-selected" : "nav-page-num"}
                href="#"
                onClick={() => this.changePage(page)}
                key={page}
              >
              {page}
              </a>
            )
          })
        }
        <a id="nav-right" href="#" onClick={this.incrementPage}>
          <ChevronRightIcon />
        </a>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(GamesNav);
