const postProxy = require('../../lib/postproxy.js')
// workers
const validate_request = require('../../workers/complete_validation.js')
const validate_headers = require('../../workers/validate_headers.js')

// proxy a post request
function proxypost(url, headers, proxy) {
    validate_request( url, JSON.stringify(headers) )
    if(headers) { headers = JSON.parse(validate_headers.addHeaders(JSON.stringify(headers))) }
    else headers = JSON.parse(validate_headers.addHeaders(headers))
    data = headers.data
    return {
        text: function() {
            return postProxy(url, headers, data, proxy).text()
        },
        json: function() {
            return postProxy(url, headers, proxy).json()
        },
        buffer: function() {
            return postProxy(url, headers, proxy).buffer()
        },
        error: function() {
            return postProxy(url, headers, proxy).error()
        },
    };
}

module.exports = proxypost