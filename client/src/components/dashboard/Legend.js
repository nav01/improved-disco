import React from 'react';

import './legend.css';
import {GridIcon} from '../icons';

function Legend () {
  const conferences = [
    {
      publisher: 'The Pokemon Company',
      color: 'grey',
    },
    {
      publisher: 'Google Stadia',
      color: 'pink',
    },
    {
      publisher: 'Electronic Arts',
      color: 'purple',
    },
    {
      publisher: 'Microsoft',
      color: 'green',
    },
    {
      publisher: 'Bethesda',
      color: 'orange',
    },
    {
      publisher: 'Devolver Digital',
      color: 'yellow',
    },
  ];

  return (
    <div id="legend">
      {
        conferences.map((conf) => {
          return (
            <div className="legend-item">
              <GridIcon color={conf.color} />
              <span>{conf.publisher}</span>
            </div>
          )
        })
      }
    </div>

  )
}
export default Legend;
