const sampleAnswers = require('./sample-answers');
const generateMarkdown = require('../utils/generateMarkdown');
const writeToFile = require('../writeToFile');

writeToFile('./__test/README.md', generateMarkdown(sampleAnswers));