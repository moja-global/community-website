import React from 'react';
import Layout from '@theme/Layout';
import JsonDataDisplay from './TeamCard/teamcard';
import './team.css';

const Team = () => {
  return (
    <Layout>
      <div className="wrapper">
        <h1>Contributors</h1>
        <div className="subtitle">
          Thanks to everyone involved in Contributing to The Moja-Global.
        </div>

        <div className="card-list">
          <div className="card-container">
            <JsonDataDisplay />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Team;
