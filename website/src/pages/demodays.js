import React from 'react';
import styles from './demodays.module.css'
import Layout from '@theme/Layout'
import robin from '/static/img/demo-days/robin.jpg'


const Hello = () => {
    return (
        <Layout title="Hello" description="Hello React Page">
            <div>
                <section className={styles.intro}>
                    <div>
                    <h1 className={styles.title}>Demo Days 2022</h1>
                    <h2 className={styles.date}> 🗓️ 15<sup>th</sup> October</h2>
                    </div>
                    <p className={styles.sub}>
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur "
                    </p>
                </section>
                <section className={styles.about}>
                    <div className={styles.descript}>
                        <h1 className={styles.head}>Agenda</h1>
                        <p className={styles.headscript}>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur"
                        </p>
                    </div>
                    <div className={styles.descript2}>
                        <h1 className={styles.head}>What to Expect</h1>
                        <ol className={styles.point}>
                            <li>Collaboration</li>
                            <li>Oppurtunities</li>
                        </ol>
                    </div>
                </section>

                <section className={styles.speaker}>
                    <h1 className={styles.title2}>Keynote Speakers</h1>
                    <div className={styles.info}>
                        <div>
                            <a href="https://github.com/Palaksharma23" target="_blank" rel="noreferrer">
                                <img className={styles.profile} src={robin} alt="image" />
                            </a>
                            <h3>Name</h3>
                            <p>Gsoc'22 Mentee </p>
                        </div>
                        <div>
                            <a href="https://github.com/YashKandalkar" target="_blank" rel="noreferrer">
                                <img className={styles.profile} src={robin} alt="image" />
                            </a>
                            <h3>Name</h3>
                            <p>Gsoc'22 Mentee</p>
                        </div>
                        <div>
                            <a href="https://github.com/radistoubalidis" target="_blank" rel="noreferrer">
                                <img className={styles.profile} src={robin} alt="image" />
                            </a>
                            <h3>Name</h3>
                            <p>Gsoc'22 Mentee</p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}

export default Hello;
