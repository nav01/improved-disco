import React from 'react';
import {conferences} from '../../data.js';

import './schedule.css';

function Schedule () {

  return (
    <table className="dash-table-2-col" id="conference-schedule">
      <tr className="schedule-item">
        <th className="schedule-header conference">CONFERENCE</th>
        <th className="schedule-header conference-date">DATE</th>
      </tr>
      {
        conferences.map((conference) => {
          return (
              <tr className="schedule-item">
                <td className="conference">{conference.company}</td>
                <td className="conference-date">{conference.date}</td>
              </tr>
          )
        })
      }
    </table>
  );
}

export default Schedule;
