const fs = require('fs');
const sampleAnswers = require('./sample-answers');
const generateMarkdown = require('../utils/generateMarkdown');
const writeToFile = require('../utils/writeToFile');

!fs.existsSync('output') && fs.mkdirSync('output');

writeToFile('./output/README.md', generateMarkdown(sampleAnswers));