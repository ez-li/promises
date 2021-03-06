/**
 * Implement these promise-returning functions.
 * Any successful value should be made available in the next `then` block chained
 * to the function invocation, while errors should be available in the `catch` block
 */

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// This function should retrieve the first line of the file at `filePath`

// var retrieveFirstLinePromise = new Promise ((resolve, reject) => {
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       reject(err)
//     } else {
//       resolve(data)
//     }
//   })
// })


var pluckFirstLineFromFileAsync = function(filePath) {
  // TODO
  return new Promise ((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        reject(err)
      } else {
        var firstLine = data.toString().split('\n')[0];
        resolve(firstLine)
      }
    })
  })

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCodeAsync = function(url) {
  // TODO
  return new Promise ((resolve, reject) => {
    request(url, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.statusCode);
      }
    })
  })

};
// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCodeAsync: getStatusCodeAsync,
  pluckFirstLineFromFileAsync: pluckFirstLineFromFileAsync
};
