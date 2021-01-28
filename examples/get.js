// Makes a simple get request to the request testing server.
// If you do not have the server and would like to follow these examples, clone this repository:
// 

const request = require('../index');

request.get('http://localhost:80/ip',{
    followRedirect: true,
    maxRedirects: 10
}).text().then(console.log)

//=> Example response for a get request.