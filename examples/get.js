const request = require('../index')

console.log(request.get('http://ip.jsontest.com/?callback=showMyIP').error())

//=> showMyIP({"ip": "127.0.0.1"});