---
title: Progress so far - 2022 Outreachy interns
description: Contributions and progress made by the Outreachy interns (2022)
tags: ['moja-global','outreachy','open-source','internships','mentorship']
authors: Namyalg
slug: progress-so-far-outreachy
hide_table_of_contents: false
---

[Kateryna Derhaus](https://github.com/derha) and 
[Ankita Sharma](https://github.com/ankitaS11) are GSoC mentees for the year 2022. 

The Generic Carbon budget model (GCBM) is built on top of the Full Lands Integration Tool (FLINT). It was developed by Canada to run simulations in the Canadian ecosystem. Adaptations of the GCBM include GCBM.Belize, GCBM.Colombia and GCBM.Chile. Kateryna Derhaus is working on developing a new simulation model for Carpathians. She has run a test 
simulation with low resolution spatial data and spatial data from Belize. On completion of the Carpathians simulation model, she will document the steps in jupyter notebooks. 
The `Recliner2GCBM` tool is used to create the GCBM input database. She is working on enhancing the recliner2GCBM functionality in Python to make the example more accessible to non-windows users.

Ankita started working on an analysis for [Tropical Dry Forests in India](https://github.com/ankitaS11/Outreachy-Moja-Global) and compared how the analysis can help to form a hypothesis about the soil type, and crops grown in the area. The analysis came with a dataset loading API that to port to another type of forest and help make the analysis implementation more intuitive.
To enhance the analysis on the result of the GCBM.Belize simulation, she has developed [scripts](https://github.com/ankitaS11/Moja-Global-GCBM.Belize-Analysis-Scripts) to plot NEP (Net Ecosystem Production), NPP (Net primary productivity), NBP (Net Biome Productivity) and Rh (Relative Humidity).
As [FLINT.Cloud](https://github.com/moja-global/FLINT.Cloud) did not ship with an AppImage, Ankita helped create the [AppImage script](https://github.com/ankitaS11/AppImageDataForFlint) as well as AppImages for Ubuntu 22.04, 20.04, and 18.04 systems. The scripts have been deployed to the CI.
In association with other mentees, Ankita is also working on the dynamic GCBM Pre-Processing API. This is a revision of existing API which will be more robust, and easy to understand or tweak based on requirements.


