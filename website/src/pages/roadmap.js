import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './roadmap.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import ProjectCard from './ProjectCard/ProjectCard';
import { m } from 'framer-motion';

const RoadmapHeader = () =>{
    const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.banner)}>
      <div className="container">
        <h1 className="hero__title">Roadmap</h1>
        <p className="hero__subtitle roadmap_mission">Moja global’s mission is to support ambitious climate action by developing pioneering, open-source software – including the groundbreaking FLINT software – to help users accurately and affordably estimate greenhouse gas emissions and removals from forestry, agriculture and other land uses (AFOLU).</p>
      </div>
    </header>
  );
}

const ProjectDescription = {
   flintCloud:{
     title: "FLINT Cloud",
     body: "The project aims to build a continuous deployment pipeline to offer FLINT as a SaaS over cloud. The project also aims to simplify the process of installation by supporting a single command or step installation process.",
     onGoing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     nextPriority: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     forthComing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
   },
   flintReportingTool:{
    title: "FLINT Reporting Tool",
    body: "FLINT Reporting Tooloffers functionality for classifying FLINT output results intostandard reporting formats.",
    onGoing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    nextPriority: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    forthComing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  flintUI:{
    title: "FLINT Visualization Tool",
    body: "This project provides an intuitive way for new to explore some preconfigured FLINT modules, including the Generic Budget Carbon Model (GCBM), in order to better understand how the FLINT system works",
    onGoing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    nextPriority: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    forthComing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  
  },
  flint:{
    title: "FLINT",
    body: "FLINT is a modular and highly flexible open-source software technology designed to estimate greenhouse gas emissions and removals by the land sector.",
    onGoing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    nextPriority: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    forthComing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  
  }
}

const Roadmap = () => {
    return (
            <Layout title = "Roadmap" description = "Moja Global Community Project Roadmaps">
                <RoadmapHeader/>
                  <h1 className = {styles.project_head}>Projects</h1>
                    <div className = {styles.projects}>
                      <ProjectCard 
                      className = "project" 
                      projectTitle = {ProjectDescription.flintCloud.title} 
                      projectBody = {ProjectDescription.flintCloud.body}
                      onGoingDesc = {ProjectDescription.flintCloud.onGoing}
                      nextPriority = {ProjectDescription.flintCloud.nextPriority}
                      forthComing = {ProjectDescription.flintCloud.forthComing}
                      />
                      <ProjectCard 
                      className = "project" 
                      projectTitle = {ProjectDescription.flintReportingTool.title} 
                      projectBody = {ProjectDescription.flintReportingTool.body}
                      onGoingDesc = {ProjectDescription.flintReportingTool.onGoing}
                      nextPriority = {ProjectDescription.flintReportingTool.nextPriority}
                      forthComing = {ProjectDescription.flintReportingTool.forthComing}
                      />
                    </div>
                    <div className = {styles.projects}>
                      <ProjectCard 
                      className = "project" 
                      projectTitle = {ProjectDescription.flintUI.title} 
                      projectBody = {ProjectDescription.flintUI.body}
                      onGoingDesc = {ProjectDescription.flintUI.onGoing}
                      nextPriority = {ProjectDescription.flintUI.nextPriority}
                      forthComing = {ProjectDescription.flintUI.forthComing}
                      />
                      <ProjectCard 
                      className = "project" 
                      projectTitle = {ProjectDescription.flint.title} 
                      projectBody = {ProjectDescription.flint.body}
                      onGoingDesc = {ProjectDescription.flint.onGoing}
                      nextPriority = {ProjectDescription.flint.nextPriority}
                      forthComing = {ProjectDescription.flint.forthComing}
                      />
                    </div>
            </Layout>
    )
}

export default Roadmap
