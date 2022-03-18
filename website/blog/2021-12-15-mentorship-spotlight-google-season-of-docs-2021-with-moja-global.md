---
title: Mentorship Spotlight - Google Season of Docs 2021 with moja global
description: Mentorship Spotlight blog on the success of moja global's participation in the Google Season of Docs 2021
tags: ['moja-global','google-season-of-docs','open-source','internships','mentorship','documentation']
image: https://i.imgur.com/PIgWgEE.png
authors: aornugent
hide_table_of_contents: false
slug: google-season-of-docs-2021
---

[Google Season of Docs](https://developers.google.com/season-of-docs) is an annual program by Google, providing an opportunity for technical writers to contribute to open-source software. Moja global has been participating in Google Season of Docs (GSoD) for past two years. The goal of the GSoD '21 project was to develop a content strategy that makes our different documentation types easy to navigate, access and understand.

In addition to the core FLINT library, our community has developed a small ecosystem of interrelated tools and platforms. As our community has grown, so has our documentation, some of which remains siloed or inaccessible to end-users and developers who would like to work with us. The selected interns were [Harsh Mishra](https://github.com/harshcasper) and [Sarthak Kundra](https://github.com/sarthakkundra).

![Google Season of Docs + Moja global](/img/google-season-of-docs-2021.png)

## Problem Statement

Right now, new users experience difficulty understanding how moja global projects can be used or are interrelated. Back in 2020, our GSoD efforts led to the development of a website to onboard new contributors, a ReadTheDocs environment for our technical documentation, and completed documentation for the moja global Reporting Tool. We were looking to extend these resources and by adding easy to follow examples of how the FLINT works and can be used with other tools to our documentation and community website.

The primary goals of the project were to:

- Standardize documentation across all of our repositories and improve navigation between moja global projects
- Promote user documentation on how to conduct and configure FLINT using the JSON configuration application.
- Migrate our control flow and architecture diagrams to our contributor’s site making it accessible to a wide audience
- Create a list of available FLINT modules for users to customise their land use change models.
- Publish a tutorial on how to post-process the FLINT results using the moja global Visualisation and Reporting tools.

## Project planning

moja global has very active mentorship pathways and there are always new proposals waiting for an opportunity. To develop our GSoD 2021 proposal, we discussed areas of interest with new mentors, some of whom were GSoD mentees in 2020. After the initial development, our proposal was presented to the Technical Steering committee for feedback and approval, before being published to Github.

The 2021 GSoD program took a different format to typical mentorship programs and allowed us to submit a budget that fit our project proposal (rather than offering pre-defined amounts). However, we still wanted to support contributions from new mentees and estimated mentorship stipends that were aligned with the more generous programs we participate in. 

Our project had two clear workstreams, and enough funding to support two mentees over a five month period. The budget example provided in the GSoD template was very useful and indicated that small amounts for secondary contributions and swag would be acceptable - however we are still exploring a cost effective way to deliver these awards to our community.

We hired two excellent technical writers Harsh Bardhan and Sarthak Kundra, both of whom we recruited by sharing our project proposal across social media. Our mentors Sabita Rao, Sagar Utekar, Sneha Mishra and Andrew O’Reilly-Nugent were existing community members who volunteered to take part. Our project was also supported by subject matter experts Mohit Kumar, Shubham Karande and Mohammad Warid who make regular contributions to our community.

We scoped our project to be completed within a five month period. We began with a review of the existing documentation, spread across different platforms and repositories, and developed a strategy for consolidating this information.

## Project outcome

### Community Website

During Google Season of Docs, we migrated the entire moja global community website from ReactJS, Bootstrap to Docusaurus. During the course of this migration, we have adopted all the core features that were present in the community website previously and deployed it on Vercel, with a gracious sponsorship from the Vercel team. You can see the results at: https://community.moja.global/

Because Docusaurus was a significantly simpler platform, that renders Markdown and JSX documents, we were able to increase the number of contributions to the site and now have several project pages, with case studies, and an active blog. Through the community website, we led our first i18n internationalization initiative, by releasing some of our documentation in Spanish with the help of community contributors.

In addition to the lifetime pro access to Vercel under it’s open source software sponsorship grant, the community website was listed on algolia doc search which allows crawlers to easily land on the website and our website is currently in queue to be listed on Docusaurus’ project showcase page.

![Moja global Community Website](/img/moja-global-community-website.png)

### Extended our Technical Documentation

Moja global also hosts more technical documentation on ReadTheDocs at https://docs.moja.global. As part of Google Season of Code, we have consolidated documentation from a number of Github repositories, wikis and other Google Docs into a single documentation repository. 

We further established reStructuredText documentation for several projects, which are now hosted as project specific documentation on ReadTheDocs.

Project | Documentation Website
---|---
FLINT UI | https://docs.moja.global/projects/flint-ui/en/latest/ 
GCBM Chile Data Preprocessing | https://docs.moja.global/projects/GCBM-Chile-Data-Preprocessing-Tools/en/latest/ 
FLINT Reporting | https://docs.moja.global/projects/flint-reporting/en/latest/

Lastly, we added a documentation style guide to facilitate and will be publishing a content strategy document to help steer the newly founded moja global Documentation Working Group.

One of the first actions of the Documentation Working Group was to define a standardised README. To further boost the contributions and give a high-level overview of the community and the project involved, we also established an organization README that is directly visible on the GitHub organization: https://github.com/moja-global.

### Metrics

We set an ambitious goal of increasing community engagement with our documentation. Our website had 326 active visitors in the month of October and we had 195 documentation related pull requests during Google Season of Documentation, smashing our goals of 100 new visitors and 70 new pull requests. 

We ranked the community website SEO benchmarks on seoptimer, a popular SEO optimization tool and received an A+ for performance and an A for Usability. Our weakest score was Social with a C, which we aim to improve in the future.

In the past six months our community size has increased 400% due to the active engagement of our Documentation Working Group which provides a fantastic entry point for new contributors. In fact, our Slack channel became so popular that we have exceeded the tiered limit and no longer have access to the full history of our #documentation channel, meaning that we cannot assess the increase in activity. However we gained at least 50 new contributors to our projects which is a sign of phenomenal growth.

### Analysis

Our team worked well together. Having clear milestones and regular meetings made sure everyone was on the same page. Harsh and Sarthak worked independently, but having a large group of mentors meant that they were able to have any questions answered quickly.

One especially positive outcome was the increased engagement of our community. Many people want to contribute to our projects and find documentation an accessible entry point to make valuable new additions. We set up a Documentation Working Group to harness this energy and now lead fortnightly meetings for people to develop new connections and get to know our community.

![Moja global GitHub organization](/img/moja-global-github-organization.png)

## Conclusion

Google Season of Documentation 2021 was a resounding success. I’d like to thank Harsh and Sarthak for their amazing contributions and excellent attitudes throughout the project. It has been a pleasure working with such professional documentation experts.

We want to also thank Google for supporting our project and look forward to participating in Google Season of Docs in 2022. The new format of the program, submitting a proposal with monetary allocation to be distributed as we saw fit, provided additional flexibility and allowed us to structure the program in a way that maximised the value of this generous funding opportunity.

Through good documentation, we have seen a new energy in our community. We hope to build this momentum and continue producing a great open source experience for anyone that wants to participate. Only with your help can we solve this climate challenge.
