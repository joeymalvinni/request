const request = require('../index.js')

request.post('https://postman-echo.com/post', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@node',
        email: 'requestx@npm.org'
    })
}).json().then((res)=>{
    console.log(res.data)
})