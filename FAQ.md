# Frequently Asked Questions - Community Website

- [What is the purpose of this website?](#what-is-the-purpose-of-this-website)
- [How to contribute to the Community website?](#how-to-contribute-to-the-community-website)
- [How to add a new project to the Community website?](#how-to-add-a-new-project-to-the-community-website)
- [What are the best practices for contributing to the Community website?](#what-are-the-best-practices-for-contributing-to-the-community-website)
- [What are the areas of contribution to the Community website?](#what-are-the-areas-of-contribution-to-the-community-website)
- [How to learn Markdown and MDX?](#how-to-learn-markdown-and-mdx)
- [How to suggest UI/UX improvements?](#how-to-suggest-ui-ux-improvements)
- [How to Contribute Translations?](#how-to-contribute-translations)
- [How to get credit for your contributions?](#how-to-get-credit-for-your-contributions)

## What is the purpose of this website?

The purpose of the community website is to provide a platform for contributors to understand more about [moja global](https://moja.global), the associated projects, and the community. It is also a place to share your knowledge and experience with the community. Community website aims to provide a workflow to help contributors to contribute to the projects and to the community.

## How to contribute to the Community website?

The installation instructions for the Community website are as follows:

```sh
npm install
```

For local development, you can use the following command to start the server:

```sh
npm run start
```

For production, you can use the following command to build the website:

```sh
npm run build
```

We use [Vercel](https://vercel.com/) to deploy the website along with generating Pull request previews. All the contributions must successfully build on Vercel and there are various avenues for contributors to contribute to the website.

## How to add a new project to the Community website?

All the projects and their associated information are hosted on the `docs` directory. To write a new project, create a new directory within the `docs` directory, and keep the directory name the same as the project name. For example, if the project is named `GCBM Animation`, the directory name should be `gcbm-animation`.

Once added, you can create respective files to add further instructions and guidelines about the project. This can include setup instructions, best practises, FAQs, and other information.

## How to add a new page to the Community website?

If you are looking to create standalone pages on the Community Website, you can create a new Markdown file within the `pages` directory of the `website` directory. Alternatively, you can create React components as well to render your page. For more information, have a look at the [official documentation for creating pages](https://docusaurus.io/docs/creating-pages).

## What are the best practices for contributing to the Community website?

We don't have a specific set of best practices for contributing to the Community website. However, we do have a set of guidelines for contributing to the Community website.

- We strictly follow the standard "fork and pull-request" development workflow.
- You must sign-off all commits on the originating branch for a PR, using the `--signoff` flag in Git.
- PR title must follow conventional commits format, with every PR consisting of ideally one commit, unless specified.
- When a PR is submitted, a suite of Continuous Integration tests and analysis are executed. Checks marked as required must pass for a PR to merge.
- To propose a new addition, submit a GitHub Issue following the "Feature" template. The proposal contents should be clear and concise. Aim for a "one-pager" style.

## What are the areas of contribution to the Community website?

We are looking for contributors who have a passion for the community and are willing to contribute to the website. Ideally, we are looking for folks with some experience in the following areas:

- Frontend Development (React & Docusaurus).
- Content Development (MDX & Markdown).
- WCAG & Accessibility.
- Maintainers & Issue triagers.

However we are open to having new contributors in any of the areas. Please reach out to us on the **#community-website** of Slack for further discussions.

## How to learn Markdown and MDX?

To get started with Markdown, we refer the following resources:

- [Markdown Tutorial](https://www.markdowntutorial.com/).
- [Mastering Markdown](https://guides.github.com/features/mastering-markdown/).

To get started with MDX (JSX in Markdown), it is recommended to go through the [official Docusaurus documentation](https://docusaurus.io/docs/markdown-features).

## How to suggest UI/UX improvements?

If you have ideas on how we can improve, please share them with us by creating a new [issue](https://github.com/moja-global/community-website/issues/new?assignees=&labels=user-feedback&template=user-feedback.yml&title=User+Feedback%3A+). We could then start a new project for your idea!

## How to Contribute Translations?

Right now, we don't have a specific plan or strategy for supporting translations. But we need your help on this. We want our projects to be accessible to non-English speakers. If you have any ideas then please share them with us by creating a [new issue](https://github.com/moja-global/community-website/issues/new?assignees=&labels=enhancement&template=feature_request.yml&title=Feature+Request%3A+). Docusaurus features internationalization (i18n) support and you can plan on the specific feature further by having a look at the [official documentation](https://docusaurus.io/docs/i18n/introduction).

## How to get credit for your contributions?

We use the [All Contributors Bot](https://allcontributors.org/) to recognize contributors.

To get recognized, add the following line to a comment after making your contribution (like submitting a pull request, replying to a question, resolving an issue, etc.):

```sh
@all-contributors please add <@username> for <contributions>
```

Replace `<@username>` with your GitHub username and `<contributions>` with any word from [this list](https://allcontributors.org/docs/en/emoji-key).

After that, the @all-contributors bot will submit a PR to include you in the list of contributors. Once this PR gets accepted, you'll get added to the Contributors table on the `README`.
