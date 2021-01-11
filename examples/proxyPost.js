const request = require('../index.js')

request.proxy('http://212.237.63.84:8888').post('https://postman-echo.com/post', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    }),
    followRedirect: true,
    maxRedirects: 10,
    timeout: 10000
}).text().then(console.log)

/*
request.proxy( PROXY URL ).get( REQUEST URL, REQUEST HEADERS).text().then(console.log)
*/