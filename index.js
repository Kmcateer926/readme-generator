const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");

// const writeFileAsync = util.promisify(fs.writeFile);

const markDown = "demo/README-demo.md";
// array of questions for user
const questions = [
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
      "Mozilla Public License",
      "Apache License",
      "GNU AGPLv3",
      "GPL",
    ],
  },
];

inquirer.prompt(questions)

    .then(function (data) {
      const fileName = "testREADME.md";
      console.log(data);
      writeToFile(fileName, data);
    });




function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), null, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("DONE");
  });
}
// .then(function (data) {
//   console.log(data);
//   writeMarkdown(markDown, Data);
// });

// function to write README file
// function writeMarkdown(markDown, data) {
//   fs.writeFile(markDown, generateMarkdown(data), null, function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("successfully wrote README.md");
//   });
// }

// function writeFile(fileName, data) {
//   console.log("indside writefile", data);
//   //here is where the logic is placed - detailed steps the function will make
//   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
// }

// // const writeFileAsync = util.promisify(writeToFile);

// // prompUser();

// // function to initialize program
// function init() {
//   inquirer
//     .prompt(questions)

//     .then((data) => {
//       console.log("inside init", data);
//       //   function to write README file
//       //   writeFile("README.md", generateMarkdown({ ...responses }));
//       writeFile("README.md", generateMarkdown(data));
//       console.log("after writefile");
//     });
// }

// // function call to initialize program
// init();
