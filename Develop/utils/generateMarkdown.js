const licenses = {
  MIT: {
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]]",
    link: "(https://opensource.org/licenses/MIT)",
  },
  commercial: {
    badge: "[![License: CC BY-NC 4.0 Commercial](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)]",
    link: "(https://creativecommons.org/licenses/by-nc/4.0/)",
  },
  GNU: {
    badge: "[![License: GPL v3 GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)]",
    link: "(https://www.gnu.org/licenses/gpl-3.0)",
  },
  Apache: {
    badge: "[![License Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]",
    link: "(https://opensource.org/licenses/Apache-2.0)",
  },
};
/**
 *
 */
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  try {
    return licenses[license].badge;
  } catch (error) {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  try {
    return licenses[license].link;
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
  console.table(answers);
  for (const answered_question of Object.entries(answers)) {
    let [key, value] = answered_question;

    template = template.replace(key, value);
  }

  template = template.replace("project_info_badge", renderLicenseSection(answers["project_info_license"]));

  return template;
}

module.exports = generateMarkdown;
