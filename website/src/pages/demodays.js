/* eslint-disable import/no-absolute-path */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './demodays.module.css';
import Layout from '@theme/Layout';
import yash from '../../static/img/demo-days/yashkandalkar.jpg';
import radis from '../../static/img/demo-days/radistoumpalidis.jpg';
import palak from '../../static/img/demo-days/palaksharma.jpg';
import Janvi from '../../static/img/demo-days/janvithakkar.jpg';
import Sanjay from '../../static/img/demo-days/sanjayrajpoot.jpg';


const Hello = () => {
  return (
    <Layout title="Hello" description="Hello React Page">
      <div>
        <section className={styles.intro}>
          <div>
            <h1 className={styles.title}>Demo Days 2022</h1>
            <h2 className={styles.date}>
              {' '}
              🗓️ Saturday, 22<sup>nd</sup> October
            </h2>
            <h2 className={styles.date}>
              {' '}
              🗓️ Saturday, 24<sup>th</sup> December
            </h2>
            <h2 className={styles.date}> 🗓️ Coming soon...</h2>
          </div>
        </section>
        <section className={styles.about}>
          <div className={styles.descript}>
            <h1 className={styles.head}>Agenda</h1>
            <p className={styles.headscript}>
              We will have our Graduted mentees from GSoC(Google summer of code), LFX(Linux
              Foundation), GSOD(Google season of docs) and Outreachy from the batch 2022 showcasing
              their work and learnings with the community.
              On October 22, 12:30 PM GMT, we will have our GSoC mentees showcasing their work and
              learnings to the community
            </p>
          </div>
          <div className={styles.descript2}>
            <h1 className={styles.head}>What to Expect</h1>
            <ol className={styles.point}>
              <li>Get to know the community better</li>
              <li>Get familiar with the projects</li>
              <li>Oppurtunities for new contibutors</li>
              <li>oppurtunities for new contibutors</li>
            </ol>
          </div>
        </section>

        <section className={styles.speaker}>
          <h1 className={styles.title2}>Keynote Speakers</h1>
          <h1 className={styles.subtitle2}>GSOC Mentees</h1>
          <div className={styles.info}>
            <div>
              <a href="https://github.com/PalakSharma23" target="_blank" rel="noreferrer">
                <img className={styles.profile} src={palak} alt="image" />
              </a>
              <h3>Palak Sharma</h3>
              <p>
                Third-year Computer Science and Engineering undergraduate, a passionate Web
                developer, and an Open Source enthusiast. Love automating tasks using RPA, also a
                content creator and with a{' '}
                <a href="https://www.youtube.com/c/PalakSharma23/">Youtube channel</a>. Former GSoC
                mentee at mojaglobal. In a nutshell, a tech explorer and want to experience
                <a href="https://www.youtube.com/c/PalakSharma23/">Youtube channel</a>. Former
                GSoC'22 mentee at mojaglobal. In a nutshell, a tech explorer and want to experience
                everything to the fullest.
              </p>
            </div>
            <div>
              <a href="https://github.com/YashKandalkar" target="_blank" rel="noreferrer">
                <img className={styles.profile} src={yash} alt="image" />
              </a>
              <h3>Yash Kandalkar</h3>
              <p>
                IT undergraduate from Maharashtra, India. Passionate about Web Development and
                programming in general. Love participating in hackahthons with friends to solve
                real-world problems and contribute in open-source. Glad to be a part of the Moja
                Global community and help fight climate change using open-source software.
              </p>
            </div>
            <div>
              <a href="https://github.com/radistoubalidis" target="_blank" rel="noreferrer">
                <img className={styles.profile} src={radis} alt="image" />
              </a>
              <h3>Radis Toumpalidis</h3>
              <p>
                Technical interests - Machine Learning and Data Science,learning to contribute to
                the Web Dev and DevOps domains, like reading research papers and favorite language
                is Python. Currently working on my thesis in the dept. of Information and Electrical
                Engineering of International Hellenic University in Thessaloniki, Greece.{' '}
              </p>
            </div>
          </div>
          <h1 className={styles.subtitle3}>LFX Mentees</h1>
          <div className={styles.info}>
            <div>
              <a href="https://github.com/SanjaySinghRajpoot" target="_blank" rel="noreferrer">
                <img className={styles.profile} src={Sanjay} alt="image" />
              </a>
              <h3>Sanjay Singh Rajpoot</h3>
              <p>
                Sanjay is a 3rd year student at IET DAVV Indore. He is a passionate coder. He likes
                to explore the “what”, the “why” & the “how” of programming. He is a Full Stack
                developer and an Open Source enthusiast. He has been selected for various
                open-source programs such as GSoC, LFX, and MLH. Sanjay likes to read a lot and
                enjoys learning new things.
              </p>
            </div>
            <div>
              <a href="https://github.com/Janvi-Thakkar" target="_blank" rel="noreferrer">
                <img className={styles.profile} src={Janvi} alt="image" />
              </a>
              <h3>Janvi Thakkar</h3>
              <p>
                Janvi is a final year student pursuing IT Engineering from LD College of
                Engineering, Ahmedabad. She is currently working as Cloud Engineer Trainee at
                Intuitive.Cloud. She has completed GSoC with SCoReLab and LFX with Moja Global in
                2022. Janvi loves helping new contributors to start their journey with Moja Global.
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Hello;
