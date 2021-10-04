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
     body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
     onGoing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     nextPriority: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
     forthComing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
   },
   flintReportingTool:{
    title: "FLINT Reporting Tool",
    body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
    onGoing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    nextPriority: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    forthComing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  flintVisualizationTool:{
    title: "FLINT Visualization Tool",
    body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
    onGoing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    nextPriority: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    forthComing: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  
  },
  flintDeforestation:{
    title: "FLINT Deforestation",
    body: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
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
                      projectTitle = {ProjectDescription.flintVisualizationTool.title} 
                      projectBody = {ProjectDescription.flintVisualizationTool.body}
                      onGoingDesc = {ProjectDescription.flintVisualizationTool.onGoing}
                      nextPriority = {ProjectDescription.flintVisualizationTool.nextPriority}
                      forthComing = {ProjectDescription.flintVisualizationTool.forthComing}
                      />
                      <ProjectCard 
                      className = "project" 
                      projectTitle = {ProjectDescription.flintDeforestation.title} 
                      projectBody = {ProjectDescription.flintDeforestation.body}
                      onGoingDesc = {ProjectDescription.flintDeforestation.onGoing}
                      nextPriority = {ProjectDescription.flintDeforestation.nextPriority}
                      forthComing = {ProjectDescription.flintDeforestation.forthComing}
                      />
                    </div>
            </Layout>
    )
}

export default Roadmap
