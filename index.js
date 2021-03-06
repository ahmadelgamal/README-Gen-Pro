const fs = require('fs');
const inquirer = require('inquirer');
const writeToFile = require('./utils/writeToFile');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title? (Required)',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter a project title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please input a brief description of the project (what, why & how?): (Required)',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter a project description!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmTOC',
    message: 'Would you like to include a table of contents?'
  },
  {
    type: 'input',
    name: 'deployment',
    message: 'What is the deployment link (URL)? (Required)',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter a link to the deployed application!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'repo',
    message: 'What is the Repo link (Please enter the full URL, such as: https://github.com/ahmadelgamal/README-Gen-Pro)? (Required)',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter a link to the repository!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'features',
    message: "What are the main features of the project? (separate with '|') (Required)",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter the main features of the project!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmPreReq',
    message: 'Would you like to list installation pre-requisites?'
  },
  {
    type: 'input',
    name: 'preReq',
    message: "Please list the pre-requisites to installation: (separate with '|')"
  },
  {
    type: 'input',
    name: 'installation',
    message: "Please list the installation steps: (separate with '|') (Required)",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter the installation steps!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmCloning',
    message: 'Would you like to add a Cloning section?'
  },
  {
    type: 'input',
    name: 'cloning',
    message: "Please list the cloning steps: (separate with '|')"
  },
  {
    type: 'input',
    name: 'usage',
    message: "Please list the usage information: (separate with '|') (Required)",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter the usage information!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmScreenshot',
    message: 'Would you like to include a gif animation or png screenshot of the app?'
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'What is the filename of the app gif animation or png screenshot, including the file extension (Place it in ./assets/images/)?',
    when: function (userInput) {
      return userInput.confirmScreenshot;
    }
  },
  {
    type: 'confirm',
    name: 'confirmVideo',
    message: 'Would you like to include a link to a video demo?'
  },
  {
    type: 'input',
    name: 'video',
    message: 'Please copy the link to the video url and paste it here:',
    when: function (userInput) {
      return userInput.confirmVideo;
    }
  },
  {
    type: 'input',
    name: 'tech',
    message: "Please list the technologies used: (separate with '|') (Required)",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to list the technologies used!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmCollaborators',
    message: 'Would you like to include a Collaborators section?'
  },
  {
    type: 'input',
    name: 'collaborators',
    message: "Please list the collaborators: (separate with '|')",
    when: function (userInput) {
      return userInput.confirmCollaborators;
    }
  },
  {
    type: 'confirm',
    name: 'confirmContributing',
    message: 'Would you like to include a Contributing section?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: "What are the contribution guidelines? (separate with '|')",
    when: function (userInput) {
      return userInput.confirmContributing;
    }
  },
  {
    type: 'confirm',
    name: 'confirmTests',
    message: 'Would you like to include a Tests section?'
  },
  {
    type: 'input',
    name: 'tests',
    message: "Please list the test instructions: (separate with '|')",
    when: function (userInput) {
      return userInput.confirmTests;
    }
  },
  {
    type: 'confirm',
    name: 'confirmRoadmap',
    message: 'Would you like to include a Roadmap section?'
  },
  {
    type: 'input',
    name: 'roadmap',
    message: "What are the next steps and/or future upgrades? (separate with '|')",
    when: function (userInput) {
      return userInput.confirmRoadmap;
    }
  },
  {
    type: 'input',
    name: 'name',
    message: 'What is your name? (Required)',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter your name!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username? (Required)',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter your GitHub username!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address? (Required)',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter your email address!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Would you like to include a License section?'
  },
  {
    type: 'rawlist',
    name: 'license',
    message: 'Please select a license:',
    choices: ['ISC', 'MIT', 'GNU GPL v3', 'Unlicense'],
    when: function (userInput) {
      return userInput.confirmLicense;
    }
  },
  {
    type: 'rawlist',
    name: 'listType',
    message: 'Do you prefer numbers or bullets for your lists?',
    choices: ['Numbers', 'Bullets'],
    default: 'Numbers'
  }
];

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      return generateMarkdown(answers);
    })
    .then(markdownData => {
      !fs.existsSync('output') && fs.mkdirSync('output');
      return writeToFile('./output/README.md', markdownData);
    })
    .catch(error => {
      console.log(error);
    });
}

// function call to initialize program
init();
