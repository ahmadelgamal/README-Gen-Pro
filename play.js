const data = {
  ISC: 'ISC',
  MIT: 'MIT',
  UNLICENSE: 'UNLICENSE'
}

const badge = {
  ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
  MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
  UNLICENSE: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
};

const link = {
  ISC: 'https://opensource.org/licenses/ISC',
  MIT: 'https://opensource.org/licenses/MIT',
  UNLICENSE: 'http://unlicense.org/'
};

const test = badge[data.ISC];

console.log(test);