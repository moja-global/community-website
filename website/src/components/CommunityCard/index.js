import React from 'react';
import styles from './CommunityCard.module.css';
import Link from '@docusaurus/Link';

const CommunityCard = ({ title, image, btnLink }) => {
  return (
    <Link className={styles.cardLink} to={btnLink}>
      <div className={styles.card}>
        <img src={image} alt={`${title} logo`} width={200} height={200} />
        <h3>{title}</h3>
      </div>
    </Link>
  );
};

export default CommunityCard;
