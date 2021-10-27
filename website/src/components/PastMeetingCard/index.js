import React from 'react';
import { pastMeetings, upcomingMeetings } from '../../../websiteData/meetings';
import styles from './MeetingCard.module.css';

const MeetingCard = ({ index, style, data }) => {
  const meeting = data.isCompleted ? pastMeetings[index] : upcomingMeetings[index];

  return (
    <div style={style}>
      <div className={styles.card}>
        <div className={styles.date}>
          <div>{meeting.dateHeld}</div>
          <a href={meeting.notes}>Notes</a>
        </div>
        <div className={styles.content}>
          <div className={styles.agenda}>{meeting.agenda}</div>
          <div className={styles.chair}>{meeting.chairedBy}</div>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
