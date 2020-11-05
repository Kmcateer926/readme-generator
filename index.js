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
//   asks user who the author is
  {
    type: "input",
    name: "author",
    message: "who is the author of this project?",
  },
//   asks user for test instructions
  {
    type: "input",
    name: "testInstructions",
    message: "Are there specific test instructions (if no, press enter)?",
  },
//   asks user how to install 
  {
    type: "input",
    name: "install",
    message: "How do you install your application?",
  },
//   asks user how to use 
  {
    type: "input",
    name: "usage",
    message: "describe how to use this project",
  },
//   asks user about technology used 
  {
    type: "input",
    name: "technology",
    message: "What technologies did you use?",
  },
//   asks user for deployed site URL 
  {
    type: "input",
    name: "url",
    message: "Please share your URL to access your project.",
  },
//   asks user for contributor information 
  {
    type: "input",
    name: "contributors",
    message: "List your contributors",
  },
//   asks user for github page 
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
  },
//   asks user for email 
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
//   asks user for phone number 
  {
    type: "input",
    name: "phone",
    message: "What is your phone number?",
  },
//   asks user for license information 
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
      const fileName = "demo2README.md";
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