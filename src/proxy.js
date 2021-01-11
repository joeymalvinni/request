const proxyget = require('./proxyGet.js')
const proxypost = require('./proxyPost')

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

module.exports = proxy