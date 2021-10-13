# Moja Global Community Website

The [Moja Global Community Website](https://community.moja.global/) is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

We use `yarn` package manager for the project. To install yarn on your system, please refer [this](https://classic.yarnpkg.com/lang/en/docs/install/).

After cloning the repository, run the following commands in your console to install the dependencies.

```console
cd community-website/website
yarn
```

The Project has [postinstall script](https://github.com/moja-global/community-website/blob/main/website/fetchContributors.js) configured that fetches latest contributors. A `contributors.json` will be written/updated.

## Local Development

```console
yarn start
```

This command starts a local development server on `localhost:3000` and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
