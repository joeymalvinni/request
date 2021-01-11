const getProxy = require('../lib/getproxy.js')
// workers
const validate_request = require('../workers/complete_validation.js')
const validate_headers = require('../workers/validate_headers.js')

// proxy a get request
function proxyget(url, headers, proxy) {
    validate_request( url, JSON.stringify(headers) )
    if(headers) { headers = JSON.parse(validate_headers.addHeaders(JSON.stringify(headers))) }
    else headers = JSON.parse(validate_headers.addHeaders(headers))

    return {
        text: function() {
            return getProxy(url, headers, proxy).text()
        },
        json: function() {
            return getProxy(url, headers, proxy).json()
        },
        buffer: function() {
            return getProxy(url, headers, proxy).buffer()
        },
        error: function() {
            return getProxy(url, headers), proxy.error()
        },
    };
}

module.exports = proxyget