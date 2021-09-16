console.clear();

const inquirer = require("inquirer");
const fs = require("fs");

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
      type: "checkbox",
      choices: ["MIT", "Artisitic", "GNU", "Apache"],
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
  ])
  .then(function (data) {
    console.log(data);
    fs.writeFile(
      `${data.title}.md`,
      generateMarkdown(data),
      function (err) {
        if (err) return console.log(err);
        console.log("Done!");
      }
      // fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
      //   if (err) throw err;
      //   console.log('Saved!');
      // });
    );
  });
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.description}
    
  ${data.technology}

  ${data.usage}

  ${data.license}

  ${data.Tests}

  ${data.Questions}
    `;
}
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
