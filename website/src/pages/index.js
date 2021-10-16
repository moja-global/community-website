import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import contributors from '../contributors.json';
import LazyLoad from 'react-lazyload';

const ContributorAvatar = ({ author = {}, lastContribution, total }) => {
  return (
    <a
      className={`contributor-item`}
      title={`${author.login} made ${total} commit${
        total > 1 ? 's' : ''
      }. Last commit was ${new Date(lastContribution * 1000).toDateString()}`}
      target="_blank"
      href={`https://github.com/${author.login}`}
      rel="noreferrer"
    >
      <img
        width="75"
        height="75"
        className="contributor-avatar"
        src={author.avatar_url}
        alt={author.login}
      />
    </a>
  );
};

const Contributors = (props) => {
  const sortedContributors = contributors
    .map((o) => {
      // add one day per commit
      o.score = o.lastContribution + o.total * 86400;
      return o;
    })
    .sort((a, b) => (a.score > b.score ? -1 : 1));

  return (
    <div className="contributors">
      <div className="pluginsHeader">Contributors</div>
      <div>
        {sortedContributors.length > 0 && (
          <LazyLoad height={200}>
            <div>
              {sortedContributors.map((data, i) => (
                <ContributorAvatar key={i} {...data} />
              ))}
            </div>
          </LazyLoad>
        )}
      </div>
    </div>
  );
};

function HomepageHeader() {
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
}

const features = [
  {
    title: 'Getting Started',
    description: (
      <>
        <li>
          <a href="/docs/">Introduction to moja global</a>
        </li>
        <li>
          <a href="/docs/about-moja-global">About moja global</a>
        </li>
        <li>
          <a href="/community/technical-steering-committee">Technical Steering Committee</a>
        </li>
        <li>
          <a href="/community/governance">Governance model</a>
        </li>
      </>
    ),
  },
  {
    title: 'Projects',
    description: (
      <>
        <li>
          <a href="/docs/FLINT/About">FLINT</a>
        </li>
        <li>
          <a href="/docs/FLINT-Cloud/About">FLINT Cloud</a>
        </li>
        <li>
          <a href="/docs/FLINT-Reporting-Tool/About">FLINT Reporting Tool</a>
        </li>
        <li>
          <a href="/docs/FLINT-Visualization-Tool/About">FLINT Visualization Tool</a>
        </li>
        <li>
          <a href="/docs/Predictive-Deforestation/About">Predictive Deforestation</a>
        </li>
      </>
    ),
  },
  {
    title: 'Contributing',
    description: (
      <>
        <li>
          <a href="/community/contributing">Contributing guidelines</a>
        </li>
        <li>
          <a href="/community/code-contribution">Code contributions</a>
        </li>
        <li>
          <a href="/community/docs-contribution">Documentation contributions</a>
        </li>
        <li>
          <a href="/community/management-contribution">Management contributions</a>
        </li>
      </>
    ),
  },
  {
    title: 'How To Guides',
    description: (
      <>
        <li>
          <a href="https://docs.moja.global/en/latest/prerequisites/index.html">
            FLINT Prerequisites
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/DevelopmentSetup/index.html">
            FLINT Development Setup
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/GCBMDevelopmentSetup/index.html">
            GCBM Development Setup
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/DeveloperWorkflow/index.html">
            GitHub Workflow
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/DocumentationStyleGuide/index.html">
            Writing documentation
          </a>
        </li>
      </>
    ),
  },
  {
    title: 'Mentorship & Initiatives',
    description: (
      <>
        <li>
          <a href="/initiatives">Community initiatives</a>
        </li>
        <li>
          <a href="/community/mentorship#outreachy-internships">Outreachy internships</a>
        </li>
        <li>
          <a href="/community/mentorship#google-season-of-docs">Google Season of Docs</a>
        </li>
        <li>
          <a href="/community/mentorship#google-summer-of-code">Google Summer of Code</a>
        </li>
      </>
    ),
  },
  {
    title: 'Safety & Support',
    description: (
      <>
        <li>
          <a href="/community/code-of-conduct">Community Code of Conduct</a>
        </li>
        <li>
          <a href="/community/support">Community support</a>
        </li>
      </>
    ),
  },
  {
    title: 'Documentation',
    description: (
      <>
        <li>
          <a href="https://docs.moja.global/">moja global technical documentation</a>
        </li>
        <li>
          <a href="https://docs.moja.global/projects/flintcloud/en/latest/">FLINT Cloud</a>
        </li>
        <li>
          <a href="https://docs.moja.global/projects/flint-reporting/en/latest/">FLINT Reporting</a>
        </li>
        <li>
          <a href="https://docs.moja.global/projects/flint-ui/en/latest/">FLINT UI</a>
        </li>
        <li>
          <a href="https://docs.moja.global/projects/GCBM-Chile-Data-Preprocessing-Tools/en/latest/">
            GCBM Chile Pre-Processing Tools
          </a>
        </li>
      </>
    ),
  },
  {
    title: 'Scientific Impact',
    description: (
      <>
        <li>
          <a href="https://www.researchgate.net/publication/341041237_Modelling_forest_carbon_dynamics_for_REDD_using_the_Generic_Carbon_Budget_Model_GCBM_Pilot_Project_Los_Rios_Region_-_Chile">
            Modelling forest carbon dynamics for REDD+
          </a>
        </li>
        <li>
          <a href="https://cbmjournal.biomedcentral.com/articles/10.1186/s13021-020-00155-2">
            Climate change mitigation in British Columbia’s forest sector
          </a>
        </li>
      </>
    ),
  },
  {
    title: 'Miscellaneous',
    description: (
      <>
        <li>
          <a href="https://docs.moja.global/en/latest/faq.html">Frequently Asked Questions</a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/contact.html">Join moja global</a>
        </li>
        <li>
          <a href="/tutorial/tutorial-introduction">Tutorials</a>
        </li>
        <li>
          <a href="/case-studies/introduction">Case studies</a>
        </li>
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.feature)}>
      <h3>{title}</h3>
      <p style={{ listStyleType: 'none' }}>{description}</p>
    </div>
  );
}

export default function Home() {
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
            {features && features.length > 0 && (
              <section className={styles.features}>
                <div className="container">
                  <div className="row">
                    {features.map((props, idx) => (
                      <Feature key={idx} {...props} />
                    ))}
                  </div>
                </div>
                <br></br>
                <br></br>
              </section>
            )}
            <HomepageFeatures />
          </div>
        </main>

        <Contributors />
      </Layout>
    </>
  );
}
