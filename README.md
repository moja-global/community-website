# Community Website

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-16-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

![Powered by Vercel](website/static/img/powered-by-vercel.svg)

Contributors website is for people to get a glimpse of moja global's projects and their working. The website also holds blogs and guides by the moja family to help you better understand our work and hopefully learn from others experience.

Start developing on GitPod and see the code in action.

[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/moja-global/community-website/)

## What is moja global?

[_moja global_](http://moja.global/) is a collaboration under the [Linux Foundation](https://linuxfoundation.org/) that aims for the widest possible collaboration on and use of credible tools to better manage the land sector. The flagship software is the [Full Lands Integration Tool (FLINT)](https://github.com/moja-global/flint), a tool to estimate emissions and sinks of greenhouse gases from forestry and agriculture.

## Local Development

Before setting up the project make sure the LTS (Long Term Support) version of NodeJs is installed with a package manager of your choice. We recommend NPM or Yarn.

1. Fork the repository.

2. Clone the repository.

```
https://github.com/<YOUR_GITHUB_USERNAME>/community-website.git
```

3. Go into the directory containing the project.

```
cd community-website/website
```

4. Install all the dependencies

```
yarn
```

5. Start the development server.

```
yarn start
```

6. Build the Community website:

```sh
yarn build
```

7. Serve an optimized production build:

```sh
yarn serve
```

## Linting Guidelines

The Project has ESLint configured to properly format the code. This enables developer to follow the same coding style and to avoid improperly-linted code. All the commands below should be run from the `website` directory.

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

## Deployment

We use Vercel for deployment. To enable Vercel, create an account  and through the Vercel dashboard, you can create a new project by importing a GitHub repository. The repository should be a fork of the `moja-global/community-website` repository. Vercel will automatically configure the build settings for the project and deploy it. You can further configure the domain name and other settings in the Vercel dashboard.

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

```sh
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

You can optionally deploy it using Docker Compose. Push the following commands to your terminal.

```sh
docker compose up --build
```

## Contribution Guides

- [How to write and publish a blog](https://community.moja.global/community/community-website-contributions#writing-new-blogs)
- [How to write and publish documentation](https://community.moja.global/community/community-website-contributions#adding-new-documentation)
- [How to add meetings](https://github.com/moja-global/community-website/blob/main/website/meetings.md)

## How to Get Involved?

moja global welcomes a wide range of contributions as explained in [Contributing document](https://github.com/moja-global/About-moja-global/blob/master/CONTRIBUTING.md) and in the [About moja-global Wiki](https://github.com/moja-global/.github/wiki).

## FAQ and Other Questions

- You can find FAQs on the [Wiki](https://github.com/moja.global/.github/wiki).
- If you have a question about the code, submit [user feedback](https://github.com/moja-global/About-moja-global/blob/master/Contributing/How-to-Provide-User-Feedback.md) in the relevant repository
- If you have a general question about a project or repository or moja global, [join moja global](https://github.com/moja-global/About-moja-global/blob/master/Contributing/How-to-Join-moja-global.md) and
  - [submit a discussion](https://help.github.com/en/articles/about-team-discussions) to the project, repository or moja global [team](https://github.com/orgs/moja-global/teams)
  - [submit a message](https://get.slack.help/hc/en-us/categories/200111606#send-messages) to the relevant channel on [moja global's Slack workspace](mojaglobal.slack.com).
- If you have other questions, please write to info@moja.global

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
