import React from 'react';
const SponsorAvatar = (props) => {
  return (
    <div onClick={props.showDesc}>
      <div className="single_sponsor">
        <img
          width="120"
          height="120"
          className="sponsor_avatar"
          src={props.logo}
          alt={props.name}
        />{' '}
      </div>{' '}
    </div>
  );
};

export default SponsorAvatar;
