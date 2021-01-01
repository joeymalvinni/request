const getReq = require('./lib/get.js')
const postReq = require('./lib/post.js')
const getProxy = require('./lib/getproxy.js')
const validate_request = require('./workers/complete_validation.js')
const validate_headers = require('./workers/validate_headers.js')

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

function proxyget(url, headers, proxy) {
    validate_request( url, JSON.stringify(headers) )
    if(headers) { headers = JSON.parse(validate_headers.addHeaders(JSON.stringify(headers))) }
    else headers = JSON.parse(validate_headers.addHeaders(headers))



    return {
        text: function() {
            return getProxy(url, headers, proxy).text()
        },
        json: function() {
            return getProxy(url, headers).json()
        },
        buffer: function() {
            return getProxy(url, headers).buffer()
        },
        error: function() {
            return getProxy(url, headers).error()
        },
    };
}

function proxy(proxyurl){
    return {
        get: function(url, headers) {
            return proxyget(url, headers, proxyurl)
        },
        post: function() {
            return getProxy(url, headers).json()
        },
        put: function() {
            return getProxy(url, headers).buffer()
        },
    };
}

module.exports = {
    get,
    post,
    proxy
}