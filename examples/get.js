const request = require('../index')

request.get('http://ip.jsontest.com/?callback=showMyIP').text().then(console.log)

//=> showMyIP({"ip": "127.0.0.1"});