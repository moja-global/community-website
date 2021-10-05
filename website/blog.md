# Publishing a Blog
In this guide we'll go in detail on how to write, submit and publish your blog on the moja global community website. Publishing a blog consists of three steps which are :-
1. Selecting a topic.
2. Writing the blog.
3. Adding it to the website.

We'll go in detail into all of these steps one-by-one and by the end of this guide you'll have all the knowledge needed to write stellar blogs regarding your experience with moja global.

## Selecting a Topic
This step is fairly easy. If you have any topic in mind regarding which you'd like to write a blog and publish on the website, you can open up an issue for the same on the community website's Github repository with the tags of `Blog`. On the other hand, if there's already an issue on the repository for a specific topic on which the maintainers would like a blog. You can claim the issue by commenting on it. Once the issue is assigned to you, you can begin working on it and follow the steps given below.

## Writing the Blog
There are somethings that are **very important** and must be kept in mind while submitting a blog:-
1. The content **should not** be in any way plagiarised from any source on the internet. We will run each blog through a plagiarism detector, to make sure there are no copyright infringements.
2. Try avoiding a biased opinion on a topic, mention both sides of the argument. Also try keeping the blogs concise.

## Adding it to the Website
This section will explain not only how to add the blog to the website but also the different features offered by Docusaurus that you can use.

Install the Long Term Support (LTS) version of NodeJs with a package manager of your choice before setting up your project. You may go in for either Yarn or NPM. Once this is done, fork the repository and clone it.
    `https://github.com/<YOUR_GITHUB_USERNAME>/community-website.git`
Next, go into the directory that contains the project.
    `cd community-website/website`
Install all the dependencies
    `npm install`
Once this is done, you will be able to start the development server.
    `npm run start`

A Markdown file has to be created within the `blog` directory to publish anything in the blog.
Take a look at this example to understand this.
Create a file at website/blog/2019-09-05-test.md:
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
Blog List
The index page is the Blog List Page where all blog posts are visible.
Use the marker to demarcate the summary from the rest of the post. The matter above the marker will be shown as summary. For example,
```
---
title: Truncation Example
---
All these will be part of the blog post summary.

Even this.

<!--truncate-->

But anything from here on down will not be.

Not this.

Or this.
Although, each blog list page shows ten blog posts, you can use posts per page option in the plugin option to control the pagination. For example, if you set the postsPerPage to ‘ALL’, all the posts will be displayed on the blog list page. Meta description can also be added to the blog list page.
```
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
Blog Sidebar
Recent blog posts are displayed on the blog sidebar.By default, the sidebar shows five items, but you can disable this feature by setting the bolgsSidebarCount to infinity. This also increases the width of the main container. If you want to change the sidebar heading text, go to the blogSidebarTitle option and make the necessary changes. For example, you could change it from Recent Posts to All Posts.
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
## Submitting the blog
Once you're finished writing, we encourage you to make a pull request. It doesn't need to be perfect, all it needs to clarify is that the direction in which the blog post is going is acceptable by the maintainers and the chairs of the `Documentation Working Group`. From there our maintainers will go through the submission, suggest some changes and once those changes are adhered and submitted, the post will be live on the website!