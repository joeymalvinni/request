// makes a simple get request to log your ip address.

const request = require('../index');

request.get('http://ip.jsontest.com/?callback=showMyIP').text().then(console.log)

//=> showMyIP({"ip": "127.0.0.1"});