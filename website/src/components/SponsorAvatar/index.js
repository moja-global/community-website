import React from 'react';
const SponsorAvatar = ({ name, logo, url }) => {
  return (
    <a title={name} target="_blank" href={url} rel="noreferrer">
      <div className="sponsor-div">
        <img className="sponsor-avatar" src={logo} alt={name} />
      </div>
    </a>
  );
};

export default SponsorAvatar;
