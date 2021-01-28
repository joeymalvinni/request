// makes a simple head request to show the X-Powered-By response header.

const request = require('../index');

request.head('http://localhost/').headers().then((res)=>{
    console.log(res.headers['x-powered-by'])
})

//=> Request v0.4.0