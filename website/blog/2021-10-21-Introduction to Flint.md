---
slug: flint.md
title: Introduction to Full Lands Integration Tool (FLINT)
author: Ruchi Pakhle
author_url: https://github.com/Ruchip16
author_title: open-source contributor at moja-global
tags: [flint, moja-global]
description: Introduction to Flint
---

<!-- Summary -->

Taking into account the existential crisis caused by climate change, we at moja-global are on a mission to sustain our ecosystem by building an open-source software tool called **The Full Lands Integration Tool (FLINT)**. FLINT is moja global's flagship software for estimating the carbon stored in forests, peatlands, and soils using cutting-edge ecosystem models. It is an open-source software tool designed to assist governments, businesses, and other users in measuring, reporting, and verifying (MRV) or forecasting greenhouse gas emissions and removals from forestry, agriculture, and other land uses (AFOLU).
 
<!--truncate-->

### What is FLINT?

FLINT is an abbreviation for (Full Lands Integration Tool), a fully modular C++ framework that combines data from satellites and the ground to allow users to integrate carbon and other models with remote sensing data to create greenhouse gas accounting for the land sector. FLINT is an *open-source* library maintained by **moja-global**, a project under the **Linux Foundation**.


### Why FLINT?

FLINT enables all countries to design and run advanced land-use and land-use-change monitoring systems. It is based on more than 20 years of experience creating and administering integrated systems for national greenhouse-gas inventories in Australia and Canada. The FLINT is a worldwide platform with a modular architecture that allows nations to attach any sort of model or data to construct a system customised to their own needs. Users may concentrate on monitoring, reporting, and scenario analysis while the platform handles complex computer science tasks like data storage and processing.

### What distinguishes FLINT from other integrating tools?

Taking into account the lessons and the outcomes of the previous generation of tools, FLINT is developing a new framework to meet the current and future needs of its users. The following are the most significant improvements over the first-generation tools:

- A scalable and modular method that enables IPCC Tier 1 to 3 nations to deploy a complete, sample-based, jurisdictional, and supply chain-based approach.
- The capacity to cover all land uses and changes, as well as activity-based reporting like REDD+
- Being an open-source software tool, it is easily available to everybody across the globe.
- The software's quality is what sets it apart from other integrating solutions since it is simple to use and rely on.
- Under moja global, development is controlled using a genuine open-source method, allowing users (countries, corporations, and organisations) to guide strategy and control the budget.
- FLINT software offers data processing on local PCs or in the cloud.

### Let's get started with FLINT :star:

### How it works?


FLINT being a fully modular framework, it is based on the simulation of events and processes. Modules with variable time steps can therefore be accommodated. Key elements of the framework will include the overall integration module, a transaction service, and individual modules that are easily exchanged and modified, and that each serve key functions such as representation of growth, decomposition, disturbances, forest management actions and so on. Other key elements such as the management of the events stream, the data platform and results processing capabilities will be described elsewhere
FLINT works by bringing together multiple streams of data. FLINT combines remote sensing, models, and ground data and produces outputs in a wide range of formats, including maps, tables, and reports. It is designed to be the engine of an operational MRV system for the AFOLU sector that can respond to policy and planning needs. FLINT is consistent with the IPCC guidelines. 
You can check out the [**video**](https://www.youtube.com/watch?v=eUa9ficyOPg)

### How to implement FLINT?

Here are instructions for quick installation. :point_down:

**NOTE:** With the below given steps you can quickly setup FLINT locally on Windows using Visual Studio 2019.

1. **Install CMake:** Visit the official Cmake website [here](https://cmake.org/download/) and then you can navigate to the Latest Release section & download the below given file. 
```sh
CMake-3.15.2-win64-x64.msi
```
2. Use **vcpkg** to install required libraries

- Clone the Vcpkg repository: https://github.com/moja-global/vcpkg
- Start a command shell in the Vcpkg repository folder and use the following commands:
```sh
# bootstrap
bootstrap-vcpkg.bat

# install packages
vcpkg.exe install boost-test:x64-windows boost-program-options:x64-windows boost-log:x64-windows turtle:x64-windows zipper:x64-windows poco:x64-windows libpq:x64-windows gdal:x64-windows sqlite3:x64-windows boost-ublas:x64-windows
```
- Open a new command shell in your FLINT repository folder after this is done. To construct the Visual Studio solution, use the following commands:

```sh
# Create a build folder under the Source folder
cd Source
mkdir build
cd build

# now create the Visual Studio Solution (2019)
cmake -G "Visual Studio 16 2019" -DCMAKE_INSTALL_PREFIX=C:/Development/Software/moja -DVCPKG_TARGET_TRIPLET=x64-windows -DENABLE_TESTS=OFF -DENABLE_MOJA.MODULES.ZIPPER=OFF -DCMAKE_TOOLCHAIN_FILE=c:\Development\moja-global\vcpkg\scripts\buildsystems\vcpkg.cmake ..

# OR Visual Studio Solution (2017)
cmake -G "Visual Studio 15 2017" -DCMAKE_INSTALL_PREFIX=C:/Development/Software/moja -DVCPKG_TARGET_TRIPLET=x64-windows -DENABLE_TESTS=OFF -DENABLE_MOJA.MODULES.ZIPPER=OFF -DCMAKE_TOOLCHAIN_FILE=c:\Development\moja-global\vcpkg\scripts\buildsystems\vcpkg.cmake ..
```
3. **Install Moja Libraries** 

The Visual Studio moja solution can be used to install compiled versions of the Moja libraries. Set the CMAKE variable **'CMAKE INSTALL PREFIX'** to your installation path (for example, *"C:/Development/Software/moja"* ).

4. **Using CMake**, make changes to the Visual Studio Solution.

- Open the CMake graphical user interface.
- Click **"Browse Build..."** and select the folder you created previously (i.e. ```C:Developmentmoja-globalFLINTSourcebuild``` in the **"Where to build the binaries"** area) 
- If the 'Where is the source code:' field does not update, make the necessary changes.
- You should now be able to update any CMake settings (for example, ENABLE flags like ENABLE TESTS), then click **“Configure”** - there should be no issues presuming all libraries and essential software have been installed. 
- Now click **"Generate,"** and the Solution should be ready to load into Visual Studio with the changes.

### Other Useful Tools :point_down:

- SQLite Studio 
- [**Tortoise Git**](https://tortoisegit.org/)
- Using Docker for Ubuntu 18:04 
