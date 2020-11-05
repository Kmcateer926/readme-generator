// function to generate markdown for README
function generateMarkdown(data) {
  return `### ${data.title}
  Table of Contents
  * [Description](#description)
  * [Author](#author)
  * [Test Instructions](#testInstructions)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Technology](#technology)
  * [Github Deployed Site](#homepage)
  * [Contributors](#contributors)
  * [Github Repository](#githubRepo)
  * [Email](#email)
  * [PhoneNumber](#phoneNumber)
  * [License](#license)
  * [Questions](#questions)
  
  ### Title
  ${data.title}
  ### Description
  ${data.description}
  ### Author
  ${data.author}
  ### Test Instructions
  ${data.testInstructions}
  ### Installation
  ${data.install}
  ### Usage
  ${data.usage}
  ### Technology
  ${data.technology}
  ### Url
  ${data.url}
  ### Contributors
  ${data.contributors}
   ### Github 
  ${data.github}
  ### Email
  ${data.email}
  ### Phone
  ${data.phone}
  ### License
  ![badge](https://img.shields.io/badge/${encodeURI(
    data.license
  )}-License-<color>)
  ${data.license}
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  © 2020 ${data.author}.  All Rights Reserved.
  ### Questions
  For additional questions, contact me at ${data.email} ${data.phone}
`;
}

module.exports = generateMarkdown;
