import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomePageFeatures';
import Contributors from '../components/Contributors';
import Sponsors from '../components/Sponsors';
import CommunitySlideCarouselSection from '../components/CommunitySlideCarouselSection';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <img className={styles.graphic2} src="static/img/mojaGraphic2.png" alt={'Graphic'}></img>
      <div className={styles.heroContainer}>
        <div className={styles.subContainer}>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.subtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttonContainer}>
            <button className={styles.btn}>
              <Link className={styles.getStarted} to="/docs/">
                Know our Projects
              </Link>
            </button>
            <button className={styles.btn}>
              <Link
                className={styles.getStarted}
                to="https://www.youtube.com/channel/UCfQUrrNP1Xf-Fv4c8uHYXhQ/playlists"
              >
                Watch the tutorials
              </Link>
            </button>
          </div>
        </div>
        <img
          className={styles.heroImg}
          src="static/img/logo-light.png"
          alt={'Logo'}
          height={250}
          width={300}
        ></img>
      </div>
      <img className={styles.graphic1} src="static/img/mojaGraphic1.png" alt={'Graphic'}></img>
    </header>
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
            <br></br>
            <br></br>
            <br></br>
            <h1 align="center">Know the Community</h1>
            <br></br>
            <br></br>
            <CommunitySlideCarouselSection />
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
