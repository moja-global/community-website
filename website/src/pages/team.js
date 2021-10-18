import React from 'react';
import Layout from '@theme/Layout';
import JsonDataDisplay from './TeamCard/teamcard';
import styles from './team.css';

function Team() {
  return (
    <Layout>
    <div className="wrapper">
      <h1>Contributors</h1>
      <div class="subtitle">
      <h3>
      Thanks to everyone involved in Contributing to The Moja-Global.
      </h3>
      </div>
      
    <div className="card-list">
    <div className="card-container">

      <JsonDataDisplay/>
    </div>
    </div>
    </div>
    </Layout>
  );
}
 
export default Team;