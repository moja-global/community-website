import React from 'react';
import Layout from '@theme/Layout';
import styles from './initiatives.module.css';
import CommunityCard from '../components/CommunityCard';
import { FixedSizeList as List } from 'react-window';
import MeetingCard from '../components/PastMeetingCard';
import { pastMeetings, upcomingMeetings } from '../../websiteData/meetings';
import LFXLogo from './../../static/img/linux.png';
import GSODLogo from './../../static/img/gsod.webp';
import GSOCLogo from './../../static/img/gsoc.png';
import OutreachyLogo from './../../static/img/Outreach.png';
import GithubLogo from './../../static/img/github.png';
import SlackLogo from './../../static/img/slack.png';

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
                image={LFXLogo}
                btnLink="/community/mentorship#linux-foundation-mentorship/"
              />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard
                title="Google Season of Docs"
                image={GSODLogo}
                btnLink="/community/mentorship#google-season-of-docs/"
              />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard
                title="Outreachy Internships"
                image={OutreachyLogo}
                btnLink="/community/mentorship#outreachy-internships/"
              />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard
                title="Google Summer of Code"
                image={GSOCLogo}
                btnLink="/community/mentorship#google-summer-of-code/"
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
                image={GithubLogo}
                btnLink="https://github.com/moja-global"
              />
            </div>
            <div className={styles.communityItem}>
              <CommunityCard
                title="Slack"
                image={SlackLogo}
                btnLink="https://join.slack.com/t/mojaglobal/shared_invite/zt-o6ta1ug0-rVLjAo460~d7JbZ~HpFFtw"
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
