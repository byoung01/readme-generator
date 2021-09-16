// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  var inquirer = require("inquirer");
  inquirer
    .prompt([
      /* Pass your questions in here */
      {
        name: "license",
        message: "What is the license for this project",
        type: "checkbox",
      },
    ])
    .then((answers) => {
      choices: ["MIT", "Artisitc", "GNU", "Apache"];
      // Use user feedback for... whatever!!
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}
console.log("renderLicenseBadge");

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  `;
}

module.exports = generateMarkdown;
