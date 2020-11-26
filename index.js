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
    message: 'Please input a brief description of the project (what, why & how?) (Required)',
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
    message: 'What is the Repo link (URL)? (Required)',
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
    name: 'installation',
    message: "What is are the steps for installation (Please separate them with '|' )?",
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter the steps for installation!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please describe the usage information (Required)',
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
    message: 'Would you like to include a gif animation/screenshot of the app?'
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'What is the filename of the app gif animation/screenshot, including the file extension (It must be placed in ./assets/images/)?',
    when: function (userInput) {
      return userInput.confirmScreenshot;
    }
  },
  {
    type: 'confirm',
    name: 'confirmVideo',
    message: 'Would you like to include a video demo?'
  },
  {
    type: 'input',
    name: 'video',
    message: 'What is the filename of the video demo file, including the file extension? It must be placed in `./assets/videos/`.',
    when: function (userInput) {
      return userInput.confirmVideo;
    }
  },
  {
    type: 'input',
    name: 'tech',
    message: "Please list the technologies used (Please separate them with '|' ):",
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
    message: 'Would you like to include a collaborators section?'
  },
  {
    type: 'input',
    name: 'collaborators',
    message: "Please list collaborators (Please separate them with '|' ):",
    when: function (userInput) {
      return userInput.confirmCollaborators;
    }
  },
  {
    type: 'confirm',
    name: 'confirmLicense',
    message: 'Would you like to include a license section?'
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
    type: 'input',
    name: 'features',
    message: "What are the main features of the project (Please separate them with '|' )? (Required)",
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
    name: 'confirmContributing',
    message: 'Would you like to include a contributing section?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: "What are the contribution guidelines (Please separate them with '|' )?",
    when: function (userInput) {
      return userInput.confirmContributing;
    }
  },
  {
    type: 'confirm',
    name: 'confirmTests',
    message: 'Would you like to include a tests section?'
  },
  {
    type: 'input',
    name: 'tests',
    message: "What are the test instructions (Please separate them with '|' )?",
    when: function (userInput) {
      return userInput.confirmTests;
    }
  },
  {
    type: 'confirm',
    name: 'confirmRoadmap',
    message: 'Would you like to include a roadmap section?'
  },
  {
    type: 'input',
    name: 'roadmap',
    message: "What are the next steps and/or future upgrades (Please separate them with '|' )?",
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
  }
];

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      console.log(answers);
      return generateMarkdown(answers);
    })
    .then(markdownData => {
      return writeToFile('./output/README.md', markdownData);
    })
    .catch(error => {
      console.log(error);
    });
}

// function call to initialize program
init();
