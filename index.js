// types of requests
const getReq = require('./lib/get.js')
const postReq = require('./lib/post.js')
// proxy requests
const getProxy = require('./lib/getproxy.js')
const postProxy = require('./lib/postproxy.js')
// workers
const validate_request = require('./workers/complete_validation.js')
const validate_headers = require('./workers/validate_headers.js')

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

// main proxy function
function proxy(proxyurl){
    return {
        get: function(url, headers) {
            return proxyget(url, headers, proxyurl)
        },
        post: function(url, headers) {
            return proxypost(url, headers, proxyurl)
        },
        put: function(url, headers) {
            return proxyput(url, headers, proxyurl)
        },
    };
}

// export main functions
module.exports = {
    get,
    post,
    proxy
}