const getReq = require('../lib/get.js')
// workers
const validate_request = require('../workers/complete_validation.js')
const validate_headers = require('../workers/validate_headers.js')

// standard get request
function get(url, headers) {
    validate_request( url, JSON.stringify(headers) )
    if(headers) { headers = JSON.parse(validate_headers.addHeaders(JSON.stringify(headers))) }
    else headers = JSON.parse(validate_headers.addHeaders(headers))
    return {
        text: function() {
            return getReq(url, headers).text()
        },
        json: function() {
            return getReq(url, headers).json()
        },
        buffer: function() {
            return getReq(url, headers).buffer()
        },
        error: function() {
            return getReq(url, headers).error()
        },
    };
}

module.exports = get