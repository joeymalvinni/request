const request = require('../index.js')

request.post('https://postman-echo.com/post', {
    data: JSON.stringify({
        user: 'request',
        password: 'requestx@rules',
        email: 'requestx@npm.org'
    })
}).text().then((res)=>{
    res = JSON.parse(res)
    console.log(res.data)
})