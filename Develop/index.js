// packages needed for this application
const generateMarkdownFile = require('./utils/generateMarkdown.js');
const inquirer = require('inquirer');
const fs = require('fs');
const { type } = require('os');

// array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Enter your project title:',
    },
    {
        name:'description',
        type: 'input',
        message: 'Enter a description for your project:',
    },
    {
        name: 'installation',
        type: 'input',
        message: 'Please provide instructions on how to install this application:',
    },
    {
        name: 'usage',
        type: 'input',
        message: 'Please explain how a user would use or navigate this application:',
    },
    {
        name: 'license',
        type: 'input',
        message: 'Which license does this project use?'
    },
    {
        name: 'contributing',
        type: 'input',
        message: 'Please list any contributers that worked on this project, if none, enter NA:'
    },
    {
        name: 'test',
        type: 'input',
        message: 'Please provide instructions on how to test this application:',
    },
    {
        name: 'githubUserName',
        type: 'input',
        message: 'Please enter your GitHub username:',
    },
    {
        name: 'gitLink',
        type: 'input',
        message: 'Please include a link to the GitHub repository associated with this project:',
    },
    {
        name: 'email',
        type: 'input',
        message: 'Please enter your best email:',
    }
];

// function to write README file
function writeToFile(data) {
    fs.writeFile('generatedMD.md', data, () => {
        if('generatedMD.md') {
        console.log('Your markdown file was successfully created! ✔ 🎉');
        }
    })
}

// function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(generateMarkdownFile(data));
    })
}

// Function call to initialize app
init();

// exports data to create new MD file
module.exports = questions;
