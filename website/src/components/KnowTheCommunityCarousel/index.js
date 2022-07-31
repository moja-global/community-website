import React, { useState, useEffect } from 'react';
import KnowTheCommunityCard from '../KnowTheCommunityCard/index';
import styles from './index.module.css';
import features from '../../../websiteData/features';
import { PhCaretLeftFill, PhCaretRightFill } from '../../assets/icon';

const index = () => {
  const [curSlide, setCurSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(6);
  const [slideWidth, setSlideWidth] = useState(330);

  useEffect(() => {
    if (window.innerWidth < 1172 && window.innerWidth > 800) {
      setMaxSlide(7);
    } else if (window.innerWidth <= 800) {
      setMaxSlide(8);
    }

    if (window.innerWidth <= 450) {
      setSlideWidth(250);
    }
  }, []);

  const onLeftClick = () => {
    if (curSlide === 0) {
      setCurSlide(-maxSlide);
    } else {
      setCurSlide(curSlide + 1);
    }
  };

  const onRightClick = () => {
    if (curSlide === -maxSlide) {
      setCurSlide(0);
    } else if (curSlide === 0) {
      setCurSlide(-1);
    } else {
      setCurSlide(curSlide - 1);
    }
  };

  return (
    <div className={`${styles.carouselContainer}`}>
      <button className={styles.carouselButtonLeft} onClick={onLeftClick}>
        <PhCaretLeftFill className={styles.carouselButton} />
      </button>
      <div className={styles.carousel}>
        <div
          style={{ transform: `translateX(${curSlide * slideWidth}px)` }}
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
