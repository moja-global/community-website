---
title: Progress so far - 2022 Summer LFX mentees
description: Contributions and progress made by the 2022 Summer LFX mentees
tags: ['moja-global','lfx','open-source','internships','mentorship']
authors: Namyalg
slug: progress-so-far-lfx-summer
hide_table_of_contents: false
---

[Janvi Thakkar](https://github.com/Janvi-Thakkar) and [Sanjay Singh Rajpoot](https://github.com/SanjaySinghRajpoot) are LFX mentees working on the project Cloud Native Measurement, reporting, and validation of carbon emissions. They are currently contributing to the FLINT.Cloud and FLINT.UI Projects. 

FLINT UI provides a user-friendly interface to run simulations where Janvi has added the following components to the UI-Libary : 
- Card	
- Modal
- Toast-alert
- Box-alert
- Animation effects of Accordion
- Date picker (in progress)

Janvi is also contributing to developing the [UI library](https://github.com/moja-global/ui-library).
To further enhance the flexibility of deploying the FLINT.Cloud project, she is working on deploying the FLINT and GCBM examples on Kubernetes both on a local and production level. The Azure Kubernetes Service will be used at the production level. 

Sanjay started his term working on the FLINT.Cloud. His first task was to implement the [CI/CD pipeline](https://github.com/moja-global/FLINT.Cloud/pull/138) for the FLINT and GCBM examples, which required the creation of a new container image on the Azure Container Registry, every time code was pushed to the master branch of the FLINT.Cloud repository. To simplify the production setup further, Sanjay worked in association with Harsh, his mentor to write and test [Terraform scripts](https://github.com/moja-global/FLINT.Cloud/pull/156) (Terraform is Infrastructure As A Service, i.e resources required for performing tasks are provisioned by means of writing scripts) that can be used to deploy FLINT.Cloud on Azure. 
The GCBM example provides REST APIs to run a simulation. Earlier it supported only a static configuration. In the previous LFX term, Padmaja worked on a boilerplate template to accommodate dynamic inputs. This work is being carried forward further by Sanjay, who is working on developing [API endpoints](https://github.com/moja-global/FLINT.Cloud/pull/145) and the user interface 
