---
title: Google Summer of Code 2022 - Building UI Library for Moja Global
description: Blog by Palak Sharma describing all the work she did in her GSoC 2022 period with Moja Global.
tags: ['moja-global','GSoC','Google-Summer-of-Code','open-source','GSoC-2022']
authors: Palaksharma23
slug: GSoC-2022-Palak-Sharma
hide_table_of_contents: false
---
 
 
 
 
| Project: [Building UI library for moja global](https://summerofcode.withgoogle.com/programs/2022/projects/ZqYBMwQd)
 
| Project Details |  Useful Links  |
|------------|---------|
| Mentor       |  [Harsh Mishra](https://github.com/HarshCasper), [Gopinath Balakrishnan](https://www.linkedin.com/in/bgopi/) |          
| Student |   [Palak Sharma](https://github.com/Palaksharma23)       |
| Github Repository for the project | [GitHub](https://github.com/moja-global/ui-library) |        
| Npm Package      |  [NPM](https://www.npmjs.com/package/@moja-global/mojaglobal-ui)   |            
| Documentation     | [Storybook](https://moja-global-ui-library.vercel.app/)       |            
 
 
## Project Description✍
 Moja global is a not-for-profit, collaborative project that brings together a community of experts to develop open-source software that allows users to accurately and affordably estimate greenhouse gas emissions and removals from the AFOLU sector.
 
This year in Google Summer of Code 2022, I have worked on building a faster, lightweight, user-friendly, and cross-browser-compatible UI library as a stand-alone dependency for moja global projects. I have worked on building a UI library having pre-written or ready-made code for various widely used components across all the repositories of moja global that future developers and users can use in their projects just by installing the package and running two or three import commands😀.
 
 
 
The Moja global User-interface (UI) library developed under this project serves the following purpose🎉
 
  -  It aims to bring forward an intuitive, consistent, and easy-to-use interface that can help our developers within the User-Interface working group and users to quickly accomplish their tasks.
  - It helps us mitigate popular UI-development issues like inconsistent user experience, performance issues, accessibility requirements, and more.
- It improves the design & development workflow and meets the acceptable web accessibility requirements.  
- Using UI Library components is easy as most of the code is written in the documentation itself.
 
 
## My Contributions🎯
  The main aspects of my contributions are🎓
 
 
|     Contribution       | Tools and Technologies used |
|------------|---------|
  | Migration of current projects from Vue2 to Vue3   |    Vuejs     |      
| Designing  |   Figma  |  
| Implementation      |    Vuejs     |          
| Documentation     |      Storybook   |        
| Building       |     Rollup    |      
| Testing |     Axe    |      
| Launch   |    Yarn     |  
| Integration of UI library into existing projects  |    UI library     |      
 
   
### Migration of existing project from Vue2 to Vue3 🔁
 
  Initially, I worked on migrating the existing project from Vue version 2 to Vue version 3, to make it compatible to use the UI library which is based on Vue version 3
 
  These are the Pull requests, I made for the migration of the existing project
   - https://github.com/moja-global/FLINT-UI/pull/311
   - https://github.com/moja-global/FLINT-UI/pull/305
   - https://github.com/moja-global/FLINT-UI/pull/304
   - https://github.com/moja-global/FLINT-UI/pull/303
   - https://github.com/moja-global/FLINT-UI/pull/302
   - https://github.com/moja-global/FLINT-UI/pull/301
   - https://github.com/moja-global/FLINT-UI/pull/299
 
### Designing🌸
  After Migration, I worked on designing the components of the UI library according to the Moja Global brand guidelines.
  The designs can be found [here](https://www.figma.com/file/QBccI5A8ATyV5L3dDe0KmY/Components?node-id=0%3A1)
 
### Implementation & Documentation📝
  I did the Implementation and Documentation of the UI library simultaneously, I have added various components in the UI library with each being fully customizable, and accessible.
 
  These are the Pull requests, I made for the Implementation and Documentation of the UI library
 
   - https://github.com/moja-global/ui-library/pull/13
   - https://github.com/moja-global/ui-library/pull/15
   - https://github.com/moja-global/ui-library/pull/19
   - https://github.com/moja-global/ui-library/pull/20
   - https://github.com/moja-global/ui-library/pull/24
   - https://github.com/moja-global/ui-library/pull/25
   - https://github.com/moja-global/ui-library/pull/26
   - https://github.com/moja-global/ui-library/pull/27
   - https://github.com/moja-global/ui-library/pull/28
   - https://github.com/moja-global/ui-library/pull/30
   - https://github.com/moja-global/ui-library/pull/33
   - https://github.com/moja-global/ui-library/pull/34
   - https://github.com/moja-global/ui-library/pull/45
 
### Building👩‍💻
  Building the UI library is the main task of the project. I used vue rollup to build the UI library.
 
   - https://github.com/moja-global/ui-library/pull/35
   - https://github.com/moja-global/ui-library/pull/42
 
### Testing🔍
  For testing the components of the UI library, I have given two options to test in development mode as well as while making the pull request
 
   - https://github.com/moja-global/ui-library/pull/46
   - https://github.com/moja-global/ui-library/pull/47
 
### Launch🚀
  With the help of my mentor, the launch of the UI library has been automated. The launch happens as soon as the package version in package.json is changed.
 
### Integration of UI library into existing projects🎊
  We tested the UI library by integrating it in the fresh new Vue 3 project as well as in the existing moja global's project. It worked as expected in both.
  It is currently in use in FLINT UI
 
## Summary👩‍🎓
 
  The overall experience of GSoC has been amazing and full of learning. I learn many things like how to build a project from scratch, how to work with large codebase, etc. I would like to thank my mentors for always being there and I have learned a lot from them during the GSoC period and before🎀. I like the culture of moja global very much. All the mentors here are very friendly and very supportive. I learned the way open source works and the etiquette which should be followed while working on a real-life based project. I want to continue contributing to moja global in the future and wish to see moja global reaching heights of success :) 

 

