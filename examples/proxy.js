const request = require('../index.js')

request.proxy('http://50.206.25.108:80').get('https://wtfismyip.com/json').text().then((proxiedData)=>{
    console.log(proxiedData)
})

/*
request.proxy( PROXY URL ).get( REQUEST URL, REQUEST HEADERS).text().then(console.log)
*/