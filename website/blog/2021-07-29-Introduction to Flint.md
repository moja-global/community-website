---
slug: intro to flint
title: Introduction to FLINT
author: Ruchi Pakhle
author_url: https://github.com/Ruchip16
author_title: Passionate programmer, coder & a web-developer 
tags: [Intro to Flint, docusaurus]
description: Introduction to Flint
---
<!-- Summary -->

**The Full Lands Integration Tool (FLINT)** is moja global’s flagship software. FLINT is a modular and highly flexible open-source software technology designed to meet the needs of governments, the private sector and other users in measuring, reporting and verifying (MRV) – or forecasting – greenhouse gas emissions and removals from forestry, agriculture and other land uses (AFOLU).
 
<!--truncate-->

### What is FLINT?
FLINT stands for (Full Lands Integration Tool) which is a C++ framework that combines the data acquired from the satellites & ground in a way that meets the requirements of the policy. FLINT is an *open-source library* maintained under **moja-global**, a project under the **LINUX Foundation** 

### Why FLINT?
FLINT enables all countries to develop and operate advanced systems. It is based on more than 20 years of experience in building and operating integrated tools in Australia and Canada. It is a universal platform with a modular structure, allowing countries to attach any kind of models or data to build a country-specific system. The platform handles complex computer science tasks, such as storing and processing large data sets, allowing users to focus on monitoring, reporting, and scenario analysis.

### What distinguishes FLINT from other integrating tools?
FLINT integrates data from remote sensing, ground observations, and other sources to estimate fluxes and stocks of greenhouse gasses in different pools consistent with the guidance from the Intergovernmental Panel on Climate Change (IPCC).

FLINT is using the lessons learned from the first generation of tools to build a new framework that meets current and future needs. Compared with the first-generation tools, the main improvements include:

- A flexible and modular approach that allows specific countries from IPCC Tier 1 to 3 to implement a comprehensive, sample-based, jurisdictional, and supply chain-based approach.
- The ability to cover all land uses and land-use changes, and activity-based reporting such as REDD+.
- Scenario analysis systems to allow the development of projections.
- Potential for a variety of other purposes, including economics, water, and biodiversity.
- Development is managed using a true open-source approach under moja global, which will allow users (countries, companies, and organizations) to direct strategy and control the budget.
- Software that allows data processing on local desktops or cloud-based systems.

### Let's get started with FLINT : 

### How it works?
FLINT works by bringing together multiple streams of data. FLINT combines remote sensing, models, and ground data and produces outputs in a wide range of formats, including maps, tables, and reports. It is designed to be the engine of an operational MRV system for the AFOLU sector that can respond to policy and planning needs. FLINT is consistent with the IPCC guidelines. 
You can check out the [**video**](https://www.youtube.com/watch?v=eUa9ficyOPg)

### How to implement FLINT?
Below given are instructions for quick installation. 

**NOTE:** These instructions are for building the FLINT on Windows using Visual Studio 2017, or Visual Studio 2019.

1] Install CMake: 
```
CMake-3.15.2-win64-x64.msi
```
2] Using *vcpkg* to install required libraries

A fork of a Vcpkg repository has been created for the FLINT required libraries. To build these libraries you can use the following process:

- Clone the Vcpkg repository: https://github.com/moja-global/vcpkg
- Start a command shell in the Vcpkg repository folder and use the following commands:
```
# bootstrap
bootstrap-vcpkg.bat

# install packages
vcpkg.exe install boost-test:x64-windows boost-program-options:x64-windows boost-log:x64-windows turtle:x64-windows zipper:x64-windows poco:x64-windows libpq:x64-windows gdal:x64-windows sqlite3:x64-windows boost-ublas:x64-windows
```
- Start a command shell in your FLINT repository folder after this is done. To construct the Visual Studio solution, use the following commands:

```
# Create a build folder under the Source folder
cd Source
mkdir build
cd build

# now create the Visual Studio Solution (2019)
cmake -G "Visual Studio 16 2019" -DCMAKE_INSTALL_PREFIX=C:/Development/Software/moja -DVCPKG_TARGET_TRIPLET=x64-windows -DENABLE_TESTS=OFF -DENABLE_MOJA.MODULES.ZIPPER=OFF -DCMAKE_TOOLCHAIN_FILE=c:\Development\moja-global\vcpkg\scripts\buildsystems\vcpkg.cmake ..

# OR Visual Studio Solution (2017)
cmake -G "Visual Studio 15 2017" -DCMAKE_INSTALL_PREFIX=C:/Development/Software/moja -DVCPKG_TARGET_TRIPLET=x64-windows -DENABLE_TESTS=OFF -DENABLE_MOJA.MODULES.ZIPPER=OFF -DCMAKE_TOOLCHAIN_FILE=c:\Development\moja-global\vcpkg\scripts\buildsystems\vcpkg.cmake ..
```
3] **Install Moja Libraries** 

The Visual Studio moja solution can be used to install compiled versions of the Moja libraries. Set the CMAKE variable **'CMAKE INSTALL PREFIX'** to your installation path (for example, *"C:/Development/Software/moja"* ).

4] Using CMake, make changes to the Visual Studio Solution.

- Open the CMake graphical user interface.
- Click **"Browse Build..."** and select the folder you created previously (i.e. ```C:Developmentmoja-globalFLINTSourcebuild``` in the **"Where to build the binaries"** area) 
- If the 'Where is the source code:' field does not update, make the necessary changes.
- You should now be able to update any CMake settings (for example, ENABLE flags like ENABLE TESTS), then click **“Configure”** - there should be no issues presuming all libraries and essential software have been installed. 
- Now click **"Generate,"** and the Solution should be ready to load into Visual Studio with the changes.

### Other Useful Tools :

- SQLite Studio 
- [**Tortoise Git**](https://tortoisegit.org/)
- Using Docker for Ubuntu 18:04 