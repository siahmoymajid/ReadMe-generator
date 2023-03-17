

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown")
const fs=require("fs") 
const path=require("path")
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Title",
    message: "Please provide a Title of your project.",
  },

  {
    type: "input",
    name: "URL",
    message: "Please provide a url to your github repo.",
  },
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
    message:
      "Please explain how to use of your software from your github repo.",
  },
  {
    type: "input",
    name: "Contributing",
    message:
      "Please provide instructions on how you contribute to this github repo.",
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
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },

  {
    type: "input",
    name: "Username",
    message: "Please provide github username.",
  },

  {
    type: "input",
    name: "email",
    message: "Please provide your  email",
  },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(),fileName),data)

}

// TODO: Create a function to initialize app
function init() { 
inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    writeToFile("README_test.md",markdown({...answers}))
  })

}

// Function call to initialize app
init();
