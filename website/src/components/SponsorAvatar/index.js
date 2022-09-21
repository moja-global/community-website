import React from 'react';
const SponsorAvatar = ({ name, logo, url, showDesc }) => {
  return (
    <div onClick={showDesc}>
      <div className="single_sponsor">
        <img width="120" height="120" className="sponsor_avatar" src={logo} alt={name} />{' '}
      </div>{' '}
    </div>
  );
};

export default SponsorAvatar;
