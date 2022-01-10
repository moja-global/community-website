import React from 'react';
import LazyLoad from 'react-lazyload';
import contributors from '../../contributors.json';
import ContributorAvatar from '../ContributorAvatar';

const Contributors = (props) => {
  const sortedContributors = contributors
    .map((o) => {
      // add one day per commit
      o.score = o.lastContribution + o.total * 86400;
      return o;
    })
    .sort((a, b) => (a.score > b.score ? -1 : 1));

  return (
    <div className="contributors">
      <div className="pluginsHeader">Contributors</div>
      <div>
        {sortedContributors.length > 0 && (
          <LazyLoad height={200}>
            <div>
              {sortedContributors.map((data, i) => (
                <ContributorAvatar key={i} {...data} />
              ))}
            </div>
          </LazyLoad>
        )}
      </div>
      {/* counter */}
      <div className="stats">
        <div className="stats-item">
          <p>40+ contributors</p>
        </div>
        <div className="stats-item">
          <p>80+ forks</p>
        </div>
        <div className="stats-item">
          <p>120+ pull requests</p>
        </div>
        <div className="stats-item">
          <p>40+ stars</p>
        </div>
      
      </div>
    </div>
  );
};

export default Contributors;