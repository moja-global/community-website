/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import sponsors from '../../../websiteData/sponsors.json';
import LazyLoad from 'react-lazyload';
import SponsorAvatar from '../SponsorAvatar';

const Sponsors = () => {
  const [sponsor, setSponsor] = useState(0);

  return (
    <div className="sponsors">
      <div className="pluginsHeader">Our Sponsors</div>
      <div>
        {sponsors.length > 0 && (
          <LazyLoad height={200}>
            <div className="sponsors_container">
              <div className="sponsors_list">
                {sponsors.map((data, i) => (
                  <SponsorAvatar key={i} {...data} showDesc={() => setSponsor(i)} />
                ))}
              </div>
              {sponsors.map((data, i) => (
                <div className={'sponsor_desc ' + (sponsor === i ? 'active' : null)} key={i}>
                  <img src={data.logo} className="sponsor_logo" />
                  <div className="text">
                    Lorem Ipsum is simply dummy text of the printing and typesen the industry's the
                    alley of type and scrambled it to make a type specimen book. Lorem Ipsum is
                    simply dummy text of the printing and typesen the industry's thealley of type
                    and scrambled it to make a type specimen book Lorem Ipsum is simply dummy text
                    of the printing and typesen the industry's.
                  </div>
                  <a
                    href={data.url}
                    target="_blank"
                    className="read_more"
                    rel="noopener noreferrer"
                  >
                    {data.name}
                  </a>
                </div>
              ))}
            </div>
          </LazyLoad>
        )}
      </div>
    </div>
  );
};

export default Sponsors;
