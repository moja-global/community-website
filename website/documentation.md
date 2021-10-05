# Publishing Documentation
In this guide we'll go in detail on how to write, submit and publish documentation, or more specifically project specific documentation on the moja global community website. Publishing documentation consists of four steps which are :-
1. Selecting a topic.
2. Researching the project.
3. Writing the documentation.
4. Adding it to the website.

We'll go in detail into all of these steps one-by-one and by the end of this guide you'll have all the knowledge needed to write stellar blogs regarding your experience with moja global.

## Selecting a topic
On the moja global community website's [Github issues page](https://github.com/moja-global/community-website/issues), you can find a lot of issues which are regarding docuentation required for certain projects. To do so, you can filter the issues with the `PSF` tag which stands for project specific documentation. From there you can pick an issue which has not been picked by someone else, get it assigned to yourself and start working on it.

## Researching the project
Now although there is no set way on how to go about researching a topic, there are some points which may benefit you.
1. Go to the project's Read The Docs (RTD) page and read it's exhaustive documentation.
2. Talk to the project's maintainers on Slack or by joining the catchup meetings / emailing them.
3. Try setting up the project locally and playing around with it, to make sense of the RTD docs.
4. Talk to people who are contributing to the project.

## Writing the Documentaion
There are somethings that are **very important** and must be kept in mind while submitting documentation:-
1. Do multiple iterataions of verification to make sure the information you wrote is not wrong.
2. Assume that the person reading the documentation has no idea about the project, so you'll have to explain even the nits to them.
3. Try to keep it as concise as possible.
4. Use simple vocabulary so that it's readable.

## Adding it to the Website
Every document has a unique ID attached to it which is by default the `name of the document`. It can be overriden by defining the id explicitly at the top of the document like. 
```
---
id: example-id
---
```
This will overwrite the document's id to `example-id` instead of whatever was the name of the file.

Creating a document on the community website is fairly easy. All you have to go is to go into the respective project directory inside the `docs` directory wherein you want the documentation to be visible and create a markdown file `.md`. *You can also create a `.mdx` file if you want to add some ReactJs code in your doc but that's an advance use-case and does not need to be addressed here.*
At the top of the file, specify id and title in the front matter, so that Docusaurus will pick them up correctly when generating your site.
```
---
id: test-1
name: Testing documentation
---
```

You can also reference other pieces of documentation from your doc by referencing it's relative path inside that file. You can read more about it [here](https://docusaurus.io/docs/docs-markdown-features#referencing-other-documents)
## Submitting the documentation
Unlike blogs where we prefer you to make a pull request as soon as possible. We expect you to take your time, verify your research and then submit the perfect piece of documentation. Ofcourse, after submitting it will go for a thorough review from the project's maintainers and some changes might be requested. Once those are adhered to your documentation will be published live on the moja global community website.