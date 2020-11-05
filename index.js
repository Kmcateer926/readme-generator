const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of questions for user
const questions = [
    // asks user title
  {
    type: "input",
    name: "title",
    message: "What is your title of your project?",
  },
//   asks for description
  {
    type: "input",
    name: "description",
    message: "give me a description of your project",
  },
  {
    type: "input",
    name: "author",
    message: "who is the author of this project?",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "Are there specific test instructions (if no, press enter)?",
  },
  {
    type: "input",
    name: "install",
    message: "How do you install your application?",
  },
  {
    type: "input",
    name: "usage",
    message: "describe the usage of your project",
  },
  {
    type: "input",
    name: "technology",
    message: "What technology did you use?",
  },
  {
    type: "input",
    name: "url",
    message: "Please share the complete URL to access your project.",
  },

  {
    type: "input",
    name: "contributors",
    message: "List your contributors",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "phone",
    message: "What is your phone number?",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: [
      "MIT",
    ],
  },
];
// prompts users for questions
inquirer.prompt(questions)
// writes user input into console
    .then(function (data) {
      const fileName = "newREADME.md";
      console.log(data);
      writeToFile(fileName, data);
    });
// adds information to readme file based on user input
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), null, err => {
    if (err) {
      return console.log(err);
    }
    console.log("Success");
  });
};