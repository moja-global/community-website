import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './roadmap.module.css';
import ProjectCard from './ProjectCard/ProjectCard';
import ProjectDescription from '../../websiteData/roadmap';

const RoadmapHeader = () => {
  return (
    <header className={clsx('hero hero--primary', styles.banner, styles.header_subtitle, styles.header_title)}>
      <div className="container">
        <h1 className="header_title">Roadmap</h1>
        <p className="roadmap_mission header_subtitle">
          Moja global’s mission is to support ambitious climate action by developing pioneering,
          open-source software – including the groundbreaking FLINT software – to help users
          accurately and affordably estimate greenhouse gas emissions and removals from forestry,
          agriculture and other land uses (AFOLU).
        </p>
      </div>
    </header>
  );
};

const Roadmap = () => {
  return (
    <Layout title="Roadmap" description="Moja Global Community Project Roadmaps">
      <RoadmapHeader />
      <h1 className={styles.project_head}>Projects</h1>
      <div className={styles.projects}>
        <ProjectCard
          className="project"
          projectTitle={ProjectDescription.flintCloud.title}
          projectBody={ProjectDescription.flintCloud.body}
          onGoingDesc={ProjectDescription.flintCloud.onGoing}
          nextPriority={ProjectDescription.flintCloud.nextPriority}
          forthComing={ProjectDescription.flintCloud.forthComing}
          link={ProjectDescription.flintCloud.link}
        />
        <ProjectCard
          className="project"
          projectTitle={ProjectDescription.flintReportingTool.title}
          projectBody={ProjectDescription.flintReportingTool.body}
          onGoingDesc={ProjectDescription.flintReportingTool.onGoing}
          nextPriority={ProjectDescription.flintReportingTool.nextPriority}
          forthComing={ProjectDescription.flintReportingTool.forthComing}
          link={ProjectDescription.flintReportingTool.link}
        />
      </div>
      <div className={styles.projects}>
        <ProjectCard
          className="project"
          projectTitle={ProjectDescription.flintUI.title}
          projectBody={ProjectDescription.flintUI.body}
          onGoingDesc={ProjectDescription.flintUI.onGoing}
          nextPriority={ProjectDescription.flintUI.nextPriority}
          forthComing={ProjectDescription.flintUI.forthComing}
          link={ProjectDescription.flintUI.link}
        />
        <ProjectCard
          className="project"
          projectTitle={ProjectDescription.flint.title}
          projectBody={ProjectDescription.flint.body}
          onGoingDesc={ProjectDescription.flint.onGoing}
          nextPriority={ProjectDescription.flint.nextPriority}
          forthComing={ProjectDescription.flint.forthComing}
          link={ProjectDescription.flint.link}
        />
      </div>
    </Layout>
  );
};

export default Roadmap;
