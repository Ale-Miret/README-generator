const indexJS = require('../index')

// function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  var licenseBadge = '';
  if (licenseBadge === 'NA') {
    licenseBadge = '';
  } else if (license === 'MIT') {
    licenseBadge = '![MIT](https://img.shields.io/badge/License-MIT-brightgreen)';
  } else if (license === 'Apache License 2.0') {
    licenseBadge = '![Apache License 2.0](https://img.shields.io/badge/License-Apache%20License%202.0-red)';
  } else if (license === 'Unlicense') {
    licenseBadge = '![Unlicense](https://img.shields.io/badge/License-The%20Unlicense-blue)';
  } return licenseBadge;
}

// function that returns the license link
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  var licenseLink = '';
  if(license === 'NA') {
    licenseLink = '';
  } else if (license === 'MIT') {
    licenseLink = '[MIT link](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache License 2.0') {
    licenseLink = '[Apache License 2.0 link](https://www.apache.org/licenses/LICENSE-2.0)';
  } else if (license === 'Unlicense') {
    licenseLink = '[Unlicense link](https://unlicense.org/)';
  } return licenseLink;
}

//  function that returns the license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  var licenseSection = '';
  if (license === 'NA') {
    licenseSection = '';
  } else {
    licenseSection = `${license} License`
  } return licenseSection;
}

//  function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#test)
  * [Questions](#questions)

  ## Description:
  - ${data.description}

  ## Installation:
  The following must be installed before running this application:
  - ${data.installation}

  ## Usage:
  The following are instructions on how to use this application:
  - ${data.usage}

  ## License:
  - ${renderLicenseBadge(data.license)}
  - ${renderLicenseLink(data.license)}
  - ${renderLicenseSection(data.license)}

  ## Contributing:
  - ${data.contributing}

  ## Tests:
  - ${data.test}

  ## Questions:
  If you have any questions, please refer to the following or feel free to contact me via email:
  - Github User: [User's account name](https://github.com/${data.githubUserName})
  - Guthub Repo: [Project repository](${data.gitLink})
  - Email: <${data.email}>
`;
}

module.exports = generateMarkdown;
