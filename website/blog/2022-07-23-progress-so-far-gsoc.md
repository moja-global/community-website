---
title: Progress so far - 2022 GSoC mentees
description: Contributions and progress made by the GSoC mentees (2022)
tags: ['moja-global','gsoc','open-source','internships','mentorship']
authors: Namyalg
slug: progress-so-far-gsoc
hide_table_of_contents: false
---

[Yash Kandalkar](https://github.com/YashKandalkar), [Radis Toubalidis](https://github.com/radistoubalidis) and 
[Palak Sharma](https://github.com/Palaksharma23) are GSoC mentees for the year 2022. 

Yash is working on building the **GCBM Simulation Editor**, with the motive of simplifying the process of running the GCBM simulation and allowing users to configure the inputs supplied.
Running a simulation broadly consists of - creating a new simulation, uploading inputs, running the simulation and downloading the output on completion.
FLINT UI is the frontend interface, while the backend is powered by FLINT.Cloud APIs. For each of the above mentioned steps, there are API endpoints. 
During the initial phase, Yash migrated all the libraries used in the FLINT UI project to their Vue 3 compatible versions. On completion he started developing the UI components for creating a new simulation and uploading input files. Currently, the inputs are - classifiers, input database and disturbances (not mandatory). Classifiers and Disturbances are supplied as tiff files, the input database is a SQL database. The JSON associated with the tiff files are generated at the backend. Yash worked on making UI components for configuring parameters like Local Domain, Modules, Pools, etc. present in the generated JSON files. The next step is to complete the UI development and API integration for the further stages of the simulation.

Radis is working on the project **MLOps for reproducible science**.The goal of this project is to streamline the workflow of data scientists on the FLINT.Cloud project by leveraging the combined potential of Data version control (DVC) and Continuous Machine Learning (CML)
Radis is working on integrating a CML Action for FLINT.Cloud that runs the whole simulation workflow. The action runs whenever a new pull request is raised to the FLINT.Cloud repository with specific labels (i.e. run-simulation). 
The action helps to report if a particular simulation was complete. After a simulation ends, a python script retrieves the log files created from the `moja.cli` tool and uploads them on git as an artifact. A python script included in the [Compile Results](https://github.com/moja-global/GCBM.CompileResults) repository generates the output database, `compiled_gcbm_output.db`, on which SQL queries are run to provide information on the simulation's output. Along with that, plots and visualisations can be created. These inferences and plots will be published as a comment to the pull request.
Radis is also working on building a DVC Pipeline for [GCBM.Belize](https://github.com/moja-global/GCBM.Belize) that divides each step of the workflow. In this case, DVC not only provides a blueprint to organize the workflow but also offers the ability to determine the dependencies and outputs of each step of the workflow.

The DVC pipeline for GCBM.Belize consists of 12 stages. In each stage, the following information is to be defined : 

- Command that is going to be run in a particular stage

- Working directory from which the command will run  

- Dependencies of a stage (i.e. the files that are affected from the command )
 
- Outputs of the command which can be any file that is created but also DVC gives us the ability to define outputs as metrics files (json format) or plots files . On every stage of the pipeline DVC tracks the dependencies and outputs using md5 hashes (dvc.lock) but we also have the option to setup remote storage (e.g. Google Drive, AWS, etc) and store the outputs of each stage there. 

The main stages are : 

1. `tiler` → defines the spatial layers needed for the simulation

2. `recliner2gcbm` → creates the input database 

(3,4,5,6,7) → `add_species_vol_to_bio` , `modify_root_parameters`, `modify_decay_parameters`, `modify_turnover_parameters`, `modify_spinup_parameters`, apply preprocessing to the input_database to fit better for the Belize case.

8. `update_GCBM_configuration` → updates the simulation configuration based on the contents of the /Standalone_GCBM/template 

9. `run_gcbm` → runs the simulation

10. `create_tiffs` → generates the compiled spatial output

11. `compile_results` → generates the output database, a more user-friendly format to show the output results

12. `post_processing` → which creates the 3 figures that showcase the distribution of the four unique indicators throughout the simulation as well as with the different configurations (i.e. with the default parameters or the modified parameters. It also generates the metrics files which calculate the mean values of 3 different metrics of carbon stock divided in 3 periods (1 period = 50 years) for every type of indicator and every type of LifeZone.



