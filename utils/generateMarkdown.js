function generateTOC(data) {
  if (data.confirmTOC) {
    return `
    ## Table of Contents
    - [Deployment URL](#Deployment-URL)
    - [Repo URL](#Repo-URL)
    - [Demo](#Demo)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [Technologies Used](#Technologies-Used)
    - [Credits](#Credits)
    - [License](#License)
    - [Badges](#Badges)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
    - [Roadmap](#Roadmap)
    - [Questions](#Questions)
    `;
  } else {
    return ``;
  }
}

function generateDemo(data) {
  if (data.confirmScreenshot || data.confirmVideo) {
    return `
    ## Demo
    `;
  } else {
  return ``;
  }
}

function generateScreenshot(data) {
  if (data.confirmScreenshot) {
    return `
    ### Screenshot / Gif Animation
    ![Screenshot / Gif Animation](./assets/images / ${ data.screenshot })
    `;
  } else {
  return ``;
  }
}

function generateVideo(data) {
  if (data.confirmVideo) {
    return `
    ### Video
    ![Video Demo](./assets/videos / ${data.video})
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
    return `
    ## License
    ${data.license}
    `;
  } else {
  return ``;
  }
}
function generateContributing(data) {
  if (data.confirmContributing) {
    return `
    ## Contributing
    ${data.contributing}
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
  
  ## Description
  ${data.description}

  ${generateTOC(data)}

  ## Deployment URL
  ${data.deployment}
  
  ## Repo URL
  ${data.repo}

  ${generateDemo(data)}
  ${generateScreenshot(data)}
  ${generateDemo(data)}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Technologies Used
  ${data.tech}
  
  ${generateCollaborators(data)}
  ${generateLicense(data)}
  
  ## Features
  ${data.features}
  
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
