import React from 'react';
import Layout from '@theme/Layout';
import JsonDataDisplay from './TeamCard/teamcard';
import styles from './team.module.css';

const Team = () => {
  
  return (
    <Layout>
      <div className={styles.communityBody}>
      <div>
        <h1 className={styles.communityTitle}>Contributors</h1>
        </div>
          <div className={styles.communitySubtitle}>
          Thanks to everyone involved in Contributing to The Moja-Global.
            </div>
        <JsonDataDisplay />
      </div>
    </Layout>
  );
};

export default Team;