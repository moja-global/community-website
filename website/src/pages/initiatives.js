import React from 'react';
import Layout from '@theme/Layout';
import styles from './initiatives.module.css';
import CommunityCard from '../components/CommunityCard';
import { FixedSizeList as List } from 'react-window';
import MeetingCard from '../components/PastMeetingCard';
import { pastMeetings, upcomingMeetings } from '../../communityData/meetings';

const Community = () => {
  return (
    <Layout title="Community">
      <div className={styles.communityBody}>
        <div>
          <h1 className={styles.communityTitle}>Community Initiatives</h1>
        </div>
        <section id="initiatives">
          <div className={styles.communityRow}>
            <div className={styles.communityItem}>
              <CommunityCard
                title="Linux Foundation Mentorship"
                description="The Linux Foundation is the parent organisation of moja global. Therefore, we actively participate and host our projects for the LFX Mentorship programme."
                btnLink="/community/mentorship#linux-foundation-mentorship/"
                btnText="Learn More"
              />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard
                title="Google Season of Docs"
                description="moja global participates in Google Season of Docs. We love technical writers who can bring in clarity about our projects with good documentation."
                btnLink="/community/mentorship#google-season-of-docs/"
                btnText="Learn More"
              />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard
                title="Outreachy Internships"
                description="moja global participates in Outreachy. We love to support under-represented groups in technology who can help accelerate our project growth."
                btnLink="/community/mentorship#outreachy-internships/"
                btnText="Learn More"
              />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard
                title="Google Summer of Code"
                description="moja global participates in Google Summer of Code. We love to host a wide range of contributors to help us accelerate our project growth."
                btnLink="/community/mentorship#google-summer-of-code/"
                btnText="Learn More"
              />
            </div>
          </div>
        </section>
        <section id="involvement">
          <h3 className={styles.communitySubtitle}>Get Involved</h3>
          <div className={styles.communityRow}>
            <div className={styles.communityItem}>
              <CommunityCard
                title="GitHub"
                description="We have a ton of open issues which could use your help and expertise. "
                btnText="Learn More"
              />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard
                title="Slack"
                description="We would love to know you better. Hop on and chat with the community."
                btnText="Join Us"
              />
            </div>
          </div>
        </section>
        <section id="meetings">
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
