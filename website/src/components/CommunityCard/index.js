import React from 'react'
import styles from './communitycard.module.css';

const CommunityCard = ({ title, description, btnLink, btnText }) => {
    return (
        <div className={styles.card}>
            <h4>{title}</h4>
            <p>{description}</p>
            <button className={styles.button}>{btnText}</button>
        </div>
    )
}

export default CommunityCard
