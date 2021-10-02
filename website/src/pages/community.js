import React from 'react';

const Community = () => {
  return (
    <div style={bodyLayout}>
      <div>
        <h1>Community</h1>
      </div>
      <div>
        <h3>Our Community Initiatives</h3>
        <div style={communityStyles}>
          <div style={communityItemStyles}>
            <h5>LFX</h5>
          </div>
          <div style={communityItemStyles}>
            <h5>GSoD</h5>
          </div>
          <div style={communityItemStyles}>
            <h5>Outreachy</h5>
          </div>
        </div>
      </div>
      <section id='involvment'>
          <h3>Get Involved</h3>
          <div style={communityStyles}>
              <div style={communityItemStyles}>
                  <h5>Github</h5>
              </div>
              <div style={communityItemStyles}>
                  <h5>Slack</h5>
              </div>
              <div style={communityItemStyles}>
                  <h5>Meetings</h5>
              </div>
          </div>
      </section>
    </div>
  );
};

const bodyLayout = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '1280px',
  textAlign: 'center',
};

const communityStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignContent: 'center',
};

const communityItemStyles = {
  width: '33.3%',
};

export default Community;
