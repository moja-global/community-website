import React from 'react';
import JsonData from './all-contributors-data.json';
import styles from './teamcard.module.css';


const JsonDataDisplay = ()  => {
  
  const DisplayData = JsonData.map((info) => {

    return (
           <div className={styles.communityBody}>
            <div className={styles.card}>
              <img className="avatar__photo avatar__photo--xl" src={info.avatar_url} />
            <h3 className={styles.projects}>{info.name}</h3>
              <p className={styles.projects}>Profile: <a className={styles.link} href={info.profile}>{info.github_username}</a></p>
              <p className={styles.projects}>Projects Contributed to:  </p>
              <p>
              {info.projects.map((item) => (
                <p className={styles.item}><label className={styles.button} key={info.name}>
                  {item}
                </label></p>
              ))}
              </p>
               </div>
                </div>
    );
  });
  return <div className={styles.communityBody}>{DisplayData}</div>;
};

export default JsonDataDisplay;