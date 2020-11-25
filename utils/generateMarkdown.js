// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
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

  ## Deployment URL
  ${data.deployment}
  
  ## Repo URL
  ${data.repo}

  ## Demo
  ### Screenshot/Gif Animation
  ![Screenshot/Gif Animation](./assets/images/${data.screenshot})

  ### Video
  ![Video Demo](./assets/videos / ${data.video})

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Technologies Used
  ${data.tech}
  
  ## Credits
  ### Collaborators
  ${data.collaborators}
    
  ## License
  ${data.license}
  
  ## Badges
  ${data.badges}
  
  ## Features
  ${data.features}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Roadmap
  ${data.roadmap}
  
  ## Questions
  Please send your questions and / or comments to:
  - ${data.name}
  - GitHub Portfolio: https://github.com/${data.username}
  - Email: ${data.email}

  `;
}

module.exports = generateMarkdown;
