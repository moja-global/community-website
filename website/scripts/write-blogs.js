const fs = require('fs');
const inquirer = require('inquirer');
const dedent = require('dedent');
const moment = require('moment');

const genFrontMatter = (answers) => {
  const tagArray = answers.tags.split(',');
  tagArray.forEach((tag, index) => (tagArray[index] = tag.trim()));
  const tags = "'" + tagArray.join("','") + "'";

  const frontMatter = dedent`---
  title: ${answers.title ? answers.title : 'Untitled'}
  description: ${answers.description ? answers.description : ' '}
  tags: [${answers.tags ? tags : ''}]
  image: imgur.com
  authors: []
  hide_table_of_contents: false
  ---
  
  Start writing your blog here. To get started, follow the [Markdown guide](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github).
  We use Markdown and MDX to write our blog posts. It should allow you to write in plain text, with some basic formatting. You can also create your own React components, and use them in your blog posts using the [MDX syntax](https://mdxjs.com/).
  Before starting your work on the blog, make sure to add your name to the list of authors on **authors.yml** file.

  Once you're finished writing, we encourage you to make a pull request. It doesn't need to be perfect, all it needs to clarify is that the direction in which the blog post is going is acceptable by the maintainers and the chairs of the Documentation Working Group. 
  From there our maintainers will go through the submission, suggest some changes and once those changes are adhered and submitted, the post will be live on the website!
  <!--truncate-->
  `;

  return frontMatter + '\n---';
};

inquirer
  .prompt([
    {
      name: 'title',
      message: 'Enter post title:',
      type: 'input',
    },
    {
      name: 'description',
      message: 'Enter post description:',
      type: 'input',
    },
    {
      name: 'tags',
      message: 'Any Tags? Separate them with , or leave empty if no tags.',
      type: 'input',
    },
  ])
  .then((answers) => {
    let fileName = answers.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9 ]/g, '')
      .replace(/ /g, '-')
      .replace(/-+/g, '-');
    fileName = `${moment().format('YYYY-MM-DD')}-${fileName}`;
    const frontMatter = genFrontMatter(answers);
    const filePath = `blog/${fileName || 'untitled'}.md`;
    fs.writeFile(filePath, frontMatter, { flag: 'wx' }, (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`Blog post generated successfully at ${filePath}`);
      }
    });
  })
  .catch((error) => {
    console.error(error);
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log('Something went wrong, sorry!');
    }
  });
