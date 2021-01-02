const request = require('../index.js')

request.proxy('http://50.206.25.108:80').post('https://postman-echo.com/post', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).text().then(console.log)

/*
request.proxy( PROXY URL ).get( REQUEST URL, REQUEST HEADERS).text().then(console.log)
*/