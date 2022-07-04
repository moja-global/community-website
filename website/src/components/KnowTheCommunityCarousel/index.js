import React, { useState } from 'react';
import KnowTheCommunityCard from '../KnowTheCommunityCard/index';
import styles from './index.module.css';
import features from '../../../websiteData/features';
import { PhCaretLeftFill, PhCaretRightFill } from '../../assets/icon';

const index = () => {
  const [curSlide, setCurSlide] = useState(0);

  const onLeftClick = () => {
    if (curSlide === 0) {
      setCurSlide(-8);
    } else {
      setCurSlide(curSlide + 1);
    }
    console.log(curSlide);
  };

  const onRightClick = () => {
    if (curSlide === -8) {
      setCurSlide(0);
    } else if (curSlide === 0) {
      setCurSlide(-1);
    } else {
      setCurSlide(curSlide - 1);
    }
    console.log(curSlide);
  };

  return (
    <div className={`${styles.carouselContainer}`}>
      <button className={styles.carouselButtonLeft} onClick={onLeftClick}>
        <PhCaretLeftFill className={styles.carouselButton} />
      </button>
      <div className={styles.carousel}>
        <div
          style={{ transform: `translateX(${curSlide * 330}px)` }}
          className={styles.carouselContainer}
        >
          <ul className={styles.CommunityCardContainer}>
            {features.map((props, idx) => (
              <KnowTheCommunityCard key={idx} className={`class-${idx}`} {...props} />
            ))}
          </ul>
        </div>
      </div>
      <button className={styles.carouselButtonRight} onClick={onRightClick}>
        <PhCaretRightFill className={styles.carouselButton} />
      </button>
    </div>
  );
};

export default index;
