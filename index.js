const inquirer = require('inquirer');
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
    message: 'What is the project description? (Required)',
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
    type: 'list-input',
    name: 'license',
    message: 'Please select a license (Optional)',
    choices: ['ISC', 'MIT', 'No License']
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'What are the contribution guidelines? (Required)',
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
    type: 'input',
    name: 'test',
    message: 'What are the test instructions? (Optional)',
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
function writeToFile(pageMarkdown) {
  return new Promise((resolve, reject) => {
    fs.writeToFile('./output/README.md', data, error => {
      if (error) {
        reject(error);
        return;
      }

      resolve({
        ok: true,
        message: 'README.md created!'
      });
    });
  });
};

// function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then(readmeData => {
      return generateMarkdown(readmeData);
    })
    .then(pageMarkdown => {
      return writeToFile(pageMarkdown);
    })
    .catch(error => {
      console.log(error);
    });
}

// function call to initialize program
init();
