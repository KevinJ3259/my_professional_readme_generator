const links = [
  ["[![License: MIT]", "(https://opensource.org/licenses/MIT)"],
  ["[![License: CC BY-NC 4.0 Commercial]", "(https://creativecommons.org/licenses/by-nc/4.0/)"],
  ["[![License: GPL v3 GNU]", "(https://www.gnu.org/licenses/gpl-3.0)"],
  ["[![License Apache]", "(https://opensource.org/licenses/Apache-2.0)"],
];

const badges = [
  ["[![License: MIT]", "(https://img.shields.io/badge/License-MIT-yellow.svg)]]"],
  ["[![License: CC BY-NC 4.0 Commercial]", "(https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)]"],
  ["[![License: GPL v3 GNU]", "(https://img.shields.io/badge/License-GPLv3-blue.svg)]"],
  ["[![License Apache]", "(https://img.shields.io/badge/License-Apache_2.0-blue.svg)]"],
];
/**
 *
 */
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  try {
    return !license || !license?.length ? "" : badges.find(([key]) => key.toLocaleLowerCase().includes(license.toLocaleLowerCase()))[1];
  } catch (error) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  try {
    return !license || !license?.length ? "" : links.find(([key]) => key.toLocaleLowerCase().includes(license.toLocaleLowerCase()))[1];
  } catch (error) {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license) + renderLicenseLink(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  let template = require("./../template");

  for (const answered_question of answers) {
    let [key, value] = answered_question;

    console.table({ key, value });
    template = template.replace(key, value);
  }

  console.log(template);

  template = template.replace("project_info_badge", renderLicenseBadge(answers['project_info_license']) + renderLicenseLink(answers['project_info_license']));

  return template;
}

module.exports = generateMarkdown;
