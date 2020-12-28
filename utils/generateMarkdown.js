function getRepoName(repository) {
  let valid = true;
  //Gets repo name for badges
  repository = repository.slice(19);
  if (repository.split('/') !== 'undefined' && repository !== '') {
    repository = repository.split('/');
    repository = repository[1];
  }
  if (repository === 'undefined' || repository === '') {
    console.log('Error. Repo not found. Please check your Repo URL input!');
    valid = false;
  }
  return [repository, valid];
}

function generateBadges(data, repository, valid) {
  if (valid) {
    return `
![GitHub repo size](https://img.shields.io/github/repo-size/${data.username}/${repository}?style=plastic)
![GitHub code size](https://img.shields.io/github/languages/code-size/${data.username}/${repository}?style=plastic)
![GitHub language count](https://img.shields.io/github/languages/count/${data.username}/${repository}?style=plastic)
![GitHub top language](https://img.shields.io/github/languages/top/${data.username}/${repository}?style=plastic)

![GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${repository}?style=plastic)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/${data.username}/${repository}?color=green&style=plastic)
![GitHub open pull requests](https://img.shields.io/github/issues-pr-raw/${data.username}/${repository}?color=red&style=plastic)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/${data.username}/${repository}?color=green&style=plastic)
![GitHub open issues](https://img.shields.io/github/issues-raw/${data.username}/${repository}?color=red&style=plastic)

![GitHub stars](https://img.shields.io/github/stars/${data.username}/${repository}?style=social)
![GitHub forks](https://img.shields.io/github/forks/${data.username}/${repository}?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/${data.username}/${repository}?style=social)
![GitHub followers](https://img.shields.io/github/followers/${data.username}?style=social)

![GitHub version](https://img.shields.io/github/package-json/v/${data.username}/${repository}?color=red&style=plastic)
`;
  } else {
    return ``;
  }
}

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
    Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
  };

  const badgeLink = badgeObject[data.license];

  return `${badgeLink}`;
}

function generateBullets(listType, sectionData) {
  if (sectionData) {
    sectionData = sectionData.split("|");
    let generatedSteps = ``;

    let listText = `1.`;
    if (listType === 'Bullets') {
      listText = `-`;
    }

    for (let i = 0; i < sectionData.length; i++) {
      sectionData[i] = sectionData[i].trim();
      const nextStep = `${listText} ${sectionData[i]}
`;
      generatedSteps = generatedSteps.concat(nextStep);
    }
    return generatedSteps;
  } else return ``;
}

function generatePreRequisites(data) {
  if (data.confirmPreReq && data.preReq) {
    const renderPreReq = generateBullets(data.listType, data.preReq);
    return `## Pre-Requisites
${renderPreReq}`;
  } else {
    return ``;
  }
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
    return `### Video Demo
[Video Link](${data.video})`;
  } else {
    return ``;
  }
}

function generateCollaborators(data) {
  if (data.confirmCollaborators && data.collaborators) {
    const renderCollaborators = generateBullets(data.listType, data.collaborators);
    return `## Credits
### Collaborators
${renderCollaborators}`;
  } else {
    return ``;
  }
}

function generateContributing(data) {
  if (data.confirmContributing && data.contributing) {
    const renderContributing = generateBullets(data.listType, data.contributing);
    return `## Contributing
${renderContributing}`;
  } else {
    return ``;
  }
}

function generateTests(data) {
  if (data.confirmTests && data.tests) {
    const renderTests = generateBullets(data.listType, data.tests);
    return `## Tests
${renderTests}`;
  } else {
    return ``;
  }
}

function generateRoadmap(data) {
  if (data.confirmRoadmap && data.roadmap) {
    const renderRoadmap = generateBullets(data.listType, data.roadmap);
    return `## Roadmap
${renderRoadmap}`;
  } else {
    return ``;
  }
}

function generateLicense(data) {
  if (data.confirmLicense && data.license) {
    const licenseObject = {
      ISC: 'https://opensource.org/licenses/ISC',
      MIT: 'https://opensource.org/licenses/MIT',
      'GNU GPL v3': 'https://www.gnu.org/licenses/gpl-3.0',
      Unlicense: 'http://unlicense.org/'
    };

    const licenseLink = licenseObject[data.license];

    return `## License
This project is licensed under the terms of the [${data.license}](${licenseLink}) license.`;
  } else {
    return ``;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {

  // the following 3 lines are used for generating the badges
  const repoArray = getRepoName(data.repo);
  const repository = repoArray[0];
  const valid = repoArray[1];

  return `# ${data.title}

${generateBadges(data, repository, valid)}
${generateLicenseBadge(data)}

## Description
${data.description}

${generateTOC(data)}

### Deployment URL
${data.deployment}

### Repo URL
${data.repo}

## Features
${generateBullets(data.listType, data.features)}

${generatePreRequisites(data)}

## Installation
${generateBullets(data.listType, data.installation)}

## Usage
${generateBullets(data.listType, data.usage)}
${generateScreenshot(data)}
${generateVideo(data)}

## Technologies Used
${generateBullets(data.listType, data.tech)}

${generateCollaborators(data)}

${generateContributing(data)}
${generateTests(data)}
${generateRoadmap(data)}

## Questions
Please send your questions and / or comments to **${data.name}** at ${data.email}, or contact me on [GitHub](https://github.com/${data.username}).

${generateLicense(data)}
`;
}

module.exports = generateMarkdown;