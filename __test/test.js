const sampleAnswers = require('./sample-answers');
const generateMarkdown = require('../utils/generateMarkdown');
const writeToFile = require('../writeToFile');


// sample answers testing
writeToFile('./__test/README.md', generateMarkdown(sampleAnswers));