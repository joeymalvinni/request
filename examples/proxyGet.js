const request = require('../index.js')

request.proxy('http://50.206.25.108:80').get('https://wtfismyip.com/json').text().then(console.log)