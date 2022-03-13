import React from 'react';

const WGStaus = ({ status }) => {
  const uStatus = status.toUpperCase();
  const colorMatch = {
    ACTIVE: 'green',
    RETIRED: 'lightgrey',
    INCUBATING: 'yellowgreen',
    PAUSED: 'red',
  };
  const color = colorMatch[uStatus];
  const imgSrc = `https://img.shields.io/badge/STATUS-${uStatus}-${color}?style=for-the-badge`;
  return (
    <p>
      <img height="" width="" src={imgSrc}></img>
    </p>
  );
};

export default WGStaus;
