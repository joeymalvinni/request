const request = require('../index.js')

request.put('https://postman-echo.com/put', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).json().then((res)=>{
    console.log(res.data)
})