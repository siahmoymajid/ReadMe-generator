// TODO: Include packages needed for this application
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Description",
    message: "Please provide a description of your github repo.",
  },

  { 
   type: "input",
    name: "Instalation Instructions",
    message: "Please provide a instalation instructions of your github repo.",
  },
  {
    type: "input",
    name: "Usage",
    message: "Please explain how to use of your software from your github repo.",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please provide instructions on how you contribute to thsi github repo.",
  },
  {
    type: "input",
    name: "Test",
    message: "Please describe how you use a unit test with this software.",
  },

  {
    type: "list",
    name: "License",
    message: "Would you like to include a license for your repo.?",
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() { 
inquirer.prompt(questions).then((answers) => {
    console.log(answers.Description);
  })

}

// Function call to initialize app
init();
