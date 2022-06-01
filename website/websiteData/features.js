import React from 'react';
const features = [
  {
    title: 'Getting Started',
    description: (
      <ul className="features__list">
        <li>
          <a href="/docs/">Introduction to moja global</a>
        </li>
        <li>
          <a href="/docs/about-moja-global">About moja global</a>
        </li>
        <li>
          <a href="/community/technical-steering-committee">Technical Steering Committee</a>
        </li>
        <li>
          <a href="/community/governance">Governance model</a>
        </li>
        <li>
          <a href="/community/working-groups/doc-wg">Working Groups</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Projects',
    description: (
      <ul className="features__list">
        <li>
          <a href="/docs/FLINT/About">FLINT</a>
        </li>
        <li>
          <a href="/docs/FLINT-Cloud/About">FLINT Cloud</a>
        </li>
        <li>
          <a href="/docs/FLINT-Reporting-Tool/About">FLINT Reporting Tool</a>
        </li>
        <li>
          <a href="/docs/FLINT-UI/About">FLINT Visualization Tool</a>
        </li>
        <li>
          <a href="/docs/GCBM/About">GCBM</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Contributing',
    description: (
      <ul className="features__list">
        <li>
          <a href="/community/contributing">Contributing guidelines</a>
        </li>
        <li>
          <a href="/community/code-contribution">Code contributions</a>
        </li>
        <li>
          <a href="/community/docs-contribution">Documentation contributions</a>
        </li>
        <li>
          <a href="/community/management-contribution">Management contributions</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'How To Guides',
    description: (
      <ul className="features__list">
        <li>
          <a href="https://docs.moja.global/en/latest/prerequisites/index.html">
            FLINT Prerequisites
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/DevelopmentSetup/index.html">
            FLINT Development Setup
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/GCBMDevelopmentSetup/index.html">
            GCBM Development Setup
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/DeveloperWorkflow/index.html">
            GitHub Workflow
          </a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/DocumentationStyleGuide/index.html">
            Writing documentation
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Mentorship & Initiatives',
    description: (
      <ul className="features__list">
        <li>
          <a href="/initiatives">Community initiatives</a>
        </li>
        <li>
          <a href="/community/mentorship#outreachy-internships">Outreachy internships</a>
        </li>
        <li>
          <a href="/community/mentorship#google-season-of-docs">Google Season of Docs</a>
        </li>
        <li>
          <a href="/community/mentorship#google-summer-of-code">Google Summer of Code</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Safety & Support',
    description: (
      <ul className="features__list">
        <li>
          <a href="/community/code-of-conduct">Community Code of Conduct</a>
        </li>
        <li>
          <a href="/community/support">Community support</a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Documentation',
    description: (
      <ul className="features__list">
        <li>
          <a href="https://docs.moja.global/">moja global technical documentation</a>
        </li>
        <li>
          <a href="https://docs.moja.global/projects/flintcloud/en/latest/">FLINT Cloud</a>
        </li>
        <li>
          <a href="https://docs.moja.global/projects/flint-reporting/en/latest/">FLINT Reporting</a>
        </li>
        <li>
          <a href="https://docs.moja.global/projects/flint-ui/en/latest/">FLINT UI</a>
        </li>
        <li>
          <a href="https://docs.moja.global/projects/GCBM-Chile-Data-Preprocessing-Tools/en/latest/">
            GCBM Chile Pre-Processing Tools
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Scientific Impact',
    description: (
      <ul className="features__list">
        <li>
          <a href="https://www.researchgate.net/publication/341041237_Modelling_forest_carbon_dynamics_for_REDD_using_the_Generic_Carbon_Budget_Model_GCBM_Pilot_Project_Los_Rios_Region_-_Chile">
            Modelling forest carbon dynamics for REDD+
          </a>
        </li>
        <li>
          <a href="https://cbmjournal.biomedcentral.com/articles/10.1186/s13021-020-00155-2">
            Climate change mitigation in British Columbia’s forest sector
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: 'Miscellaneous',
    description: (
      <ul className="features__list">
        <li>
          <a href="https://docs.moja.global/en/latest/faq.html">Frequently Asked Questions</a>
        </li>
        <li>
          <a href="https://docs.moja.global/en/latest/contact.html">Join moja global</a>
        </li>
        <li>
          <a href="/tutorial/tutorial-introduction">Tutorials</a>
        </li>
        <li>
          <a href="/case-studies/introduction">Case studies</a>
        </li>
      </ul>
    ),
  },
];

export default features;
