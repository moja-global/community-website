---
title: Mentorship Spotlight - Asmi's experience as an Outreachy Intern
image: https://i.imgur.com/1oZ4fWI.png
description: Blog by Asmi Jafar detailing her experience as an Outreachy Intern with moja global and her accomplishments
tags: ['moja-global','outreachy','open-source','internships','mentorship']
authors: asmijafar20
slug: asmi-jafar-outreachy-2021-intern
hide_table_of_contents: false
---

I started my open source journey as an Outreachy intern with moja global. I was a beginner in the ways of open source development before I started contributing to the moja global community. I was selected as an Outreachy intern with the moja global community and received an opportunity to learn and implement new technologies. I had never participated in any open-source program before, but Outreachy provided me with a platform to showcase my expertise and gain new skills.

I started contributing by fixing good first issues at moja global while learning more about various projects and ecosystems. Later, I contributed to the Community Website by adding multiple new features and bug fixes. One of my significant contributions was developing the teams' page, which displays all the moja global contributors on the Community Website. Lastly, I have finished all the tasks given to participants to showcase their skills during my Outreachy contribution period. 

Over the past three months, I have worked with [Harsh Mishra](https://github.com/HarshCasper) on implementing Continuous Integration and Delivery (CI/CD) pipelines across the moja global repositories and centralizing the Moja Global docker images on the GitHub Container Registry. Along with it, I worked with [Anthony Kwaje](https://github.com/Tonnix) on the FLINT Reporting Tool while improving and delivering Java-based microservices! This blog would be documenting my experience and my project along with the key goals and metrics achieved.

## About the project

[Moja Global](https://github.com/moja-global) is a non-profit, collaborative project that brings together a community of experts to develop open-source software to help users accurately and affordably estimate greenhouse gas emissions and removals from forestry, agriculture, and other land uses (AFOLU). The flagship software is [FLINT](https://github.com/moja-global/FLINT), a second-generation tool aimed to facilitate the implementation and operation of land sector emissions estimation systems worldwide. FLINT provides a framework to progressively develop MRV-related systems, data, and capacities. 

Moja global's [FLINT Reporting tool](https://github.com/moja-global/FLINT.Reporting) provides business intelligence for analyzing and transforming FLINT output databases into helpful information and outputs. The goal of my project was to implement the CI/CD pipelines at Moja global and implement the framework for reproducible research. 

The project focuses on the FLINT reporting tool, its maintenance, and assisting in making it more user-friendly. I was also involved in implementing the CI/CD pipelines for the reporting tool using GitHub Actions and making it deployment ready. A significant part of the project also targets centralizing and migrating the docker images across the community GitHub Container Repository.

<p align="center">
  <img src="/img/flint-reporting-tool-system-purpose.png"  alt="FLINT Reporting Tool System and Purpose"></img>
  <figcaption><em>FLINT Reporting Tool System and Purpose</em></figcaption>
</p>

## Project outcomes

### Understanding FLINT ecosystem

The FLINT is considered as the framework itself - it doesn't do much unless we attach modules to it and make it an implementation. FLINT implementations extend the FLINT framework, and their respective images extend the FLINT base image. In our case for the FLINT implementation image, we have used the **SLEEK** (_Standard Land emissions and extractions of Kenya_) implementation. The outputs are used as the FLINT application image for the Reporting Tool.

<p align="center">
  <img src="/img/how-flint-images-work.jpeg" height="438" width="438"></img>
  <figcaption><em>Describing how the FLINT Images Work</em></figcaption>
</p>

## Centralizing the Docker images
 
Previously, the moja global images were published on the DockerHub, but it wasn’t maintained for a long time. No continuous integration workflows were implemented; Hence the images were not updated for the past couple of years. If a user wanted to use the images, they would need to build it locally, and the chances of a code change breaking something were relatively high.

This was noticed in the [FLINT Cloud](https://github.com/moja-global/FLINT.Cloud) and the [FLINT Reporting tool](https://github.com/moja-global/FLINT.Reporting), where the images were not being updated with incremental code changes. To tackle this, workflows were developed to build and publish all the images using GitHub Actions to the GitHub Container Registry. Now, Moja Global has over **30 packages** published on the GitHub Container Registry. It has increased the uniformity and accessibility of our images across the community. 

<p align="center">
  <img src="/img/moja-global-github-container-registry-packages.png"  width="550" alt="Moja global GitHub Container Registry Packages"></img>
  <figcaption><em>Moja global GitHub Container Registry Packages</em></figcaption>
</p>

### Maintenance of the FLINT Reporting tool

I further worked on maintaining the FLINT Reporting tool and containerizing the client and various microservices. I also worked on implementing the CI/CD pipelines and workflows for over **31 microservices** including the client interface, while publishing the images on the GitHub Container Registry. The build process for the microservices workflow took more than 4 minutes initially and was later optimized to be **18x faster** by using Docker caching.

<p align="center">
  <img src="/img/flint-reporting-ci-cd.png" width="550" alt="Reporting tool CI/CD workflow"></img>
    <figcaption><em>Reporting tool CI/CD workflow</em></figcaption>
</p>

### Automate FLINT Reporting tool setup

The functionality of the Reporting Tool is based on a Microservice-based architecture. It was inspired by the many benefits that the architecture provides; the primary motivation was the need to scale different parts of the system independent of each other. It comprises over 31 microservices, with Spring Webflux as the chosen framework to implement the microservices. The Reporting Tool’s user interface is implemented using Angular, which blends beautifully with the rest of the microservices.

The functionality of the Reporting Tool is based on a Microservice-based architecture. It was inspired by the many benefits that the architecture provides; the primary motivation was the need to scale different parts of the system independent of each other. It comprises over 31 microservices, with Spring Webflux as the chosen framework to implement the microservices. The Reporting Tool’s user interface is implemented using Angular, which blends beautifully with the rest of the microservices. 

The Reporting Tool system hosts various setup scripts that have been designed for ease of environment setup. We have streamlined and automated the process by creating one superscript for all the scripts, making the process very feasible and developer-friendly. 

The Reporting Tool’s Database hosts all the data tables needed by the Reporting Tool that are not already a part of the FLINT’s Flux Output Database. PostgreSQL has been used for the Database. We have also streamlined deploying each service on the Kubernetes cluster by updating and rectifying the Helm Charts. Let's check out a demonstration of the Reporting Tool!

<p align="center">
  <img src="/img/reporting-tool-api.png"  width="550" alt="Reporting Tool Microservices up and running!"></img>
  <figcaption><em>Reporting Tool Microservices up and running!</em></figcaption>
</p>

<p align="center">
  <img src="/img/reporting-tool-client-interface.png"  width="550" alt="Reporting Tool Client Interface"></img>
  <figcaption><em>Reporting Tool Client Interface</em></figcaption>
</p>

## Project learnings
 
The Outreachy internship and my participation with the moja global were very fruitful, and I have learned many things during the process. It also increased my learning ability and efficiency and helped me understand how I can use my expertise to execute issues during the production stage of an application. I have also learned a great deal about communication, navigating open-source organizations, and finding areas to plug in your contributions.

The skills that I have gained while working on the project include:

- Continuous integration and Continuous Delivery
- GitHub Actions
- Docker 
- Kubernetes, Helm Charts
- Spring Boot
- Angular

## Acknowledgement

My experience as a beginner open-source developer and then as an intern with the moja global community was terrific. I learned a lot of things about the open-source ecosystem and developed my abilities to become a sound software engineer shortly.

I want to thank all the maintainers and mentors of the moja global community for helping me out during my internship. Special thanks to my mentors [Harsh Mishra](https://github.com/HarshCasper) and [Anthony Kwaje](https://github.com/Tonnix) for helping me out throughout the process. Interacting with [Harsh](https://github.com/HarshCasper) in 1:1 meetings has helped upscale my skills. And under his superintendence, I have learned about a significant deal of things as he has provided me with many good resources for learning and implementation.

It was a great experience working with [Anthony](https://github.com/Tonnix) and getting to know about the structure of the Project. He explained things so well with their execution. I would also like to thank my co-intern [Simple Shell](https://github.com/Simpleshell3) for his contributions and help. 

Lastly, I want to extend my gratitude to the moja global community and will be mentoring for the upcoming Google Summer of Code 2022. I want to thank [Andrew O'Reilly-Nugent](https://github.com/aornugent) and [Harsh Mishra](https://github.com/HarshCasper) for believing in me and suggesting my profile being a mentor. I will cherish my experience as an intern with moja global life-long as I continue to learn and grow in the community.
