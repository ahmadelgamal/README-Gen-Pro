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
    message: 'What is the project description (what, why & how)? (Required)',
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
    type: 'input',
    name: 'demo',
    message: 'What is the relative path and file name of the demo file? This can be a screenshot or a gif animation. (Optional)',
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
    type: 'input',
    name: 'collaborators',
    message: 'Please list all collaborators, if any, (Optional)'
  },
  {
    type: 'list-input',
    name: 'license',
    message: 'Please select a license (Required)',
    choices: ['ISC', 'MIT', 'No License'],
    validate: userInput => {
      if (userInput) {
        return true;
      } else {
        console.log('You need to enter the contribution guidelines!');
        return false;
      }
    }
  },
  {
    type: 'list-input',
    name: 'badges',
    message: 'Please select any badges you wish to add (Optional)',
    choices: ['ISC', 'MIT', 'No License']
  },
  {
    type: 'input',
    name: 'features',
    message: 'What are the main features of the project? (Optional)'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What are the contribution guidelines? (Optional)'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'What are the test instructions? (Optional)'
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
      console.log('README.md created successfully!');
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
      return writeToFile('README.md', markdownData);
    })
    .catch(error => {
      console.log(error);
    });
}

// function call to initialize program
init();
