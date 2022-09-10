import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomePageFeatures';
import Contributors from '../components/Contributors';
import features from '../../websiteData/features';
import Sponsors from '../components/Sponsors';
import Slider from '../components/CommunitySlider'
const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroContainer)}>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted
            )}
            to="/docs/"
          >
            Know our Projects
          </Link>
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted
            )}
            to="https://www.youtube.com/channel/UCfQUrrNP1Xf-Fv4c8uHYXhQ/playlists"
          >
            Watch the tutorials
          </Link>
        </div>
      </div>
    </header>
  );
};

const Feature = ({ title, description }) => {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
      <hr className='under' />
      <h2 className='desch'>{title}</h2>
      <div className='desc'>{description}</div>
    </div>
  );
};

const Home = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />"
      >
        <HomepageHeader />
        <main>
          <div className="maindiv">
            <div className="divv">
            <br></br>
            <br></br>
            <br></br>
            <h1  className='heading'>Know the Community</h1>
            <br></br>
            <br></br>
            {features && features.length > 0 && (
              <section className={styles.features}>
                <Slider Feature={Feature}></Slider>
                <br></br>
                <br></br>
              </section>
            )}
            </div>
            <HomepageFeatures />
          </div>
        </main>
        <Contributors />
        <Sponsors />
      </Layout>
    </>
  );
};

export default Home;
