const fs = require('fs');

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

module.exports = writeToFile;