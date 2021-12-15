import React from 'react';
import JsonData from '../../contributors.json';
import styles from './teamcard.module.css';

const JsonDataDisplay = () => {
  const DisplayData = JsonData.map((info) => {
    return (
      <div key={info.username} className={styles.card}>
        <a href={info.url}>
          <img
            height="23px"
            width="32px"
            alt="github-Profile"
            className="avatar__photo avatar__photo--xl"
            src={info.photoUrl}
          />{' '}
        </a>{' '}
        <a href={info.url}>
          <h3 className={styles.username}> {info.username} </h3>{' '}
        </a>{' '}
        <p> Projects Contributed to: </p>{' '}
        <p className={styles.projects}>
          {' '}
          {info.projects.map((item) => (
            <a key={info.username} href={item.projectUrl}>
              {' '}
              <p className={styles.item}>
                <label className={styles.button} key={info.username}>
                  {' '}
                  {item.projectName}{' '}
                </label>{' '}
              </p>{' '}
            </a>
          ))}{' '}
        </p>{' '}
      </div>
    );
  });
  return <div className={styles.projectContainer}> {DisplayData} </div>;
};

export default JsonDataDisplay;
