---
title: 'GSoC: GCBM Simulation Editor - Status Report'
description: Yash Kandalkar's GSoC Final Evaluation - Weekly Report
tags: ['moja-global', 'gsoc', 'open-source', 'internships', 'mentorship']
authors: YashKandalkar
slug: gsoc-gcbm-editor-status-report
hide_table_of_contents: false
---

Hello everyone! Hope you're doing well! This is the final blog of my GSoC journey. It'll contain a brief of everything that I have worked on during my term and what's left to do.

### Mentors

A huge thanks to [Andrew O'Reilly-Nugent](https://github.com/aornugent) and [Harsh Mishra](https://github.com/HarshCasper) for helping me at every step of the project. I cannot thank them enough for encouraging me throughout the project and guiding me in the right direction.

### Community Members

Special thanks to all these community members for helping me throughout the project: [Padmaja](https://github.com/padmajabhol), [Namya](https://github.com/Namyalg), [Shloka](https://github.com/chicken-biryani), [Sanjay](https://github.com/SanjaySinghRajpoot), [Janvi](https://github.com/Janvi-Thakkar), and [Palak](https://github.com/Palaksharma23). I wouldn't have been able to finish the project without their help.

### Community Bonding Period

I started working on the project by researching on the different inputs required for running the GCBM Simulation. I gathered information from Andrew, Padmaja and Namya regarding the configs which can be edited by the users on the web interface. During this period, we also decided to migrate the project from Vue 2 to Vue 3 as it is the latest version of Vue and supports more libraries. I worked on the migration process and updated all the old libraries to their Vue 3 compatible versions and updated some legacy code. I also started working on the new components and removing the old ones in the GCBM Simulation Editor.

![Local Domain Configuration UI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/qkkuv73vem49hlp6qwfr.png)

Relevant PRs:

- [Migrate Vue-2 to Vue-3 for FLINT-UI #294](https://github.com/moja-global/FLINT-UI/pull/294)
- [feat: add Sidebar, LocalDomain in GCBM #313](https://github.com/moja-global/FLINT-UI/pull/313)

### Week 1:

From the last week of community bonding period I started creating components of each configuration parameter. In this week, I created the UI for the Modules configuration. The users can enable and disable (add or remove) modules that'll be included in the run. Some modules, like the Decay Module, also contains configurable variables.

![Modules](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/b834tlcohaw9ukovi8r4.png)

Relevant PRs:

- [feat: add Modules components for GCBM run #320](https://github.com/moja-global/FLINT-UI/pull/320)
- [feat: add Variables config for GCBM run #322](https://github.com/moja-global/FLINT-UI/pull/322)

### Week 2:

In this week I worked on creating the Pools config. Users can edit different pool values and search the name of the pools in a search bar.

![Pools](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/oo180779rbo75f9ne6ic.png)

![Search bar Pools](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/aumoelj5yrt0rjjjae21.png)

Relevant PRs: [feat: add Pools config in GCBM run #325](https://github.com/moja-global/FLINT-UI/pull/325)

### Week 3:

In this week, I added a Create Simulation page which will be the entry point of the simulation run and added sub-menus in the Upload Section for different file types (disturbances, classifiers, input DB and miscellaneous).

![Create Simulation UI](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gw4019wn3m35pbbaf72e.png)

Relevant PRs:

- [chore: redid the file and menu structure #331](https://github.com/moja-global/FLINT-UI/pull/331)

### Week 4:

I started working on the UI for the Upload section. Here, the major work was of the JSON config editor. There was a requirement for a GUI editor to make it easier for non-developers to edit the JSON attributes easier. I used the [vue3-json-editor](https://github.com/joaomede/vue3-json-editor) library for this functionality.

![Upload section](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vz2jz35pxz85qrz9astq.png)

Relevant PRs: https://github.com/moja-global/FLINT-UI/pull/332

### Week 5:

I added the UI for editing column names in the DB Editor. After the user uploads a database file, the server responds with the table and attribute names. The requirement was to provide users the option to edit table and attribute names on the frontend. I added a Edit button near the database table which when pressed, makes all the attribute names editable.

![database editor](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/jamf3la7axum5kaoag40.png)

Relevant PRs:

- [feat: add UI for Spinup, Run simulation, DB Editor, Integrate upload endpoints #347](https://github.com/moja-global/FLINT-UI/pull/347)

### Week 6:

Connected some configuration like Local Domain with the Vuex store. I added vue-persist so that the configurations made on the frontend will persist between website reloads.

Relevant PRs:

- [feat: add UI for Import Simulation modal, connect LocalDomain to the vuex store #355](https://github.com/moja-global/FLINT-UI/pull/355)

### Week 7:

Added Import Simulation feature in the sidebar. Here, users can upload all the files required by the simulation. If configuration files are uploaded, they will be read using the FileReader API and the UI will be updated accordingly.

![import simulation](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q0g88flybnse4xxletus.png)

### Week 8:

Added the UI and functionality for changing table names in the db editor.

![change table names](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eadbj952dc4w03fw8f0o.png)

### Week 9:

Worked on adding an Export Simulation feature so that the users can download the configurations in JSON format if they want to continue configuring the simulation later. These JSON configuration files can be uploaded in the Import Simulation feature, which will update the UI accordingly.

### Week 10:

In this week, I worked on creating a _Tour_ for the simulation, which will help new users understand the flow of the simulation editor.

### Further Steps:

In the coming week, I will be writing tests for the components I created and documenting the features which will help new contributors understand the code and continue enhancing the project.

#### Previous Blogs:

- [GSoC Blog - Week 1](https://dev.to/yashkandalkar/gsoc-blog-week-1-4c7p)
- [GSoC Blog: Phase 1](https://dev.to/yashkandalkar/gsoc-blog-phase-1-5ek5)
