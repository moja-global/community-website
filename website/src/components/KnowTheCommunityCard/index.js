import React from 'react';
import styles from './KnowTheCommunityCard.module.css';
// import Link from '@docusaurus/Link';

const CommunityCard = ({ title, description, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.cardTop}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <h6 className={styles.line} />
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{title}</h2>
        <h6 className={styles.description}>{description}</h6>
      </div>
    </div>
  );
};

export default CommunityCard;
