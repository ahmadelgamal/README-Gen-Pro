// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ## ${data.description}
  
  ## ${data.installation}
  
  ## ${data.usage}
  
  ## ${data.license}
  
  ## ${data.contribution}
  
  ## ${data.test}
  
  ### ${data.name}
  ### ${data.username}
  ### ${data.email}

`;
}

module.exports = generateMarkdown;
