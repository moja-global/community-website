import React from 'react';
import sponsors from '../../../websiteData/sponsors.json';
import LazyLoad from 'react-lazyload';
import SponsorAvatar from '../SponsorAvatar';

const Sponsors = () => {
  return (
    <div className="sponsors">
      <div className="pluginsHeader">Our Sponsors</div>
      <div className="sponsor-wrapper">
        <div>
          {sponsors.length > 0 && (
            <LazyLoad height={200}>
              <div className="sponsor_content">
                {sponsors.map((data, i) => (
                  <SponsorAvatar key={i} {...data} />
                ))}
              </div>
            </LazyLoad>
          )} 
        </div>
        <div className="sponsor_info">
          <SponsorAvatar {...sponsors[0]} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <button className="sponsor_button">
            <a href="https://www.linuxfoundation.org/">
              The LInux Foundation
            </a>
          </button>
        </div>
      </div>  
    </div>
  );
};

export default Sponsors;
