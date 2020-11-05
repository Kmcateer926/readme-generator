const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

// const writeFileAsync = util.promisify(fs.writeFile);

const markDown = "demo/README-demo.md";
// array of questions for user
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is your title of your project?",
      },
      {
        type: "input",
        name: "description",
        message: "give me a description of your project",
      },
      {
        type: "input",
        name: "homepage",
        message: "What is your project homepage?",
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
        name: "tech",
        message: "What technology did you use?",
      },
      {
        type: "input",
        name: "url",
        message: "Please share the complete URL to access your project.",
      },

      {
        type: "input",
        name: "contributers",
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
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: [
          "MIT",
          "Mozilla Public License",
          "Apache License",
          "GNU AGPLv3",
          "GPL",
        ],
      },
    ])

    .then(function (data) {
      console.log(data);
      writeMarkdown(markDown, Data);
    });
};
// function to write README file
function writeMarkdown(markDown, data) {
  fs.writeFile(markDown, generateMarkdown(data), null, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("successfully wrote README.md");
  });
}

prompUser();

// function to initialize program
function init() {}

// function call to initialize program
init();
