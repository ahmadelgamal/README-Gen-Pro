const inquirer = require('inquirer');
// adds loop option to inquirer. This allows user to enter a list of answers for a question
// inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));
const fs = require('fs');
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
    message: 'Please input a brief description of the project (what, why & how)? (Required)',
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
    type: 'confirm',
    name: 'confirmScreenshot',
    message: 'Would you like to include a gif animation/screenshot of the app?'
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'What is the filename of the app gif animation/screenshot, including the file extension? It must be placed in `./assets/images/`.',
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
    name: 'installationFirst',
    message: 'What is the first installation instruction?.',
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter installation instructions!');
        return false;
      }
    }
  },
  {
    type: 'loop',
    name: 'installationMore',
    message: 'Add another installation instruction?',
    questions: [
      {
        type: 'input',
        name: 'key',
        message: 'What is the installation step number?'
      },
      {
        type: 'input',
        name: 'value',
        message: "What is the installation instruction?"
      }
    ],
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter installation instructions!');
        return false;
      }
    }
  },
  {
    type: 'loop',
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
    type: 'loop',
    name: 'tech',
    message: 'Please list all technologies used'
  },
  {
    type: 'confirm',
    name: 'confirmCollaborators',
    message: 'Would you like to include a collaborators section?'
  },
  {
    type: 'loop',
    name: 'collaborators',
    message: 'Please list all collaborators',
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
    message: 'Please select a license',
    choices: ['ISC', 'MIT', 'Other'],
    when: function (userInput) {
      return userInput.confirmLicense;
    }
  },
  {
    type: 'confirm',
    name: 'confirmBadges',
    message: 'Would you like to include a badges section?'
  },
  {
    type: 'rawlist',
    name: 'badges',
    message: 'Please select the badges that you wish to add.',
    choices: ['x', 'y', 'z'],
    when: function (userInput) {
      return userInput.confirmBadges;
    }
  },
  {
    type: 'loop',
    name: 'features',
    message: 'What are the main features of the project? (Required)',
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
    type: 'loop',
    name: 'contributing',
    message: 'What are the contribution guidelines?',
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
    type: 'loop',
    name: 'tests',
    message: 'What are the test instructions?',
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
    type: 'loop',
    name: 'roadmap',
    message: 'What are the next steps and/or future upgrades?',
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

// function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        reject(err); // calling `reject` will cause the promise to fail with or without the error passed as an argument
        return; // return will stop the function
      }

      resolve({
        ok: true,
      });
      console.log('README.md created successfully. Please check the output folder!');
    });
  });
};

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
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
