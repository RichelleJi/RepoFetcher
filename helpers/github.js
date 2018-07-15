const request = require('request');//Request - Simplified HTTP client
//Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default
const config = require('../config.js');

let getReposByUsername = (endPoint, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out, 
  // but you'll have to fill in the URL
  let options = {
    url: 'https://api.github.com'+ endPoint,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, callback);
}

module.exports.getReposByUsername = getReposByUsername;


/*
Complete the getReposByUsername function in helpers/github.js. 
In this function, 

you'll use the request 
* npm module to fetch a  user's repositories from the GitHub API.

To access the GitHub API without rate limits, you'll need a 
personal access token. Make a copy of config.example.js and rename 
it to config.js, then add your personal access token.
*/