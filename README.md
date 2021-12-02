<div align="center">
<img src="https://i0.wp.com/mojaglobal.kinsta.cloud/wp-content/uploads/2021/03/Asset-66@4x.png" alt="Moja global logo" height ="auto" width="200" />
<br />
<h1>Community Website</h1>
<p>
Repository for the moja global community website, a resource for the moja global community.
</p>
<p align="center">
<a href="https://github.com/moja-global/community-website" alt="GitHub contributors">
<img src="https://img.shields.io/github/contributors/moja-global/community-website.svg" /></a>
<a href="https://github.com/moja-global/community-website" alt="GitHub issues by-label">
<img src="https://img.shields.io/github/issues/moja-global/community-website" /></a>
<a href="https://mojaglobal.slack.com/" alt="Slack">
<img src="https://img.shields.io/badge/Slack-@layer5.svg?logo=slack" /></a>
<a href="https://github.com/moja-global/community-website" alt="Twitter Follow">
<img src="https://img.shields.io/twitter/follow/mojaglobal.svg?label=Follow&style=social" /></a>
<a href="https://github.com/moja-global/community-website" alt="License">
<img src="https://img.shields.io/github/license/moja-global/community-website.svg" /></a>
</p>
</div>

## Introduction

[Moja global](http://moja.global/) is a collaboration under the [Linux Foundation](https://linuxfoundation.org/) that aims for the widest possible collaboration on and use of credible tools to better manage the land sector. The flagship software is the [Full Lands Integration Tool (FLINT)](https://github.com/moja-global/flint), a tool to estimate emissions and sinks of greenhouse gasses from forestry and agriculture.

The Community website aims to serve a glimpse of moja global's projects and their working to the wider community. The website hosts projects, case studies, blogs, tutorials and more developed by the wider moja community to help you better understand our work and hopefully learn from others experience.

Our mission is to help new users become familiar with the moja global community. We want to:

- Explain FLINT and the ecosystem surrounding it to anyone who is new to the ecosystem.
- Cover updates across the ecosystem to help users stay up to date.
- Bring Measure, Reporting and Verification (MRV) software edication to the community, in as many languages as possible.
- Assist new developers, writers, community managers and other contributors to get started on our projects.
- Provide them an opportunity to work on funded projects under the mentorship of the community members.

## Technology Stack

We use a variety of technologies to build the web interface and support the community. They include:

- [NodeJS](https://nodejs.org/)
- [Yarn package manager](https://yarnpkg.com/)
- [Docusaurus](https://docusaurus.io/)
- [React](https://reactjs.org/)
- [Algolia DocSearch](https://www.algolia.com/)
- [GitHub Actions](https://github.com/features/actions)
- [Vercel](https://vercel.com/)
- [LightHouse](https://lighthouse.io/)

We use NodeJS and Yarn to install, test and build the website. Docusaurus has been used as a static site generator to build the website. React is being utilized to build our custom component-based user interface to provide a modern look to the website. Algolia DocSearch is used to provide search functionality to the website, offering site-indexing and rapid fast intra-site search results. GitHub Actions manages our CI/CD pipelines and issue triage. Vercel is used to deploy the website, while providing us DNS management and automated deployment of our pull requests. LightHouse is used to continuously monitor our website benchmarks and help us identify SEO, accessibility and performance issues.

## Installation

Before setting up the project make sure the LTS (Long Term Support) version of NodeJS is installed. We recommend using the Yarn package manager to install the project.

1. Fork the [community-website repository](https://github.com/moja-global/community-website).
2. Clone the repository:
  ```sh
  git clone git@github.com:<USERNAME>/community-website.git && cd community-website
  ```
  Replace the `<USERNAME>` with your GitHub username. If you've already forked the repo, you'll want to ensure your fork is configured and that it's up to date. This will save you the headache of potential merge conflicts. To configure your fork:
  ```sh
  git remote add upstream https://github.com/moja-global/community-website.git
  ```
  To sync your fork with the latest changes:
  ```sh
  git checkout main
  git fetch upstream
  git merge upstream/main
  ```
3. Install the project:
  ```sh
  yarn
  ```
4. Start the project:
  ```sh
  yarn start
  ```
5. Build the project:
  ```sh
  yarn build
  ```
6. Serve the project:
  ```sh
  yarn serve
  ```

## How to Get Involved?

Moja global welcomes contributions to the community website. If you have an idea for a new feature or a bug fix, please submit an issue or pull request. Our planned features can be found on our [Issue Tracker](https://github.com/moja-global/community-website/issues). Our contribution guides include:

- [How to write and publish a blog](https://community.moja.global/community/community-website-contributions#writing-new-blogs)
- [How to write and publish documentation](https://community.moja.global/community/community-website-contributions#adding-new-documentation)
- [How to add meetings](https://github.com/moja-global/community-website/blob/main/website/meetings.md)

## Developer Notes

### Linting

The project has ESLint configured to properly format the code. This enables developer to follow the same coding style and to avoid improperly-linted code. All the commands below should be run from the `website` directory.

```sh
yarn lint
```
This command logs all warnings and lint errors and scope of fixes/improvements.

```sh
yarn lint:fix
```
This option instructs ESLint to try to fix as many issues as possible. The fixes are made to the actual files themselves and only the remaining unfixed issues are output.

```sh
eslint --ignore-path tmp/.eslintignore file.js
```
This option allows you to specify the file to use as your `.eslintignore`. By default, ESLint looks in the current working directory for `.eslintignore`. You can override this behavior by providing a path to a different file.

### Deployment

We use Vercel for deployment. To enable Vercel, create an account  and through the Vercel dashboard, you can create a new project by importing a GitHub repository. The repository should be a fork of the `moja-global/community-website` repository. Vercel will automatically configure the build settings for the project and deploy it. You can further configure the domain name and other settings in the Vercel dashboard.

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```sh
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

You can optionally deploy it using Docker Compose. Push the following commands to your terminal.

```sh
docker compose up --build
```

### Frequently Asked Questions

We have a [FAQ](FAQq.md) page that answers common questions around the community website and how to contribute to it.

## Support

Moja global thrives on community participation, and we appreciate your contributions to our website and our documentation!

You can reach out to us through the following channels:

- [info@moja.global](mailto:info@moja.global) : Ask questions about moja global relevant to the members and management with a point of focus for new user countries and policy makers.
- [tsc@moja.global](mailto:tsc@moja.global) : Ask questions about contributing code, helping out with development, resolving issues and building new features with moja global teams.
- [mentorship@moja.global](mailto:mentorship@moja.global) : Ask questions about participating in the community, sponsoring programs, funding opportunity and community development.
- [Slack community](https://join.slack.com/t/mojaglobal/shared_invite/zt-o6ta1ug0-rVLjAo460~d7JbZ~HpFFtw ): Connect with other developers, scientists, policy makers and other interested people over our Slack community.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://www.linkedin.com/in/abhishek-kr09/"><img src="https://avatars.githubusercontent.com/u/48255244?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Abhishek Kumar</b></sub></a><br /><a href="#infra-Abhishek-kumar09" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://siddhant-k-code.github.io/"><img src="https://avatars.githubusercontent.com/u/55068936?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Siddhant Khare</b></sub></a><br /><a href="https://github.com/moja-global/community-website/commits?author=Siddhant-K-code" title="Code">💻</a> <a href="https://github.com/moja-global/community-website/pulls?q=is%3Apr+reviewed-by%3ASiddhant-K-code" title="Reviewed Pull Requests">👀</a> <a href="#mentoring-Siddhant-K-code" title="Mentoring">🧑‍🏫</a> <a href="#question-Siddhant-K-code" title="Answering Questions">💬</a></td>
    <td align="center"><a href="https://github.com/eemike07"><img src="https://avatars.githubusercontent.com/u/2515617?v=4?s=100" width="100px;" alt=""/><br /><sub><b>eemike07</b></sub></a><br /><a href="https://github.com/moja-global/community-website/commits?author=eemike07" title="Code">💻</a></td>
    <td align="center"><a href="http://www.linkedin.com/in/faisaljamil25"><img src="https://avatars.githubusercontent.com/u/69186619?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Faisal Jamil</b></sub></a><br /><a href="https://github.com/moja-global/community-website/commits?author=faisaljamil25" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/utkarsh1311"><img src="https://avatars.githubusercontent.com/u/70108561?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Utkarsh Maurya</b></sub></a><br /><a href="https://github.com/moja-global/community-website/issues?q=author%3Autkarsh1311" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/17bcs1837"><img src="https://avatars.githubusercontent.com/u/62862321?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Aman Kumar</b></sub></a><br /><a href="https://github.com/moja-global/community-website/issues?q=author%3A17bcs1837" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/romasinha"><img src="https://avatars.githubusercontent.com/u/65072006?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Roma Sinha</b></sub></a><br /><a href="https://github.com/moja-global/community-website/commits?author=romasinha" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://anirudhpanda.me/"><img src="https://avatars.githubusercontent.com/u/66218496?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Anirudh Panda</b></sub></a><br /><a href="https://github.com/moja-global/community-website/issues?q=author%3AAnirudhPanda" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/padmajabhol"><img src="https://avatars.githubusercontent.com/u/75530516?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Padmaja Bhol</b></sub></a><br /><a href="https://github.com/moja-global/community-website/issues?q=author%3Apadmajabhol" title="Bug reports">🐛</a></td>
    <td align="center"><a href="https://github.com/Ishika414"><img src="https://avatars.githubusercontent.com/u/78595001?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Ishika414</b></sub></a><br /><a href="https://github.com/moja-global/community-website/commits?author=Ishika414" title="Code">💻</a></td>
    <td align="center"><a href="https://megatank58.me/"><img src="https://avatars.githubusercontent.com/u/51410502?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Megatank58</b></sub></a><br /><a href="https://github.com/moja-global/community-website/commits?author=Megatank58" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/rutujaingole"><img src="https://avatars.githubusercontent.com/u/72335505?v=4?s=100" width="100px;" alt=""/><br /><sub><b>rutujaingole</b></sub></a><br /><a href="https://github.com/moja-global/community-website/commits?author=rutujaingole" title="Documentation">📖</a> <a href="#infra-rutujaingole" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="http://iamrajiv.github.io"><img src="https://avatars.githubusercontent.com/u/42106787?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Rajiv Singh</b></sub></a><br /><a href="#infra-iamrajiv" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a></td>
    <td align="center"><a href="https://mizanxali.github.io/"><img src="https://avatars.githubusercontent.com/u/59915742?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Mizan Ali</b></sub></a><br /><a href="https://github.com/moja-global/community-website/commits?author=mizanxali" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="http://www.juliancabezas.com"><img src="https://avatars.githubusercontent.com/u/17553010?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Julián Cabezas</b></sub></a><br /><a href="#translation-juliancabezas" title="Translation">🌍</a></td>
    <td align="center"><a href="https://github.com/Devesh21700Kumar"><img src="https://avatars.githubusercontent.com/u/59202075?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Devesh Kumar</b></sub></a><br /><a href="https://github.com/moja-global/community-website/issues?q=author%3ADevesh21700Kumar" title="Bug reports">🐛</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## License

This project is licensed under the [Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/).
