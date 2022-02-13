import React from 'react';
import Layout from '@theme/Layout';
import styles from './initiatives.module.css';
import CommunityCard from '../components/CommunityCard';
import meetings from '../../websiteData/meetings';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import LFXLogo from './../../static/img/linux.png';
import GSODLogo from './../../static/img/gsod.webp';
import GSOCLogo from './../../static/img/gsoc.png';
import OutreachyLogo from './../../static/img/Outreach.png';
import GithubLogo from './../../static/img/github.png';
import SlackLogo from './../../static/img/slack.png';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

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
          <div className={styles.calendarWrapper}>
            <Calendar
              className={styles.Calendar}
              localizer={localizer}
              events={meetings}
              selectable={true}
              views={['month', 'week', 'agenda']}
              onSelectEvent={(event) => console.log(event.gmeetLink)}
              style={{ height: 400 }}
            />
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Community;
