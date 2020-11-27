# README Gen Pro

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description
A command-line application that dynamically generates a professional `README.md` file from a user's input using the `inquirer.js` package.

## Table of Contents
- [Deployment URL](#Deployment-URL)
- [Repo URL](#Repo-URL)
- [Features](#Features)
- [Installation](#Installation)
- [Usage](#Usage)
- [Technologies Used](#Technologies-Used)
- [Tests](#Tests)
- [Roadmap](#Roadmap)
- [Questions](#Questions)
- [License](#License)

### Deployment URL
This is a command-line application. It is not deployed online.

### Repo URL
https://github.com/ahmadelgamal/ucb-README-generator

## Features
1. This is an easy to use Command-Line application
1. It uses the `inquirer` module to ask the user a series of questions.
1. The answers are used to automatically generate a `README.md` file in an `output` directory/folder.


## Installation
1. Clone this repository.
1. Install modules: `npm install`.


## Usage
1. Go to the command line.
1. Run `node index.js` (or `npm start`).
1. Answer the question prompts.
1. Once completed, check the `output` folder for the `README.md` file.
1. If you chose to add a gif animation/screenshot file, then either add it to a `./assets/images` folder in your app, or change the relative path in the `README.md` file.
1. If you chose to add a video demo, then either add it to a `./assets/videos` folder in your app, or change the relative path in the `README.md` file.

### Screenshot / Gif Animation
![Screenshot / Gif Animation](./assets/images/demo.gif)


## Technologies Used
1. JavaScript
1. Node.js
1. Inquirer.js
1. Markdown





## Tests
1. Run the command `npm test` to generate a sample `README.md`.
1. You can change the test values by changing the values of the object in the `sample-answers.js` file, located in the `__test` folder.

## Roadmap
1. Add more license options.
1. Add support for more badges.
1. Add autocomplete.
1. Add trim() to user input.


## Questions
Please send your questions and / or comments to **Ahmad El Gamal** at ahmadelgamal@gmail.com, or contact me on[GitHub](https://github.com/ahmadelgamal).

## License
This project is licensed under the terms of the[MIT](https://opensource.org/licenses/MIT) license.
