const proxyget = require('./proxy/getproxy')
const proxypost = require('./proxy/postproxy')
const proxydelete = require('./proxy/deleteproxy')
const proxypatch = require('./proxy/patchproxy')
const proxyput = require('./proxy/putproxy')

function proxy(){
    return {
        get: proxyget,
        post: proxypost,
        delete: proxydelete,
        patch: proxypatch,
        put: proxyput
    }
}

module.exports = proxy