import React from 'react';

import './schedule.css';

function Schedule () {
  const conferences = [
    {
      publisher: 'The Pokemon Company',
      date: 'Jun 5th, 2019 @ 6:00 AM PDT',
    },
    {
      publisher: 'Google Stadia',
      date: 'Jun 6th, 2019 @ 9:00 AM PDT',
    },
    {
      publisher: 'Electronic Arts',
      date: 'Jun 8th, 2019 @ 9:15 AM PDT',
    },
    {
      publisher: 'Microsoft',
      date: 'Jun 9th, 2019 @ 1:00 PM PDT',
    },
    {
      publisher: 'Bethesda',
      date: 'Jun 9th, 2019 @ 5:30 PM PDT',
    },
    {
      publisher: 'Devolver Digital',
      date: 'Jun 9th, 2019 @ 7:00 PM PDT',
    },
  ];

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
                <td className="conference">{conference.publisher}</td>
                <td className="conference-date">{conference.date}</td>
              </tr>
          )
        })
      }
    </table>
  );
}

export default Schedule;
