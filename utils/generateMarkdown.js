function generateTOC(data) {

  if (data.confirmTOC) {
    return `
## Table of Contents
- [Deployment URL](#Deployment-URL)
- [Repo URL](#Repo-URL)
- [Installation](#Installation)
- [Usage](#Usage)
- [Technologies Used](#Technologies-Used)
- [Credits](#Credits)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Roadmap](#Roadmap)
- [Questions](#Questions)
    `;
  } else {
    return ``;
  }
}

function generateLicenseBadge(data) {
  const badgeObject = {
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    UNLICENSE: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  };

  const badgeLink = badgeObject[data.license];

  return `
  ${badgeLink}
  `;
}

function generateScreenshot(data) {
  if (data.confirmScreenshot) {
    return `
### Screenshot / Gif Animation
![Screenshot / Gif Animation](./assets/images/${data.screenshot})
    `;
  } else {
    return ``;
  }
}

function generateVideo(data) {
  if (data.confirmVideo) {
    return `
### Video
![Video Demo](./assets/videos/${data.video})
    `;
  } else {
    return ``;
  }
}

function generateCollaborators(data) {
  if (data.confirmCollaborators) {
    return `
## Credits
### Collaborators
${data.collaborators}
    `;
  } else {
    return ``;
  }
}

function generateLicense(data) {
  if (data.confirmLicense) {

    const licenseObject = {
      ISC: 'https://opensource.org/licenses/ISC',
      MIT: 'https://opensource.org/licenses/MIT',
      UNLICENSE: 'http://unlicense.org/'
    };
  
    const licenseLink = licenseObject[data.license];

    return `
## License
This project is licensed under the terms of the [${data.license}](${licenseLink}) license.
    `;
  } else {
    return ``;
  }
}

function generateContributing(data) {
  if (data.confirmContributing) {
    return `
## Contributing
- ${data.contributing}
    `;
  } else {
    return ``;
  }
}

function generateTests(data) {
  if (data.confirmTests) {
    return `
## Tests
${data.tests}
    `;
  } else {
    return ``;
  }
}

function generateRoadmap(data) {
  if (data.confirmRoadmap) {
    return `
## Roadmap
${data.roadmap}
    `;
  } else {
    return ``;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);

  return `
# ${data.title}
  
${generateLicenseBadge(data)}

## Description
${data.description}

${generateTOC(data)}

## Deployment URL
${data.deployment}
  
## Repo URL
${data.repo}

## Installation
- ${data.installationFirst}
    
## Usage
- ${data.usage}
${generateScreenshot(data)}
${generateVideo(data)}
  
## Technologies Used
- ${data.tech}
  
${generateCollaborators(data)}
${generateLicense(data)}
  
## Features
- ${data.features}
  
${generateContributing(data)}
${generateTests(data)}
${generateRoadmap(data)}

## Questions
Please send your questions and / or comments to:
- ${data.name}
- GitHub Portfolio: https://github.com/${data.username}
- Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
