---
title: Outreachy Blogs
image: https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3b4xdim2k09gg085gwse.png
---

# My Outreachy internship experience blog - Asmi Jafar 

I have started my open source journey with an Outreachy internship only. I was a complete beginner in open source when I started contributing to the Moja Global community and it turns out to be my selection as an Outreachy intern with Moja Global. I never participated in any open-source program previously but got an opportunity with Outreachy to showcase my interest. And in these past three months, I have learned a lot of new things and implemented them as well.

I started with good first issues with Moja Global, updated links and versions across repositories. Later, I contributed to the community website by adding the feature for displaying all Contributors during the Outreachy contribution period. Lastly, I have finished all the tasks given to participants to showcase their skills during my contribution period. 

Over the past three months, I have been working with [Harsh Mishra](https://github.com/HarshCasper) on implementing Continuous Integration and Delivery (CI/CD) pipelines across the Moja Global repositories and centralizing the Moja Global docker images on the GitHub Container Registry. I have worked with [Anthony Kwaje](https://github.com/Tonnix) on FLINT Reporting Tool with 31 Microservices! And this blog would be documenting my experience and the project report.

<h3>About Project:</h3>

[Moja Global](https://github.com/moja-global) is a non-profit, collaborative project that brings together a community of experts to develop open-source software – including the [FLINT](https://github.com/moja-global/FLINT) – to help users accurately and affordably estimate greenhouse gas emissions and removals from forestry, agriculture and other land uses (AFOLU).

The [FLINT Reporting tool](https://github.com/moja-global/FLINT.Reporting) of Moja global is to provide Business Intelligence for analyzing and transforming FLINT output databases into useful information and outputs.

The goal of my project was to implement the CI/CD pipelines at Moja global and implement the framework for reproducible research. One of the project parts focuses on the FLINT reporting tool, its maintenance, and assisting to make it more user-friendly.  Also implementing the CI/CD pipelines for the reporting tool by using GitHub Actions and making it deployment ready. Along with this the part of the project also targets centralizing and migrating the docker images across the community **GitHub Container Repository**.

<p align="center">
  <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/acqrdrxb4wk7oek2p6da.png"  alt="FLINT Reporting Tool System and Purpose"></img>
  <figcaption><em>Fig: FLINT Reporting Tool System and Purpose</em></figcaption>
</p>


<h3>Goals Achieved:</h3>

**1) Understood the FLINT, FLINT Implementation, and the FLINT Reporting Tool Structure.**

The FLINT is considered as the library itself - it doesn't do much unless we attach modules to it and make it an implementation. FLINT implementations extends the FLINT library image and the library image extends the FLINT base image. In our case for the FLINT implementation image, we have used **SLEEK** (_Standard Land emissions and extractions of Kenya_) image. Later the outputs are used as the FLINT application image i.e. Reporting Tool images.

<p align="center">
  <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dvwru1debotkgl6u23ef.jpg" height="438" width="438"></img>
</p>


**2) Strategized and Centralized Docker images across the community for standardization and uniformity.**
 
Previously, the Moja Global images were published on the docker hub registry but it wasn’t centralized and maintained for a long time. Also, there are no Continuous integration workflows set up in the [FLINT Cloud](https://github.com/moja-global/FLINT.Cloud) and [FLINT Reporting tool](https://github.com/moja-global/FLINT.Reporting) repository so the images are not able to update when there is a new release in the project. We have built and published all the images using GitHub Actions to the GitHub Container Registry. Now, Moja Global has **30 packages** published on the Moaj Global GitHub Container Registry. It increased the uniformity and accessibility across the community. 

<p align="center">
  <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/c0aarfnhpyfw6dhywtys.png"  width="550" alt="Moja Global GitHub Packages"></img>
  <figcaption><em>Fig: Moja Global GitHub Packages</em></figcaption>
</p>


**3) Maintenance and Rectification of the FLINT Reporting tool.**

Worked on maintaining the versions and containerizing the Client of the reporting tool. Later implemented the CI/CD for the front-end build of the tool. The FLINT Reporting tool was built as a spring boot application with **31 microservices**. 

We have streamlined the containerization of the reporting tool microservices and implemented the Continuous Integration and Delivery for the same. We have published the docker images of the microservice on the GitHub Container Registry.
 
The build process for the workflow of the microservices was taking more than 4 mins and later we have optimized the build process by **18x faster** by using **Docker caching method**. 

<p align="center">
  <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/trmi2anmxy6y7xrm91qh.png" width="550"></img>
    <figcaption><em>Fig: Reporting tool Microservices workflow.</em></figcaption>
</p>

**4) Setup the FLINT reporting Kubernetes environment and automate the process for the reporting tool.**

The functionality of the Reporting Tool is delivered using a **Microservice-based** architecture. While this was inspired by the many benefits that the architecture provides, the primary motivation was the need to scale different parts of the system independent of each other. 
It comprises 31 microservices and **Spring Webflux** was chosen as the framework to implement the Reporting Tool Microservices. And the Reporting Tool’s User interface is implemented using **Angular** which blends beautifully with the rest of the microservice stack. 

The Reporting Tool system has a collection of scripts that have been designed for use in the setup of its environment. We have streamlined and automated the process by creating one superscript for all the scripts, which made the process very feasible and developer friendly. 

The Reporting Tool’s **Database** hosts all the data tables that are needed by the Reporting Tool that are not already a part of the FLINT’s Flux Output Database. PostgreSQL has been used for the database. 

We have streamlined the process of deploying each service on the Kubernetes cluster by updating and rectifying the **helm charts** `values.yml` files. We have fixed the Database and tested it over the cloud.

**Demo Run:**

Setup the **Kubernetes environment** of the reporting tool on the cloud. First, we install all the dependencies/packages using superscript, then we set up the system by initializing the database and after that deploy services on that using scripts, and finally building a client over that. 

The back-end of reporting tool i.e database and services are running efficiently and successfully!

<p align="center">
  <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/7qlzfjvtkfw8eltqnara.png"  width="550" alt="Microservices running at backend"></img>
  <figcaption><em>Fig: Microservices running at backend</em></figcaption>
</p>

<p align="center">
  <img src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/fgugh9v9m2mmg4rawshb.png"  width="550" alt="Reporting Tool Client"></img>
  <figcaption><em>Fig: Reporting Tool Client</em></figcaption>
</p>

#### You can find my Outreachy internship Week-Wise logs [here.](https://docs.google.com/document/d/17SyTeOY2c9Z6FUE3d7NEG4SlqHmhfIFJOqOVT1kbQ0E/edit?usp=sharing)

<h3>Learnings</h3>
 
The Outreachy internship and my participation with Moja Global was very fruitful. I have learned a lot of things during the process. It also increased my learning ability and efficiency. Acquire a knowledge about the execution of issues/problems faced during the Production stage. I have also learned a great deal about communicating and navigating across large organizations and finding areas to plug in your contributions.

Skills I have gained while working on the project:

- Implementation of CI/CD pipeline.

- GitHub Actions

- Docker 

- Kubernetes, Helm Charts

- Spring Boot

- Angular CLI

<h3>Acknowledgement</h3>

My experience as a beginner and then as an intern with Moja Global was amazing. Learned a lot of things about the open-source ecosystem. Contributing to open source taught me about a lot of things and increased my abilities to become a good software engineer in near future.

I want to thank all the maintainers and mentors of the Moja Global community for helping me out during my internship. Special thanks to my mentors [Harsh Mishra](https://github.com/HarshCasper) and [Anthony Kwaje](https://github.com/Tonnix) for helping me out throughout the process. Interacting with [Harsh](https://github.com/HarshCasper) in 1:1 meetings has helped a lot upscaling my skills. And under his superintendence, I have learned about a significant deal of things as he has provided me with many good resources for learning and implementation. 

It was a great experience working with [Anthony](https://github.com/Tonnix) and getting to know about the structure of the Project. He explained things so well with their execution. I would also like to thank my co-intern [Simple Shell](https://github.com/Simpleshell3) for his contributions and help. 

Lastly, I want to extend my gratitude to the Moja Global community and decided to Mentor for Google Summer of Code 2022. And I want to thank [Andrew O'Reilly-Nugent](https://github.com/aornugent) and [Harsh Mishra](https://github.com/HarshCasper) for believing in me and suggesting my name for the mentorship. I will cherish my experience as an intern with Moja Global life-long as I have learned plenty of things. 
