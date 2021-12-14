import React from 'react';
import JsonData from '../../contributors.json'
import styles from './teamcard.module.css';


const JsonDataDisplay = ()  => {
  
  const DisplayData = JsonData.map((info) => {

    return (
           <div className={styles.communityBody}>
            <div className={styles.card}>
              <img className="avatar__photo avatar__photo--xl" src={info.photoUrl} />
              <a className={styles.link} href={info.url}><h3 className={styles.projects}>{info.username}</h3></a>
              <p className={styles.projects}>Projects Contributed to:  </p>
              <p>
              {info.projects.map((item) => (
                <p className={styles.item}><label className={styles.button} key={info.name}>
                  <a className={styles.link} href ={item.projectUrl}>{item.projectName}</a>
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