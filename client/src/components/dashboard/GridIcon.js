import React from 'react';

//A grid icon for the legend component.  Done this way to use the symbol multiple times with different colors.
function GridIcon (props) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" className="grid-icon">
      <path className="grid-icon" fill={props.color} d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
    </svg>
  )
}

export default GridIcon;