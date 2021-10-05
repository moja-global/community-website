---
id: contributing
title: Contributing
---

Community Website is currently under development. We have early users who have already started using it to provide feedback and suggestions. We are also working on a new design and new features and we are looking for help from the community. To get started with the collaboration, please join the **#community-website** channel on our [Slack workspace](https://mojaglobal.slack.com).

## Contribution scope

We use GitHub to collaborate and contribute. All changes will be public from the beginning. We use various CI services and bots to help us manage and validate the contributions.

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

### Submitting the blog

Once you're finished writing, we encourage you to make a pull request. It doesn't need to be perfect, all it needs to clarify is that the direction in which the blog post is going is acceptable by the maintainers and the chairs of the `Documentation Working Group`. From there our maintainers will go through the submission, suggest some changes and once those changes are adhered and submitted, the post will be live on the website!
