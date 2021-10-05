---
id: mentorship
title: Mentorship
---

Help fight climate change from your keyboard! moja global specialises in software for monitoring greenhouse gas emissions and removals from land use and landuse change. We participate in various mentorship programs which offers a generous stipend and an exceptional working experience to contributors. We also assist new contributors with the software development process, learning how to collaborate with others and how to get the most out of the software development lifecycle.

## Outreachy Internships

Outreachy provides paid, remote, three-month internships to applicants who identify themselves as women (both cis and trans), trans men, non-binary people, and genderqueer. The aim of this internship is to support diversity in Free and Open Source Software (FOSS) and uplift the under-represented sections of the society.

The Outreachy internship at moja global for the December 2021 to March 2022 round will be coordinated by [Andrew O'Reilly-Nugent](https://github.com/aornugent) and [Yo Yehudi](https://github.com/yochannah).

### Current Project: **Climate change: extend models of forest carbon pools**.

Land plays an important role in global cycles of greenhouse gases (GHG). Land use activities result in emissions and removals of GHG to the atmosphere. The Fifth Assessment report of the Intergovernmental Panel on Climate Change (IPCC) indicates that the Agriculture, Forestry and Other Land Use (AFOLU) sector is responsible for almost a quarter (~10–12 Gt CO2eq/yr) of anthropogenic GHG emissions mainly from activities such as deforestation, forest degradation and also from livestock, soil, nutrient management and agricultural burning.

Moja global's Full Lands Integration Tool (FLINT) has been developed to support the GHG inventories development and the implementation of mitigation actions in the AFOLU sector. But, some functions and features of the FLINT need to be refined or added in order to fully support mitigation actions and establishment and maintenance of sustainable GHG inventory management systems in developing countries.
The UNFCCC secretariat has initiated a collaboration with moja global to refine the FLINT and make it available to developing countries across all regions.

This project focuses on the development of FLINT module to account for the dynamics of carbon from forest living biomass into dead organic matter pools (DOM). A DOM module simulates annual changes in the C stocks of each pool that occur due to growth, biomass turnover, litterfall, transfer and decomposition as well as complex disturbances that can alter biomass turnover, and transfers between DOM pools (litter, dead wood and soil).

You will work with moja global ecosystem modelling experts to identify candidate models for describing DOM dynamics in forestry, collect data and parameter calibrations to test and evaluate the DOM module. We need candidates with great communication skills in writing, project documentation and data management. You will be working as part of a team to document our project. You will develop expertise in climate change research, data analysis and team collaboration.

Skills in Python, R or C++ are desirable and any code developed under this project will be open source to facilitate GHG models by experts around the world. We are focusing on Latin America, and Spanish speaking candidates are encouraged to apply!

### Past Projects

- Climate change speedrun: benchmark and profiling of a C++ MRV library by [Sree Vidhya](https://github.com/vidhya001) and [Debolina Ghatuary](https://github.com/SlipperyGnome).

## Linux Foundation Mentorship

### Current Project: **Cloud native measurement, reporting and validation of carbon emissions**

The Full Lands INtegration Tool (FLINT) is a platform for estimating greenhouse gas emissions at local, national and global scales.

This project aims to build a cloud deployment framework for rapid deployment of FLINT implementations. This framework will be used in a continuous deployment pipeline (CD) for integration testing and the delivery of FLINT as a service (FLINTcloud) for demonstration purposes.

We hope to offer an easy entry point for new users to evaluate the FLINT platform and provide a blueprint for new users to roll their own FLINTcloud deployments. This is critical to help drive the adoption of FLINT and help scale up the monitoring, reporting and validation of carbon emissions and sequestration from land use and land use change around the world.

This will involve:

1. Publishing a design for the complete FLINTcloud solution, detailing the required components, technologies and endpoints to be exposed.
2. Exposing the core FLINT routines by wrapping the existing command line interface in a REST API.
3. Creating a simple script to install the prerequisite libraries, FLINT and its modules as a standalone microservice.
4. Creating the deployment framework and setting up a CD pipeline on commodity cloud hardware, favouring automation wherever possible (e.g. infrastructure-as-code).
5. Providing new documentation for the cloud deployment procedure.

The current mentees are [Shloka Gupta](https://mentorship.lfx.linuxfoundation.org/mentee/bb85aa86-de96-48cf-b5dd-fba4b75c5bce) and [Rajiv Singh](https://mentorship.lfx.linuxfoundation.org/mentee/817f5835-af24-4508-93e9-dac5fdf44ff8). The past mentees were [Mohammad Warid
](https://mentorship.lfx.linuxfoundation.org/mentee/b5ef75ed-5645-433d-a660-99b23346ea35), [Shubham Karande](https://mentorship.lfx.linuxfoundation.org/mentee/3249e1c5-4140-41c4-97f4-15eda5ed604d), [Sneha Mishra](https://mentorship.lfx.linuxfoundation.org/mentee/d20558aa-af22-4a33-9bc4-1941b5a8f329), [Arnav Tiwari](https://mentorship.lfx.linuxfoundation.org/mentee/0ce8259f-3cd5-4062-a1f8-8f155e9bb143) and [Vijaya Laxmi Durga Alekhya Nynala](https://mentorship.lfx.linuxfoundation.org/mentee/9d6563b6-f8c4-4e20-9a81-0fdd93a1c0ca).

### Past Projects

- [Environmentally Sensitive Growth Module and Online Courses for Forest Greenhouse Gas Estimates](https://mentorship.lfx.linuxfoundation.org/project/b96ed4f4-a4e4-477a-abbf-156f417f933e) by [Youngjin KO](https://mentorship.lfx.linuxfoundation.org/mentee/b980de92-89b4-4d9b-8383-b8b48842a251) and [Saloni Garg](https://mentorship.lfx.linuxfoundation.org/mentee/4617c2f6-666f-431c-95c9-4b93320106bf).

## Google Season of Docs

[Google Season of Docs](https://developers.google.com/season-of-docs) is an annual program by Google, providing an opportunity for technical writers to contribute to open-source software. Season of Docs provides support for open source projects to improve their documentation and gives professional technical writers an opportunity to gain experience in open source.

### Current Project: **Develop a content strategy to consolidate and promote documentation for the FLINT**

The goal of this project is to develop a content strategy that makes our different documentation types easy to navigate, access and understand. In addition to the core FLINT library, our community has developed a small ecosystem of interrelated tools and platforms. As our community has grown, so has our documentation, some of which remains siloed or inaccessible to end-users and developers who would like to work with us.

Right now, new users experience difficulty understanding how moja global projects can be used or are interrelated. Last year, our GSoD efforts led to the development of a website to onboard new contributors, a ReadTheDocs environment for our technical documentation, and completed documentation for the moja global Reporting Tool. We’d now like to extend these resources and by adding easy to follow examples of how the FLINT works and can be used with other tools to our documentation and contributors websites.

The primary goals of this project are to:

- Standardize documentation across all of our repositories and improve navigation between moja global projects
- Promote user documentation on how to conduct and configure FLINT using the JSON configuration application.
- Migrate our control flow and architecture diagrams to our contributor’s site making it accessible to a wide audience
- Create a list of available FLINT modules for users to customise their land use change models.
- Publish a tutorial on how to post-process the FLINT results using the moja global Visualisation and Reporting tools.

In order to facilitate a higher volume of documentation and communications, we also propose to develop a system for publishing case studies in addition to our technical documentation. We would like to add markdown documents to our contributors website for thematic discussions that appeal to a wide range of audiences.

The current technical writers for the project are [Harsh Mishra](https://github.com/harshcasper) and [Sarthak Kundra](https://github.com/sarthakkundra).

### Past projects

- [Documentation of Reporting Tool Code](https://docs.google.com/document/d/1ulyu_Wd5hH1Pu1E3tuoK0Zm4Y6u6l8R6VxxlGXh5IqY/edit) by [Anthony](https://github.com/Tonnix).
- [Documentation of Technical Onboarding Guide for FLINT](https://docs.google.com/document/d/e/2PACX-1vQFSy1F4_hJI4_-c-dkEGjgnriZzTvYGqbIQ2BLw6y2_cxFVAmbW25gkwMF4PY_jMEMo8paeiN1ge9R/pub) by [Sneha Mishra](https://github.com/tlazypanda).

## Google Summer of Code

Google Summer of Code is an annual program by Google, which provides an opportunity to Student Developers who are looking to get started with Open-Source development. Moja global is not participating in Google Summer of Code 2021.

### Past projects

- [Develop FLINT JSON User Interface](https://summerofcode.withgoogle.com/archive/2020/projects/5864431432499200/) by [Abhishek Garain](https://github.com/abhi211199).
- [Interactive Visualization Tool for GCBM](https://summerofcode.withgoogle.com/archive/2020/projects/5487467823628288/) by [Abhineet](https://github.com/abhineet97).
- [Develop a module for agricultural soils for FLINT](https://summerofcode.withgoogle.com/archive/2020/projects/5367749938774016/) by [Sulay Shah](https://github.com/sulays).
