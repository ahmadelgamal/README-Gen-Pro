// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Deployment URL
  ${data.deployment}
  
  ## Repo URL
  ${data.repo}

  ## Demo
  ![App Demo](${data.demo})

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
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
  
  ## Questions
  Please send your questions and/or comments to:
  - ${data.name}
  - GitHub Username: ${data.username}
  - Email: ${data.email}

`;
}

module.exports = generateMarkdown;
