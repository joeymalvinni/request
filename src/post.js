const postReq = require('../lib/post.js')
// workers
const validate_request = require('../workers/complete_validation.js')
const validate_headers = require('../workers/validate_headers.js')

// standard post request
function post(url, headers) {
    validate_request( url, JSON.stringify(headers) )
    if(headers) { headers = JSON.parse(validate_headers.addHeaders(JSON.stringify(headers))) }
    else headers = JSON.parse(validate_headers.addHeaders(headers))

    data = headers.data

    return {
        text: function() {
            return postReq(url, headers, data).text()
        },
        json: function() {
            return postReq(url, headers, data).json()
        },
        buffer: function() {
            return postReq(url, headers, data).buffer()
        },
        error: function() {
            return postReq(url, headers, data).error()
        },
    };
}

module.exports = post