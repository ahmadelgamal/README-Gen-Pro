const sampleAnswers = require('./sample-answers');
const generateMarkdown = require('../utils/generateMarkdown');
const writeToFile = require('../utils/writeToFile');

writeToFile('./__test/README.md', generateMarkdown(sampleAnswers));