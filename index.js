// add packages

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// prompt questions for terminal

inquirer
  .prompt([
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is your project name?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which type of license should this project have?',
      choices: ["MIT", "GNU GPL V3", "BSD3", "Mozilla", "Eclipse", "The Unlicense"]
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give short description of project.',
    },
    {
      type: 'input',
      name: 'dependencies',
      message: 'What command should be ran to install dependencies?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What command should be ran to run tests?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What does the user need to know about using the repo?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What does the user need to know about contributing to the repo?',
    },
  ])
  // link answers to ReadMe file topics 
  .then((answers) => {
    let github = answers.github;
    let email = answers.email;
    let title = answers.title;
    let license = answers.license;
    let description = answers.description;
    let dependencies = answers.dependencies;
    let tests = answers.tests;
    let usage = answers.usage;
    let contribution = answers.contribution;

    fs.writeFile('README.md', generateMarkdown(answers), (err) =>
      err ? console.log(err) : console.log('Successfully created ReadMe!')
    );
  });

