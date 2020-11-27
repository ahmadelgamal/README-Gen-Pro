function generateTOC(data) {
  if (data.confirmTOC) {

    let toc = `## Table of Contents
- [Deployment URL](#Deployment-URL)
- [Repo URL](#Repo-URL)`;

    const features = `
- [Features](#Features)`;
    toc = toc.concat(features);
    
    const moreTOC = `
- [Installation](#Installation)
- [Usage](#Usage)
- [Technologies Used](#Technologies-Used)`;
    toc = toc.concat(moreTOC);


    const collaborators = `
- [Credits](#Credits)`;
    if (data.confirmCollaborators) {
      toc = toc.concat(collaborators);
    }

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

    const license = `
- [License](#License)`;
    if (data.confirmLicense) {
      toc = toc.concat(license);
    }

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

  return `${ badgeLink }`;
}

function generateBullets(data, sectionData) {
  if (sectionData) {
    sectionData = sectionData.split("|");
    let generatedSteps = ``;
    
    let listText = `1.`;
    if (data.listType === 'Bullets')  {
      listText = `-`;
    }

    for (let i = 0; i < sectionData.length; i++) {
      sectionData[i] = sectionData[i].trim();
      const nextStep = `${ listText } ${ sectionData[i] }
`;
      generatedSteps = generatedSteps.concat(nextStep);
    }
    return generatedSteps;
  } else return ``;
}

function generateScreenshot(data) {
  if (data.confirmScreenshot) {
    return `### Screenshot / Gif Animation
![Screenshot / Gif Animation](./assets/images/${ data.screenshot })`;
  } else {
    return ``;
  }
}

function generateVideo(data) {
  if (data.confirmVideo) {
    return `### Video
![Video Demo](./assets/videos/${ data.video })`;
  } else {
    return ``;
  }
}

function generateCollaborators(data) {
  if (data.confirmCollaborators && data.collaborators) {
    const renderCollaborators = generateBullets(data, data.collaborators);
    return `## Credits
### Collaborators
${ renderCollaborators }`;
  } else {
    return ``;
  }
}

function generateContributing(data) {
  if (data.confirmContributing && data.contributing) {
    const renderContributing = generateBullets(data, data.contributing);
    return `## Contributing
${ renderContributing }`;
  } else {
    return ``;
  }
}

function generateTests(data) {
  if (data.confirmTests && data.tests) {
    const renderTests = generateBullets(data, data.tests);
    return `## Tests
${ renderTests }`;
  } else {
    return ``;
  }
}

function generateRoadmap(data) {
  if (data.confirmRoadmap && data.roadmap) {
    const renderRoadmap = generateBullets(data, data.roadmap);
    return `## Roadmap
${ renderRoadmap }`;
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
This project is licensed under the terms of the[${ data.license }](${ licenseLink }) license.`;
  } else {
    return ``;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${ data.title }

${ generateLicenseBadge(data) }

## Description
${ data.description }

${ generateTOC(data) }

### Deployment URL
${ data.deployment }

### Repo URL
${ data.repo }

## Features
${ generateBullets(data, data.features) }

## Installation
${ generateBullets(data, data.installation) }

## Usage
${ generateBullets(data, data.usage) }
${ generateScreenshot(data) }
${ generateVideo(data) }

## Technologies Used
${ generateBullets(data, data.tech) }

${ generateCollaborators(data) }

${ generateContributing(data) }
${ generateTests(data) }
${ generateRoadmap(data) }

## Questions
Please send your questions and / or comments to **${ data.name }** at ${ data.email }, or contact me on[GitHub](https://github.com/${data.username}).

${ generateLicense(data) }
`;
}

module.exports = generateMarkdown;