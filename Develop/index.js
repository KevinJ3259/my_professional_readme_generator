// TODO: Include packages needed for this application
let inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  //     GIVEN a command-line application that accepts user input
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
  {
    name: "project_info_title",
    type: "input",
    message: "What is the title of the project?",
  },
  {
    name: "project_info_license",
    type: "checkbox",
    message: "What license do you want to use",
    choices: ["MIT", "commercial", "GNU", "APACHE"],
  },
  { name: "project_info_description", message: "What is the description of the project?", type: "input" },
  //   description, installation instructions, usage information, contribution guidelines, and test instructions

  { name: "project_info_installtion_instructions", type: "input", message: "what are the installation instructions" },
  { name: "project_info_usage_information", type: "input", message: "What type of usage description for this project" },
  { name: "project_info_contribution_guidelines", type: "input", message: "Provide information on contribution guidelines" },
  { name: "project_info_test_instructions", type: "input", message: "How can this project be tested" },

  { name: "project_info_gitHub_username", type: "input", message: "What is your GitHub username" },
  { name: "project_info_github_link", type: "input", message: "What is your github profile link" },
  { name: "project_info_email", type: "input", message: "What is your email address" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
async function init() {
  //iterate over questions
  console.log("started");

  let answered_questions = await inquirer
    .prompt(questions)
    .then((answers) => Object.entries(answers))
    .then((answers) => {
      console.log("answers from inquirer", answers);

      let template = require("./template");

      for (const answered_question in answers) {
        let [key, value] = answered_question;

        console.table({ key, value });
        template.replace(key, value);
      }

      console.log(template);

      // print to a new Readme.md file
    })
    .catch((err) => console.log("generator suffered an exception", err));
}

// Function call to initialize app
init();
