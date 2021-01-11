const headReq = require('../lib/head.js')
// workers
const validate_request = require('../workers/complete_validation.js')
const validate_headers = require('../workers/validate_headers.js')

// standard head request
function head(url, headers) {
    validate_request( url, JSON.stringify(headers) )
    if(headers) { headers = JSON.parse(validate_headers.addHeaders(JSON.stringify(headers))) }
    else headers = JSON.parse(validate_headers.addHeaders(headers))
    return {
        headers: function() {
            return headReq(url, headers).headers()
        }
    };
}

module.exports = head