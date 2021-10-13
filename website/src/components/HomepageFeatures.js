import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Code',
    Svg: require('../../static/img/code.svg').default,
    description: (
      <>
        moja global actively performs in open source events and one of them is Google Season of
        Documentation. We welcome contributors who have a love for documentation like us and can
        help it improve it to make it easier for new contributors.
      </>
    ),
  },
  {
    title: 'Write Blogs for Us',
    Svg: require('../../static/img/write.svg').default,
    description: (
      <>
        moja global is a Linux Foundation organisation and therefore participates in the LFX
        mentorship program as well. We welcome new contributors who can help program FLINT and make
        it better for the world!
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <>
      <div className={clsx('col col--4', styles.featureRow)}>
        <div className={styles.featureImage}>
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className={styles.featureText}>
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      <h1 align="center">Engage with Community</h1>
      <section className={styles.features}>
        <div className="container">
          <div className="col">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
