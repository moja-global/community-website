import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Code',
    Svg: require('../../static/img/code.svg').default,
    description: (
      <>
        moja global actively performs in open source events and one of them is Google Season of Documentation. We welcome contributors who
        have a love for documentation like us and can help it improve it to make it easier for new contributors.
      </>
    ),
  },
  {
    title: 'Know Our Projects',
    Svg: require('../../static/img/learn-more.svg').default,
    description: (
      <>
       moja global has many projects apart from FLINT. Be a part of one of those projects by writing code, improving 
       documentation or just suggest us features that you think will be helpful to the users.
      </>
    ),
  },
  {
    title: 'Write Blogs',
    Svg: require('../../static/img/write.svg').default,
    description: (
      <>
       moja global is a Linux Foundation organisation and therefore participates in the LFX mentorship program as well. We welcome new contributors who can help program FLINT and make it better for the world!
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
