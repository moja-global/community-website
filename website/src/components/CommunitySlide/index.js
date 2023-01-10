import clsx from 'clsx';
import React from 'react';
import styles from './CommunitySlide.module.css';
import './CommunitySlide.css';

const CommunitySlide = ({ title, description, position = 'down' }) => {
  return (
    <>
      <div className={clsx(`communityCard ${position === 'down' && 'positionDown'}`)}>
        <div className={styles.ellipseContainer}>
          <div className={styles.ellipse}></div>
          <div className={styles.ellipse}></div>
          <div className={styles.ellipse}></div>
        </div>
        <div className={styles.borderLine}></div>
        <div className={styles.communityCardBody}>
          <div className={styles.cardBodyHeader}> {title} </div>
          {description.map((item) => (
            <a href={item.link} target="_blank" className={styles.cardBodyPills}>
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default CommunitySlide;
