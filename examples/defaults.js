// Example of setting default request options
// If you do not have the server and would like to follow these examples, clone this repository:
// 

const request = require('../index');

// set the default headers to request with.
request.defaults({
    headers: { 
        'user-agent': 'supercool new useragent', 
        accept: 'gzip, deflate' 
    } 
})

// server-side console will show the request headers have changed from the normal request useragent to the new supercool useragent.
request.get('http://localhost:80/showHeaders').text().then(console.log)

//=> Your request headers are 