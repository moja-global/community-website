---
id: contributing
title: Contributing
---

Community Website is currently under development. We have early users who have already started using it to provide feedback and suggestions. We are also working on a new design and new features and we are looking for help from the community. To get started with the collaboration, please join the **#community-website** channel on our [Slack workspace](https://mojaglobal.slack.com).

## Contribution scope

We use GitHub to collaborate and contribute. All changes will be public from the beginning. We use various CI services and bots to help us manage and validate the contributions.

### Adding new documentation

In this section we will go in detail on how to write, submit and publish documentation, or more specifically project specific documentation on the moja global community website. Publishing documentation consists of four steps which are:

1. Selecting a topic.
2. Researching the project.
3. Writing the documentation.
4. Adding it to the website.

#### Selecting a topic

On the moja global community website's [Github issues page](https://github.com/moja-global/community-website/issues), you can find issues related to project specific documentation. Use the filter with the `PSF` tag which stands for project specific documentation to find the specific issues. Pick an issue which has not been picked by someone else, request yourself to be assigned the same and start the work on the same.

#### Researching the project

We have some good first steps to follow while going about researching a topic, which would benefit your research:

1. Go to the project specific Read The Docs (RTD) documentation websute and read it's exhaustive documentation.
2. Talk to the project's maintainers on Slack or by joining the catchup meetings/emailing them.
3. Try setting up the project locally and playing around with it, to make sense of the RTD docs.
4. Talk to people who are contributing to the project.

#### Writing the Documentaion

There are somethings that are quite important and must be kept in mind while writting the documentation:

1. Do multiple iterataions over the content to remove any typos, mistakes and inconsistencies.
2. Don't assume that the reader knows about the project and keep it as simple as possible for readers to understand the nits and grits of the project.
3. Keep the documentation piece concise, crisp and to the point.
4. Avoid using technical jargon and prefer to use simple language and vocabulary..

#### Additing it to the website

Every document has a unique ID attached to it which is by default the `name of the document`. It can be overriden by defining the ID explicitly at the top of the document like.

```
---
id: example-id
---
```

This will overwrite the document's ID to `example-id` instead of whatever was the name of the file.

Creating a document on the community website is fairly easy. All you have to do is to go into the respective project directory inside the `docs` directory wherein you want the documentation to be visible and create a markdown file `.md`. You can also create a `.mdx` file if you want to add some JSX code in your documentation but that's an complex use-case and does not need to be addressed here.

At the top of the file, specify ID and the title in the front matter, so that our configurations will pick them up correctly while generating your site.

```
---
id: test-1
name: Testing documentation
---
```

You can also reference other pieces of documentation from your documentation by referencing it's relative path inside that file. You can read more about it [on the Docusaurus documentation](https://docusaurus.io/docs/docs-markdown-features#referencing-other-documents)

Unlike blogs where we prefer you to make a pull request as soon as possible. We expect you to take your time, verify your research and then submit the perfect piece of documentation. After the submission, it will go for a thorough review from the project's maintainers and requested changes would be expected to be addressed. Once those are acknowledged and adhered, the documentation will be published on the moja global's Community website.

### Writing new blogs

In this section we will go in detail on how to write, submit and publish your blog on the moja global community website. To publish a blog, we need to undergo three simple steps:

1. Selecting a topic.
2. Writing the blog.
3. Adding it to the website.

We will go in detail into all of these steps one-by-one and by the end of this section you'll have all the knowledge needed to write stellar blogs regarding your experience with moja global.

#### Selecting a topic

This step is fairly easy. If you have any topic in mind regarding which you'd like to write a blog and publish on the website, you can open up an issue for the same on the Community website's Github repository with the `Blog` tag. On the other hand, if there's already an issue on the repository for a specific topic on which the maintainers would like a blog, you can claim the issue by commenting on it. Once the issue is assigned to you, you can start working on the same and follow the steps given below.

#### Writing the Blog

There are somethings that are quite important and must be kept in mind while submitting a blog:

1. The content should not be in any way plagiarised from any source on the internet. We will run each blog through a plagiarism detector, to make sure there are no copyright infringements.
2. Try avoiding a biased opinion on a topic, mention both sides of the argument.
3. Keep the blogs concise, crisp and to the point.

#### Publishing the Blog

If you have not already, follow [these instructions](https://github.com/moja-global/community-website/blob/main/FAQ.md#how-to-contribute-to-the-community-website) to setup the Community website locally before publishing the same. You must be familiar with the basic Git & GitHub workflow to be able to clone and setup the website and push your changes.

Once the community website has been setup, navigate to the `blog` directory and create a Markdown file with the name of your blog. The name of the file should be in the format `YYYY-MM-DD-TITLE.md`. The purpose of the naming convention is to make sure that the blogs are sorted in chronological order.

Let's take an example of a blog that we would like to submit. Create a file at `website/blog/2019-09-05-test.md` and write the following content in it:

```
---
title: Testing Community Website
description: Trying to write my first blog post on moja global's community website.
slug: test
authors:
  - name: Sarthak Kundra
    title: Maintainer of community website
    url: https://github.com/sarthakkundra
    image_url: https://github.com/sarthakkundra.png
tags: [test, test blog]
hide_table_of_contents: false
---
Welcome to this blog. This blog is created with [**Docusaurus 2**](https://docusaurus.io/).

<!--truncate-->

This is my first blog about moja global.

```

Use the marker to demarcate the summary from the rest of the post. The matter above the marker will be shown as summary. You can further edit the file to add more content and add images as per the Markdown syntax.

#### Customizing the Blog

Although, each blog list page shows ten blog posts, you can use posts per page option in the plugin option to control the pagination. For example, if you set the postsPerPage to ‘ALL’, all the posts will be displayed on the blog list page. Meta description can also be added to the blog list page.

```
module.exports = {
  // ...
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          blogTitle: 'Docusaurus blog!',
          blogDescription: 'A Docusaurus powered blog!',
          postsPerPage: 'ALL',
        },
      },
    ],
  ],
};
```

Recent blog posts are displayed on the blog sidebar. By default, the sidebar shows five items, but you can disable this feature by setting the `bolgsSidebarCount` to infinity. This also increases the width of the main container. If you want to change the sidebar heading text, go to the `blogSidebarTitle` option and make the necessary changes. For example, you could change it from Recent Posts to All Posts.

```
module.exports = {
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        blog: {
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
        },
      },
    ],
  ],
};
```

#### Submitting the blog

Once you're finished writing, we encourage you to make a pull request. It doesn't need to be perfect, all it needs to clarify is that the direction in which the blog post is going is acceptable by the maintainers and the chairs of the `Documentation Working Group`. From there our maintainers will go through the submission, suggest some changes and once those changes are adhered and submitted, the post will be live on the website!
