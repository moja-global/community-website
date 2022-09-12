---
authors:
  name: Radis Toumpalidis
  title: GSoC'22 Mentee
  url: https://github.com/radistoubalidis
  image_url: https://avatars.githubusercontent.com/radistoubalidis
tags: [gsoc, opensource, mlops, devops]
---
# Google Summer of Code 2022 - MLOps for Reproducible Science
## Some technical backgouround
  Full Lands Integration Tool (FLINT) is an open-source software technology designed for measurement-reporting-verifying greenhouse gas emissions and removals from forestry, agriculture and other land uses. FLINT is not an MRV system but provides a framework to progressively build MRV systems for specific cases.
  
  The Generic Carbon Budget Model (GCBM) is a tool developed to assess and report the cumulative effects of anthropogenic and natural disturbances on forests. The GCBM is a set of modules developed by the  Canadian Forest Service (CFS) to run on top of FLINT. This set of modules describes several forest carbon pools. GCBM simulations work at an annual time step interval. GCBM handles as inputs a combination of spatially explicit datasets concerning the forest (with information like tree species or the location of forest types), age, climate, and disturbances, along with non-spatial parameters such as `volume to biomass conversion coefficients or yield curves`. A python tool is used to prepare the spatial inputs from raster to vector format and an SQLite Database handles the non-spatial data  [[1]](#1).
  
  <sub>*carbon pool: represents a reservoir of carbon that can be stored or released , **disturbances: unplanned events (e.g. wildfire) that affect carbon pools</sub>

## Project Description 📌
  We applied MLOps techniques and tools to a complex scientific workflow s part of a community led, distributed carbon modelling platform. These techniques ensure reproducibility, which is the cornerstone of good science.

  In my proposal, the main concept  is to automate complicated and technically demanding tasks, as well as the corresponding reports,  that a moja-global contributor might face by using CI/CD tools for Machine Learning/Data Science projects. I propose a DVC repository (i.e.remote storage) to cache significant logs and outputs of simulations which is achieved with the [DVC pipeline](#dvc-pipelines-on-the-gcbm-module) for GCBM.Belize and Colombia repositories. Furthermore, I build a cloud storage repository on which we can use DVC's and CML's features to track, cache, compare, store and make flint-ready datasets there, thus making the datasets reproducible and interactive with the git repository that processes them because spatial datasets have a lot of variability and a standardisation process is needed to achieve reproducibility. I believe I achieved that with the work I've done on the [Land Sector](#processing-the-land-sector-datasets) repository. Last but not least, I created a [CML Action](#cml-action-on-flintcloud) that generates a small summary/report from the execution of a simulation for the FLINTcloud platform as a numerical integration test, preventing breaking changes while under active development, and providing a useful template for new users to deploy their own FLINT services.


  <sub>** flint-ready: convert spatial datasets in into to a common format and coordinate system</sub>

### Tech Stacks Used
| Purpose                                    | Tools and Technologies used |
| ------------------------------------------------ | --------------------------- |
| CML Action in FLINT.Cloud  | CML, GitHubActions, Docker                       |
| DVC pipeline in GCBM.Belize                                        | DVC, Python, R                       |                      |
| Land Sector Dataset Processor                                   | DVC, CML, geopandas, gdal, GitHubActions                   |

### Mentors
  I owe huge thanks to my mentors [Andrew O'Reilly-Nugent](https://github.com/aornugent) and [Simple Shell](https://github.com/Simpleshell3) for supporting me throughout the whole program and providing the appropriate feedback to me so I can improve my contributions.

### Fellow contributors
  Also huge thanks to community members [Namya](https://github.com/Namyalg), [Padmaja](https://github.com/padmajabhol), [Harsh](https://github.com/HarshCasper), and all the other contributors that I worked with for not only providing support on technical issues but welcoming me to the community.
### What do I believe I achieved in a general aspect?
  In my proposal, my ideas and deliverable items were described generically and indefinitely because I hadn't realized 100% how several aspects of the code base worked. After I conducted enough research and learned how the code works I believed I reformed my deliverables more realistically.



    
## DVC pipelines on the GCBM module
GCBM.Belize PR link: https://github.com/moja-global/GCBM.Belize/pull/14
### GCBM.Belize repository
  GCBM.Belize was developed as a case study for the GCBM in Belize. The repository can be seen as a template on how the GCBM works in nation-scale, but also provides a technical example for new-coming contributors on how the GCBM works, particularly:
  - How the datasets are prepared
  - How the simulation runs
  - How to interact with the results (analysis and reports)
  
Some existing issues:
  - The whole workflow was configured to run in Windows Batch scripts and the steps were not connected between them, nor do they follow any structure, making their execution and the analysis of the results more complicated.
  - The Belize repository is a good case for experimenting with the GCBM by modifying specific parameters of the simulation and comparing the different outputs they provide. There was no such procedure to do that.
### A little about DVC
- [Data Version Control](https://dvc.org/) (DVC) is a dataset versioning tool that takes advantage of already existing engineering tools like Git. So we can't say that DVC is git for handling large-sized datasets that can be managed by git due to size limits.
### What was the goal?
Integrate a system-agnostic pipeline to execute the complete workflow (preprocessing, simulation and postprocessing) that tracks and stores the outputs in remote storage.
### What does the pipeline offer to the user?
  - The cases of GCBM.Belize and GCBM.Colombia are developed to only be executed in Windows systems but using DVC's functionalities I set up the pipeline to be system-agnostic.
  - Before the DVC pipeline was established, the phases of the workflow had to be executed manually but using DVC anyone can execute the whole workflow with only one command (`dvc repro`)
  - In the cases of the GCBM module, the outputs it generates are for the most part `.tif` files and in the postprocessing step, it generates some metrics and plots. All these outputs are listed and tracked by DVC using md5 hashes. I used DVC's functionality to store files in remote storage and set up a Google Drive repository that stores them.
  - Furthermore, I used DVC's features for metrics and plot files to track these kinds of outputs from the workflow. This way when someone created another version of the GCBM, the `dvc diff` command could be used to compare the metrics from the standard GCBM version to the new one (and use the output in a potential report as well).
  - In the scenario that someone has created and executed different versions of the established pipeline the `dvc exp` tool can be used to list, compare and display metrics, plots, and the output `tifs` (and use these outputs in a potential report as well).
### How does the DVC pipeline works?
Pipelines in DVC are developed in `YAML` syntax and are divided into stages. For each stage to be appropriately executed we need to define: 
  - the working directory
  - the command to be executed
  - the stage's dependencies (i.e. the files that are used/affected by the stage)
  - the stage's outputs(optional)

The GCBM pipeline consists of 12 stages :
- Tiler → Processes and defines the spatial layers to be used in the sim
- Recliner2GCBM → generates the gcbm_input database
-  `modify_<type>_parameters` scripts that apply preprocessing to the input_database to fit better into specific GCBM cases
- UpdateGCBMConfiguration → updates the simulation configuration based on the contents of the `Standalone_GCBM/template` directory
- run_gcbm
- create_tiffs → generates the compiled spatial output
- compile_results → generates the output database, a more user-friendly format to show the output results
- post_processing → which creates the 3 figures that showcase the distribution of the four unique indicators throughout the simulation and metrics files that calculate the mean values of 3 different metrics of carbon stock divided between 3 periods (1 period = 50 years) for every type of indicator and every type of LifeZone.

Another important fact is that DVC by default does not assign any specific order to the execution of the pipeline. Although someone can define a specific order  by denoting the outputs of each `i-th` stage as dependencies in `i+1-th` stage.

The pipeline offers the ability to professionals outside the programming world to effortlessly interact with simulations and modules without having to dig down on coding or other difficult technical tasks so they can focus more on analyzing the results.
### How it can be utilized in the future?
DVC not only provides a blueprint to organize the workflow but also offers the ability to determine the dependencies and outputs of each step of the workflow. Because in most of the cases that are studied and use either FLINT.core or other modules the stages of the workflow are somewhat familiar(create a simulation and its configs, run it, compile the results and run some postprocessing scripts) this pipeline can be used as a blueprint/guide (with some modifications) to integrate the same functionalities in other FLINT or GCBM cases.
### Usage examples
You can list the stages and each stage's dependencies by typing:
```shell
$ dvc stage list
tiler                       Outputs ..\..\logs\tiler_log.txt
recliner2gcbm_x64           Outputs logs\recliner_log.txt
add_species_vol_to_bio      Outputs logs\add_species_vol_to_bio.log
modify_root_parameters      Outputs logs\modify_root_parameters.log
modify_decay_parameters     Outputs logs\modify_decay_parameters.log
modify_turnover_parameters  Outputs logs\modify_turnover_parameters.log
modify_spinup_parameters    Outputs logs\modify_spinup_parameters.log
update_GCBM_configuration   Outputs ..\logs\update_gcbm_config.log
run_gcbm                    Outputs ..\logs\Moja_Debug.log
create_tiffs                Outputs ..\..\logs\create_tiffs.log, ..\..\processed_output\spatial
compile_results             Outputs ..\..\logs\compile_results.log
post_processing             Reports metrics\1900-1950_Deadwood_Tropical_Dry.json, metrics\1900-1950_Deadwoo…
```
You can display the metrics by typing:
```shell
$ dvc metrics show
Path                                                          area_sum_mean    pool_tc_per_ha_mean    pool_tc_sum_mean
metrics\1900-1950_Deadwood_Tropical_Dry.json                  1142790.3823     8.46574                9674571.56838   
metrics\1900-1950_Deadwood_Tropical_Moist.json                608498.40961     19.67003               11969184.86104  
metrics\1900-1950_Deadwood_Tropical_Premontane_Wet.json       417245.76511     23.20835               9683586.49465   
metrics\1900-1950_Litter_Tropical_Dry.json                    1142790.3823     7.63421                8724307.19108   
metrics\1900-1950_Litter_Tropical_Moist.json                  608498.40961     15.89514               9672169.16877   
metrics\1900-1950_Litter_Tropical_Premontane_Wet.json         417245.76511     19.54048               8153183.07648   
metrics\1900-1950_Soil Carbon_Tropical_Dry.json               1142790.3823     18.18886               20786056.03202  
metrics\1900-1950_Soil Carbon_Tropical_Moist.json             608498.40961     69.2994                42168571.67542  
metrics\1900-1950_Soil Carbon_Tropical_Premontane_Wet.json    417245.76511     73.05651               30482518.25375    
...
```
You can test the pipeline by typing:
```shell
$ dvc repro # or 
$ dvc exp run
```
You can push the outputs the pipeline generated by typing:
```shell
dvc push
```
- For testing purposes, I used a personal Google Drive storage to upload the outputs [here](https://drive.google.com/drive/folders/1Q91hL8B4sv6CrC2rqPQWKDDXFaaFjXx3?usp=sharing)
- [Here](https://drive.google.com/file/d/14yS4d7IXVUto8MmrEQ8y9fv-58e_jVCT/view?usp=sharing) you can see a video showcase for the whole execution of the pipeline only with one command
- There is a guide/description that explains how to set up, configure and run DVC and the pipeline with more technical details [here](https://github.com/radistoubalidis/GCBM.Colombia/blob/add_pipeline/pipeline.md)

## Processing the Land Sector Datasets
PR Link: https://github.com/radistoubalidis/Land_Sector_Datasets/pull/3
### The Land Sector Datasets repository
The [Land Sector Datasets](https://github.com/moja-global/Land_Sector_Datasets) repository consists of datasets and their metadata for Land Sector management use in the FLINT. In more detail, this repository includes Jupyter Notebooks that contain the license, metadata along with other information, and the processing code to get the datasets (which are in raster format) into vector format (`.tif` or `geoJSON`) to be flint-ready.

<sub>** flint-ready: prepare the dataset in vector format</sub>

### What's the issue?
There is also a Google Drive remote storage maintained by moja-global's contributors, where the processed (vector format) datasets are stored. Although the Land Sector git repository and the Google Drive storage are **not** directly connected, meaning there's no specific procedure that ensures the reproducibility of those datasets, contributors can only use one version of each one.
### What's the goal?
The goal here is to establish a framework that guarantees reproducibility while curating the datasets and also decrease the required dependencies to process the datasets, so in general, make the Google Drive storage directly connected and interactive with the GitHub repository.

### What was my approach?
My first thoughts were that this case is very well suited for utilizing DVC's features to track datasets through Google Drive but that didn't seem enough. After discussion with the community and analyzing the situation I pinned down the issue into these finite tasks:
- Implementing a general processor capable of processing the datasets into flint-ready formats
- Track the processing steps (using DVC) and store the flint-ready datasets in the Google Drive storage
- Provide a health check on the processed datasets when someone makes changes to the processing steps
    
Since the repository consists of many different datasets my mentors suggested I use the `Harmonized World Soil Database` dataset as a use case. My first task was to implement processing code for the dataset from raster into vector (`.tif`) format. I achieved that by writing a script that utilized the `gdal` python library to convert the raster dataset into vector format and restructure it to be flint-ready. Then, I created a DVC pipeline that runs the processing script and lists as output the vector dataset. At this point, I have to note that the pipeline is essential for future reference where we potentially need to implement processing for multiple datasets and push them in remote storage only with one command. The third and final step was to create a GitHub action that executes the pipeline and pushes the output datasets to Google Drive storage. This action is going to be triggered only when someone’s commit changed the dataset processing code thus providing a health-check (i.e. that someone's changes in the processing code generated a reproducible and flint-ready dataset). For a better understanding of how these deliverables will work here is a workflow example of a potential contributor:
- Let's say I want to use the `Harmonized World Soil Database` dataset, which is stored in `GeoTiff` format in moja-global's Google Drive storage, but I want to use it in `GeoJSON` format, so I make some changes to the processing script and commit them.
- The health-check action is triggered and executes the pipeline
- After the action is completed the processed dataset is pushed to the Google Drive storage and an auto-generated commend (using CML) is published ([example here](https://github.com/radistoubalidis/Land_Sector_Datasets/commit/a56893a9a253595813a37f6751f445b220aa977e#commitcomment-80738864)) that informs me whether my script generated a flint-ready dataset or not.

### Notes
- Most of the datasets in the repository are processed using `arcpy` which is a python package for geographical analysis but can only be used in Windows systems. As suggested by my mentors I also worked on refactoring the processing code of some Datasets that use `arcpy` with system-agnostic libraries/modules such as `geopandas`. I applied this idea in the `Global Ecological Zones` dataset where I processed the dataset with `geopandas` instead of `arcpy`, so now the datasets can be processed in non-Windows systems too.
- I believe that if we follow an OOP approach we can implement a general processor that would be able to handle multiple Datasets from the Land Sector repository so it can be used in other moja-global projects in the future.
- As this deliverable is not merged yet I used a personal Google Drive storage for testing my code but the same principles can be applied to moja-global's Google Drive storage.

## CML Action on FLINT.Cloud
PR Link: https://github.com/moja-global/FLINT.Cloud/pull/132
### FLINT.Cloud Repository
 The core goal in [FLINT.Cloud](https://github.com/moja-global/FLINT.Cloud) is to build a continuous deployment pipeline to offer FLINT on cloud resources. It consists of 2 unique APIs that run a different kinds of simulations. The APIs in FLINT.Cloud are configured inside docker containers where the required dependencies such as the FLINT source code, other required software packages, etc. are included. The repository is going to co-operate with other repositories because the community is also working on  [FLINT.UI](https://github.com/moja-global/FLINT-UI) which is going to be a FLINT frontend client  for configuring simulations using the FLINT.Cloud APIs. Regarding the FLINT.Cloud repository, every step of the workflow (creating simulation configs, running and analyzing results) is executed through manual requests to the APIs. So, after discussion with the community and mentors, the creation of a CI script that would run a simulation and auto-generate a report was suggested. This CI script would provide a blueprint on how the APIs work to new-coming contributors and also stand as a procedure that automates a part of the workflow, thus releasing the developer/researcher of some technically demanding tasks.
### A little about CML
  [CML](https://cml.dev/) is an open-source CI/CD tool for Machine Learning or general Data Science projects. It can be used to track and provide auto-generated reports on development workflows and also can be configured to provide CI pipelines on cloud-hosted runners.
### What was the original goal?
  The original goal was to establish a GitHub Action that executes a benchmark simulation in FLINT.Cloud and provides an automated report on the sim results using CML
### How does it work?
  First of all, the action is triggered on pull requests with the `simulation` label. The action uses a benchmark sim configuration and runs it using the rest_gcbm_api which is wrapped inside a docker container that includes all the required dependencies for the simulation along with the GCBM rest-API. Using the provided benchmark configuration we execute it. After the simulation ends we use the [CompileResults](https://github.com/moja-global/GCBM.CompileResults) repo to prepare the `compiled_gcbm_output` database where SQL queries are run to provide information on the simulation's output. These inferences and plots can be utilized by CML to be published in the form of a comment on the PR.
### What does the Action achieve?
- Auto-generated simulation report when someone raises a PR with the `simulation` label. The generated report currently looks like [this](https://github.com/moja-global/FLINT.Cloud/pull/171#issuecomment-1214309899)
- Establishes a validation process that the changes made in the specific PR will not break anything regarding the simulation run.
### How and why we had to modify the Action
The FLINT.Cloud repository is still in the development phase. Since the GCBM rest-API is still in the development phase and daily continuous changes in the input configuration code are made, we stumbled upon some errors that couldn't be resolved so it was decided to temporarily modify the CML Action to run the simulation straight from the FLINT CLI interface (which is included in the container) until the APIs get their final form.
### How it can be enriched?
After the CML Action PR was merged mentors suggested we could enrich the auto-generated report by also displaying (in Jupyter Notebook form) the code that generated any potential plots. They suggested the use of [jupytext](https://github.com/mwouts/jupytext), which is a python package for versioning and managing Jupyter Notebooks. It offers a variety of commands that map python scripts, markdown texts, and notebooks, so you can instantly access code in any of these formats. To sum up, I used jupytext to convert the script that generates the report from py:percent format into markdown so it can be attached to the report. I also raised a new [PR](https://github.com/moja-global/FLINT.Cloud/pull/176) for this addition.

## Final Thoughts
My experience throughout the mentorship has been wonderful. I believe I learned a variety of things, from how to implement CI principles in non-traditional web projects to how to write cooperative code. I feel proud for being a part of a community with such team spirit, and I want to continue collaborating and making real contributions to moja-global.

## References
<a id="1">[1]</a>  Shaw, C. H., et al. "Cumulative effects of natural and anthropogenic disturbances on the forest carbon balance in the oil sands region of Alberta, Canada; a pilot study (1985–2012)." Carbon Balance and Management 16.1 (2021): 1-18.