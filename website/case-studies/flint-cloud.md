---
id:  flint-cloud
title:  FLINT Cloud
slug:  /flint-cloud
description:  Origin and importance of FLINT Cloud
keywords:
- FLINT Modules
- FLINT
- FLINT cloud
- FLINT UI
- Cloud\DevOps
---

FLINT Cloud is a project being developed to demonstrate the abilities of the [FLINT](https://docs.moja.global/en/master/FLINT/index.html) and its associated services on remote cloud resources. The project aims to build a continuous deployment pipeline to offer FLINT as a SaaS over cloud
It provides an abstraction of the underlying implementation while offering the users a simple way to understand the functionality of the FLINT

## Why is it needed?
- Today, remote cloud resources are extremely accessible. Providers like Amazon, Google, and Microsoft offer great flexibility and scalability. They also offer very generous free tiers, which will allow users to perform smaller runs.
- Thus, in deploying the FLINT on remote cloud resources the main objective is to increase ease of use and reduce the dependency on local systems, configurations, etc 
- Developers experienced with the FLINTcloud framework will be able to support existing users with CI/CD pipelines, simplify model development and deployment, and leverage auto-scaling for large FLINT runs.
- Moja global does not offer FLINT as a Saas on a commercial level, however, through the FLINT Cloud project, they offer deployment templates and workflow training. In January 2022, the organization received a generous credit grant from Microsoft to develop templates for users that wish to deploy tools on [Azure cloud](https://moja.global/moja-global-wins-azure-cloud-grant/)

## What is supported currently?
Currently, the users can run the FLINT and GCBM examples on local and production environments

- **Local environment** 
  - The FLINT and GCBM example docker images can be pulled and built from the Github Container Registry. 
  - The steps to [locally](https://github.com/moja-global/FLINT.Cloud/tree/master/kubernetes/local) deploy the FLINT and GCBM examples on Kubernetes are available 
 
- **Production environment** : 
 - Using Terraform, an IaaS, deployments can be made on Azure and GCP.
 - Steps to deploy FLINT and GCBM examples on the [Azure Kubernetes Service](https://github.com/moja-global/FLINT.Cloud/tree/master/kubernetes/azure) are available

### FLINT Example 
The [FLINT Example](https://github.com/moja-global/FLINT.Cloud/tree/master/local/rest_api_flint.example) demonstrates the Point and the Rothc modules. 

The **Point module** is a simple test module, incorporated to present the concepts of the FLINT such as [Pools, Fluxes, Events and Conservation of mass](https://docs.moja.global/en/master/FLINT/UnderstandingFLINT/MojaFlint/index.html)

More about the [**RothC module**](https://community.moja.global/case-studies/introduction-to-flint-modules#rothc-soil-carbon-module) can be found in the case study on flint modules


### GCBM Example

The [GCBM example](https://github.com/moja-global/FLINT.Cloud/tree/master/local/rest_api_gcbm) enables users to understand the entire GCBM simulation lifecycle. A GCBM simulation can be created in a few minutes, with no pre-requisites, apart from having about 5.95 GB for the Docker image. There are endpoints to create a new simulation, upload inputs, start the simulation, and obtain the outputs.

Earlier, the inputs required to run the GCBM simulation were: configuration JSON files, input database and a folder containing the disturbances files (optional), classifier TIFF and JSON files
Currently, only the disturbance and classifier TIFF files, along with input database are needed. A default configuration is used to run the simulation

A future scope is to enable the users to edit configuration files and choose the modules that will be required

## Architecture

The FLINT is a CLI-based tool. In order to move it into a cloud-based environment, it is packaged into a web server making the use of RESTful API.  
 
A wrapper REST API is created to provide the different endpoints which point to the different operations of the CLI tool. The functionality of the FLINT and GCBM examples are provided through REST APIs written in Flask. 
 
## Significance of FLINT Cloud in the ecosystem

The development of the FLINT Cloud project has been instrumental in leading to the development of projects like [FLINT-UI](https://github.com/moja-global/FLINT-UI) and Data-driven integration with [CML and DVC](https://cml.dev/). The goal of DVC is to bring agility, reproducibility, and collaboration into existing data science workflows. 

FLINT-UI is a frontend interface written in Vue to interact with the FLINT Cloud APIs. This allows people from various technical and non-technical backgrounds to interact with the web application, run simulations and visualize results

The second project is based on the concepts of reproducible science. 
Data version control (DVC) and software Continuous Machine Learning (CML) provide a framework to continuously reproduce analyses using Github Actions as well as saving the output of the configuration phase to reuse for subsequent builds. The basic idea is to track the inputs provided to the model and monitor the outputs generated in various simulations over time. Though this feature isn’t natively required for the FLINT cloud project, it provides users with a way to incorporate them in their implementations. 


