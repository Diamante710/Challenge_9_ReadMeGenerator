// Linked licensing information to selection of choices
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "GNU GPL V3":
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case "BSD3":
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case "Mozilla":
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case "Eclipse":
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    case "The unlicense":
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    default:
      return "";
  }
}


// Created function to display information from terminal into ReadMe file
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Project Description
  ${data.description}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Dependencies
  ${data.dependencies}
  ## Test
  ${data.tests}
  ## License
  ${renderLicenseBadge(data.license)}
  ## Contact Information
  ### Feel free to contact me through one of the provided links below.
  #### ${data.email}
  #### https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
