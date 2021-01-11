const putReq = require('../lib/put.js')
// workers
const validate_request = require('../workers/complete_validation.js')
const validate_headers = require('../workers/validate_headers.js')

// standard put request
function put(url, headers) {
    validate_request( url, JSON.stringify(headers) )
    if(headers) { headers = JSON.parse(validate_headers.addHeaders(JSON.stringify(headers))) }
    else headers = JSON.parse(validate_headers.addHeaders(headers))

    data = headers.data

    return {
        text: function() {
            return putReq(url, headers, data).text()
        },
        json: function() {
            return putReq(url, headers, data).json()
        },
        buffer: function() {
            return putReq(url, headers, data).buffer()
        },
        error: function() {
            return putReq(url, headers, data).error()
        },
    };
}

module.exports = put