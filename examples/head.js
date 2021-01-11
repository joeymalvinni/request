// makes a simple head request to NPM's website.

const request = require('../index');

request.head('https://www.npmjs.com/').headers().then((res)=>{
    console.log("NPM's status code: " + res.statusCode)
})

//=> NPM's status code: 200