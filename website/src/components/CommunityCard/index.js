import React from 'react';
import styles from './CommunityCard.module.css';
import Link from '@docusaurus/Link';

const CommunityCard = ({ title, description, btnLink, btnText }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={btnLink}>
        <button className={styles.button}>{btnText}</button>
      </Link>
    </div>
  );
};

export default CommunityCard;
