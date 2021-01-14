// Makes a simple get request to the request testing server and then cancels it.
// This demonstrates the `request.cancel()` method. 
// If you do not have the example server and would like to follow these examples, clone this repository:
// 

const request = require('../index');

request.get('http://localhost:80/').text().then(console.log)

request.cancel()

//=> Request cancelled.

setTimeout(()=>{
    request.get('http://localhost:80/').text().then(console.log)
    //=> Example response for a get request.
}, 100)