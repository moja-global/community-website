import React from 'react';
const SponsorAvatar = ({ name, logo, url }) => {
  return (
    <a title={name} target="_blank" href={url} rel="noreferrer">
      <div className="sponsor_wrapper">
        <img width="120" height="120" className="sponsor_avatar" src={logo} alt={name} />{' '}
      </div>{' '}
    </a>
  );
};

export default SponsorAvatar;
