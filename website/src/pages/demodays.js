import React from 'react';
import styles from './demodays.module.css'
import Layout from '@theme/Layout'
import yash from '/static/img/demo-days/yashkandalkar.jpg'
import radis from '/static/img/demo-days/radistoumpalidis.jpg'


const Hello = () => {
    return (
        <Layout title="Hello" description="Hello React Page">
            <div>
                <section className={styles.intro}>
                    <div>
                    <h1 className={styles.title}>Demo Days 2022</h1>
                    <h2 className={styles.date}> 🗓️ 22<sup>nd</sup> October</h2>
                    </div>
                    <p className={styles.sub}>
                    On October 22 the final videos and demonstrations from all the 3 projects of GSoC 2022 will be shown.
                    </p>
                </section>
                <section className={styles.about}>
                    <div className={styles.descript}>
                        <h1 className={styles.head}>Agenda</h1>
                        <p className={styles.headscript}>
                        6:00 PM(IST)
                        GSoC presentations
On October 22 the final videos and demonstrations from 3 projects of GSoC 2022 will be shown. 
                        </p>
                    </div>
                    <div className={styles.descript2}>
                        <h1 className={styles.head}>What to Expect</h1>
                        <ol className={styles.point}>
                            <li>Get to know the community better</li>
                            <li>Get familiar with the projects</li>
                            <li>oppurtunities for new contibutors</li>
                        </ol>
                    </div>
                </section>

                <section className={styles.speaker}>
                    <h1 className={styles.title2}>Keynote Speakers</h1>
                    <div className={styles.info}>
                        <div>
                            <a href="https://github.com/YashKandalkar" target="_blank" rel="noreferrer">
                                <img className={styles.profile} src={yash} alt="image" />
                            </a>
                            <h3>Yash Kandalkar</h3>
                            <p>
                        IT undergraduate from Maharashtra, India. Passionate about Web Development and programming in general. Love participating in hackahthons with friends to solve real-world problems and contribute in open-source.
I am glad to be a part of the Moja Global community and help fight climate change using open-source software.
                            </p>
                        </div>
                        <div>
                            <a href="https://github.com/radistoubalidis" target="_blank" rel="noreferrer">
                                <img className={styles.profile} src={radis} alt="image" />
                            </a>
                            <h3>Radis Toumpalidis</h3>
                            <p>Currently working on my thesis in the dept. of Information and Electrical Engineering of International Hellenic University in Thessaloniki, Greece. Technical interests - Machine Learning and Data Science but I also want to contribute to the Web Dev and DevOps domains. like reading research papers and my favorite language is Python. </p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Hello;
