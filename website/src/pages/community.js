import React, { forwardRef } from 'react';
import Layout from '@theme/Layout';
import styles from './community.module.css';
import CommunityCard from '../components/CommunityCard';
import { FixedSizeList as List } from 'react-window';
import MeetingCard from '../components/PastMeetingCard';
import { pastMeetings, upcomingMeetings } from '../../communityData/meetings';

const Community = () => {
  return (
    <Layout title='Community'>
      <div className={styles.communityBody}>
        <div>
          <h1 className={styles.communityTitle}>Community</h1>
        </div>
        <section id='initiatives'>
          <h3 className={styles.communitySubtitle}>Our Community Initiatives</h3>
          <div className={styles.communityRow}>
            <div className={styles.communityItem}>
              <CommunityCard title='LFX' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed odio tellus. Aliquam ac velit et mauris rhoncus pharetra.' btnText='Click Here' />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard title='GSoD' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed odio tellus. Aliquam ac velit et mauris rhoncus pharetra.' btnText='Click Here' />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard title='Outreach' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed odio tellus. Aliquam ac velit et mauris rhoncus pharetra.' btnText='Click Here' />
            </div>
          </div>
        </section>
        <section id='involvement'>
          <h3 className={styles.communitySubtitle}>Get Involved</h3>
          <div className={styles.communityRow}>
            <div className={styles.communityItem}>
              <CommunityCard title='GitHub' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed odio tellus. Aliquam ac velit et mauris rhoncus pharetra.' btnText='Click Here' />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard title='Slack' description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed odio tellus. Aliquam ac velit et mauris rhoncus pharetra.' btnText='Click Here' />
            </div>
          </div>
        </section>
        <section id='meetings'>
          <h3 className={styles.communitySubtitle}>Our Meetings</h3>
          <div className={styles.communityRow}>
            <div className={styles.communityMeeting}>
              <h5 className={styles.meetingTitle}>Past Meetings</h5>
              <List
                height={500}
                itemCount={pastMeetings.length}
                itemSize={100}
                width="90%"
                itemData={{ isCompleted: true }}
              >
                {MeetingCard}
              </List>
            </div>
            <div className={styles.communityMeeting}>
              <h5 className={styles.meetingTitle}>Upcoming Meetings</h5>
              <List
                height={500}
                itemCount={upcomingMeetings.length}
                itemSize={100}
                width="90%"
                itemData={{ isCompleted: false }}
              >
                {MeetingCard}
              </List>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Community;
