console.clear();

const inquirer = require("inquirer");
const fs = require("fs");

// inquirer to prompt the user for their inputs
inquirer
  .prompt([
    {
      name: "title",
      message: "What is your projects title",
      type: "input",
    },
    {
      name: "description",
      message: "Give a description of your project",
      type: "input",
    },
    {
      name: "technology",
      message: "What technology was used in your project",
      type: "input",
    },
    {
      name: "usage",
      message: "How do you navigate through the project",
      type: "input",
    },
    {
      name: "license",
      message: "What is the license for this project",
      type: "list",
      choices: ["MIT", "GNU", "Apache"],
    },
    {
      name: "Contributing",
      message: "Who contributed to this project",
      type: "input",
    },
    {
      name: "Tests",
      message: "What tests were performed for this project",
      type: "input",
    },
    {
      name: "Questions",
      message: "Message for users if they have any questions about project",
      type: "input",
    },
    {
      name: "Username",
      message: "What is your github username",
      type: "input",
    },
    {
      name: "Email",
      message: "please enter your email",
      type: "input",
    },
  ])
  // taking data that the user inputs as data
  .then(function (data) {
    fs.writeFile(`${data.title}.md`, generateMarkdown(data), function (err) {
      if (err) return console.log(err);
      console.log("Done!");
    });
  });
// function below generates what the user sees in the read me
function generateMarkdown(data) {
  return (
    `# ${data.title}` +
    license(data.license) +
    `
  

  ## Description
  ${data.description}
  

  ### Technology
  - ${data.technology}
  

  ### Usage
  - ${data.usage}

  ### License
  - ${data.license}

  ### Tests
  - ${data.Tests}

  ## Questions
  - [${data.Questions}]
01
  ---
  [${data.Username}](https://github.com/${data.Username}) ${data.Email}
    `
  );
}
//function generates the license based off of what the user choose
function license(license) {
  if (license === "MIT") {
    return `<br>[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  }
  if (license === "GNU") {
    return `<br>[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  }
  if (license === "Apache") {
    return `<br>[![License](https://img.shields.io/badge/License-Apache%201.0-red.svg)]`;
  } else {
    return;
  }
}
