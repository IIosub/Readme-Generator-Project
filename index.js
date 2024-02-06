const fs = require("fs"); //files system
const path = require("path"); //taking the responses and puting them into GenerateMarkdown.js
const inquirer = require("inquirer"); // snpecial software to donwload from npm
const generateMarkdown = require("./utils/generateMarkdown"); // Pulling whatever I have into GenerateMarkdown.js back to index.js

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Enter the title of your project!";
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project.",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Enter a description!";
      }
    },
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Enter a value to continue!";
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message:
      "Provide instructions and examples for use. Include screenshots as needed.",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Enter a value to continue!";
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Enter a licence!";
      }
    },
  },
  {
    type: "input",
    name: "contributing",
    message:
      "If you would like other developers to contribute, please enter your guidelines for how to do so.",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Enter a value to continue!";
      }
    },
  },
  {
    type: "input",
    name: "tests",
    message: "Provide examples on how to run tests for your application.",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Enter a value to continue!";
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username:",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Enter your GitHub Username!";
      }
    },
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Enter your email address!";
      }
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(path.join(process.cwd(), fileName), data, (err) => {
    if (err) throw err;
    console.log("README.md has been generated!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
  });
}

// function call to initialize program
init();
