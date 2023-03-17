function renderLicense(github, title) {
  const niceTitle = title.toLowerCase().split(" ").join("-");
  return `https://github.com/${github}/${niceTitle}`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, github, title) {
  if (license) {
    return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${renderLicense(
      github,
      title
    )})`;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `## License
This project is licensed under ${license} license`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
  ${renderLicenseBadge(data.License,data.Username,data.Title)}
  ## Table of Contents
  * [Instalation](#instalation)
  * [Usage](#usage)
   * [Contributing](#contributing)
    * [Test](#test)
     * [License](#license)

     ## Instalation
     To install type the following command

     \`\`\`
     ${data["Instalation Instructions"]}
 \`\`\`

 ## Usage
 ${data.Usage}

 ## Contributing
 ${data.Contributing}

 ## Test
 ${data.Test}


 ## License
 ${renderLicenseLink(data.License)}
`;
}

module.exports = generateMarkdown;
