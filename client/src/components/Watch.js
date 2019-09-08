import React from 'react';
import Schedule from './dashboard/Schedule';
import {conferenceMedia} from '../data';

import './watch.css';
import {LinkIcon, RewindIcon} from './icons';

class Watch extends React.Component {
  constructor () {
    super();

    this.state = {
      conferenceIndex: 0,
    }
  }

  changeConference = (conferenceIndex) =>
    this.setState({conferenceIndex})

  render() {
    let conference = conferenceMedia[this.state.conferenceIndex];
    return (
      <div id="watch-container">
        <div id="watch-wrapper">
          <div id="conference-media">
            <div id="conference-media-wrapper">
              <iframe
                src={'https://www.youtube.com/embed/' + conference.link}
                title={conference.title + ' Video'}
              >
              </iframe>
            </div>
            <div id="conference-media-footer">
              <span id="conference-media-title">{conference.title}</span>
              <a
                href={'https://www.youtube.com/embed/' + conference.link}
                target="_blank"
                rel="noopener noreferrer"
                id="new-tab">
                <LinkIcon />
                <span>New Tab</span>
              </a>
            </div>
          </div>
          <div id="conference-streams">
            <div id="streams-links-container">
              <div id="conference-stream-header">
                <span id="header-rewind-icon"><RewindIcon color="#D3D3D3" htmlClass={"watch-rewind-icon"}/></span>
                <span>Rewatch</span>
              </div>
              <div id="conference-stream-links">
                {
                  conferenceMedia.map((conference, index) => {
                    return (
                      <button
                        onClick={() => this.changeConference(index)}
                        className={
                          "conference-media-link" +
                          (
                            this.state.conferenceIndex === index ?
                            " conference-media-link-selected" :
                            ""
                          )
                        }
                      >
                        <img
                          className="youtube-icon"
                          src="https://img.icons8.com/color/18/000000/youtube-play.png"
                        />
                        <span>{conference.title}</span>
                      </button>
                    )
                  })
                }
              </div>
              
            </div>
          </div>
          <div id="watch-schedule-container">
            <span id="watch-schedule-header">
              <i className="fa fa-calendar"></i>
              <span>E3 Conference Schedule</span>
            </span>
            <Schedule />
          </div>
        
        </div>
      </div>
    )
  }
}

export default Watch;
