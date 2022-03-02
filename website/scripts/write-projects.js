const fs = require('fs');
const inquirer = require('inquirer');
const dedent = require('dedent');

const genFrontMatter = (answers) => {
  const frontMatter = dedent`---
  id: About
  title: About ${answers.name}
  ---
  
  Lorem Ipsum
  `;
  return frontMatter;
};

inquirer
  .prompt([
    {
      name: 'name',
      message: 'Enter the name of your project:',
      type: 'input',
    },
    {
      name: 'title',
      message: 'Name of Directory Path (Add a prefix as a number, like NN-XYZ):',
      type: 'input',
    },
  ])
  .then((answers) => {
    let directoryPath = answers.title;
    directoryPath = `${directoryPath}`;
    const frontMatter = genFrontMatter(answers);
    const filePath = `docs/${directoryPath}/About.mdx`;
    fs.mkdirSync(`docs/${directoryPath}`);
    fs.writeFile(filePath, frontMatter, (err) => {
      if (err) {
        throw err;
      } else {
        console.log(`${filePath} created!`);
      }
    });
  })
  .catch((error) => {
    console.error(error);
    if (error.isTtyError) {
      console.log('Prompt was not rendered in the terminal.');
    } else {
      console.log('Error!');
    }
  });
