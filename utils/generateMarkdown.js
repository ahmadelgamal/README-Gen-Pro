function generateTOC(data) {
  if (data.confirmTOC) {

    let toc = `## Table of Contents
- [Deployment URL](#Deployment-URL)
- [Repo URL](#Repo-URL)
- [Installation](#Installation)
- [Usage](#Usage)
- [Technologies Used](#Technologies-Used)`;

    const collaborators = `
- [Credits](#Credits)`;
    if (data.confirmCollaborators) {
      toc = toc.concat(collaborators);
    }

    const license = `
- [License](#License)`;
    if (data.confirmLicense) {
      toc = toc.concat(license);
    }

    const features = `
- [Features](#Features)`;
    toc = toc.concat(features);

    const contributing = `
- [Contributing](#Contributing)`;
    if (data.confirmContributing) {
      toc = toc.concat(contributing);
    }

    const tests = `
- [Tests](#Tests)`;
    if (data.confirmTests) {
      toc = toc.concat(tests);
    }

    const roadmap = `
- [Roadmap](#Roadmap)`;
    if (data.confirmRoadmap) {
      toc = toc.concat(roadmap);
    }

    const questions = `
- [Questions](#Questions)`;
    toc = toc.concat(questions);

    return toc;

  } else {
    return ``;
  }
}

function generateLicenseBadge(data) {
  const badgeObject = {
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'GNU GPL v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    UNLICENSE: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  };

  const badgeLink = badgeObject[data.license];

  return `${badgeLink}`;
}

function generateBullets(data) {
  if(data) {
    data = data.split("|");
    let generatedSteps = "";
    
    for (let i = 0; i < data.length; i++) {
      // can change the '1. ' to '- ' to convert to bullet-list instead of number-list
      const nextStep = `1. ${data[i]}
`;
      generatedSteps = generatedSteps.concat(nextStep);
    }
    return generatedSteps;
  } else return ``;
}

function generateScreenshot(data) {
  if (data.confirmScreenshot) {
    return `### Screenshot / Gif Animation
![Screenshot / Gif Animation](./assets/images/${data.screenshot})`;
  } else {
    return ``;
  }
}

function generateVideo(data) {
  if (data.confirmVideo) {
    return `### Video
![Video Demo](./assets/videos/${data.video})`;
  } else {
    return ``;
  }
}

function generateCollaborators(data) {
  if (data.confirmCollaborators && data.collaborators) {
    const renderCollaborators = generateBullets(data.collaborators);
    return `## Credits
### Collaborators
${renderCollaborators}`;
  } else {
    return ``;
  }
}

function generateLicense(data) {
  if (data.confirmLicense) {

    const licenseObject = {
      ISC: 'https://opensource.org/licenses/ISC',
      MIT: 'https://opensource.org/licenses/MIT',
      'GNU GPL v3': 'https://www.gnu.org/licenses/gpl-3.0',
      UNLICENSE: 'http://unlicense.org/'
    };

    const licenseLink = licenseObject[data.license];

    return `## License
This project is licensed under the terms of the [${data.license}](${licenseLink}) license.`;
  } else {
    return ``;
  }
}

function generateContributing(data) {
  if (data.confirmContributing && data.contributing) {
    const renderContributing = generateBullets(data.contributing);
    return `## Contributing
${renderContributing}`;
  } else {
    return ``;
  }
}

function generateTests(data) {
  if (data.confirmTests && data.tests) {
    const renderTests = generateBullets(data.tests);
    return `## Tests
${renderTests}`;
  } else {
    return ``;
  }
}

function generateRoadmap(data) {
  if (data.confirmRoadmap && data.roadmap) {
    const renderRoadmap = generateBullets(data.roadmap);
    return `## Roadmap
${renderRoadmap}`;
  } else {
    return ``;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${generateLicenseBadge(data)}

## Description
${data.description}

${generateTOC(data)}

### Deployment URL
${data.deployment}

### Repo URL
${data.repo}

## Installation
${generateBullets(data.installation)}

## Usage
${generateBullets(data.usage)}
${generateScreenshot(data)}
${generateVideo(data)}

## Technologies Used
${generateBullets(data.tech)}

${generateCollaborators(data)}
${generateLicense(data)}

## Features
${generateBullets(data.features)}

${generateContributing(data)}
${generateTests(data)}
${generateRoadmap(data)}

## Questions
Please send your questions and / or comments to **${data.name}** at ${data.email}, or contact me on [GitHub](https://github.com/${data.username}).
`;
}

module.exports = generateMarkdown;
