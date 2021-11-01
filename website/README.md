# Moja Global Community Website

The [Moja Global Community Website](https://community.moja.global/) is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

## Installation

We use `yarn` package manager for the project. Avoid using `npm` to set up this project. To install yarn on your system, please refer [this](https://classic.yarnpkg.com/lang/en/docs/install/).

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

## Linting Guidelines

The Project has ESLint configured to properly format the code. This enables developer to follow the same coding style and to avoid improperly-linted code.

```
yarn lint
```
This command logs all warnings and lint errors and scope of fixes/improvements.

```
yarn lint:fix
```
This option instructs ESLint to try to fix as many issues as possible. The fixes are made to the actual files themselves and only the remaining unfixed issues are output.

```
eslint --ignore-path tmp/.eslintignore file.js
```
This option allows you to specify the file to use as your `.eslintignore`. By default, ESLint looks in the current working directory for `.eslintignore`. You can override this behavior by providing a path to a different file.


## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
