import React from 'react';
import styles from './communitycard.module.css';
import Link from '@docusaurus/Link';

const CommunityCard = ({ title, description, btnLink, btnText }) => {
  return (
    <div className={styles.card}>
      <h4>{title}</h4>
      <p>{description}</p>
      <Link to={btnLink}>
        <button className={styles.button}>{btnText}</button>
      </Link>
    </div>
  );
};

export default CommunityCard;
