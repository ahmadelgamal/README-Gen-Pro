const inquirer = require('inquirer');
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
    name: 'confirm-screenshot',
    message: 'Would you like to include a gif animation/screenshot of the app?'
  },
  {
    type: 'input',
    name: 'screenshot',
    message: 'What is the filename of the app gif animation/screenshot, including the file extension? It must be placed in `./assets/images/`.'
  },
  {
    type: 'confirm',
    name: 'confirm-video',
    message: 'Would you like to include a video demo?'
  },
  {
    type: 'input',
    name: 'video',
    message: 'What is the filename of the video demo file, including the file extension? It must be placed in `./assets/videos/`.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions? (Required)',
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
    name: 'confirm-collaborators',
    message: 'Would you like to include a collaborators section?'
  },
  {
    type: 'list-input',
    name: 'collaborators',
    message: 'Please list all collaborators'
  },
  {
    type: 'confirm',
    name: 'confirm-license',
    message: 'Would you like to include a license section?'
  },
  {
    type: 'list-input',
    name: 'license',
    message: 'Please select a license',
    choices: ['ISC', 'MIT', 'No License']
  },
  {
    type: 'confirm',
    name: 'confirm-badges',
    message: 'Would you like to include a badges section?'
  },
  {
    type: 'list-input',
    name: 'badges',
    message: 'Please select the badges that you wish to add.',
    choices: ['ISC', 'MIT', 'No License'],
  },
  {
    type: 'input',
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
    name: 'confirm-contributing',
    message: 'Would you like to include a contributing section?'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines?'
  },
  {
    type: 'confirm',
    name: 'confirm-tests',
    message: 'Would you like to include a tests section?'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions?'
  },
  {
    type: 'confirm',
    name: 'confirm-roadmap',
    message: 'Would you like to include a roadmap section?'
  },
  {
    type: 'input',
    name: 'roadmap',
    message: 'What are the next steps and/or future upgrades?'
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
