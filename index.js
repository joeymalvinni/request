// request method get
const get = require('./src/standard/get.js')

// request method head
const head = require('./src/standard/head.js')

// request method post
const post = require('./src/standard/post.js')

// request method put
const put = require('./src/standard/put.js')

// request method delete
const deletereq = require('./src/standard/delete.js')

// request method patch
const patch = require('./src/standard/patch.js')

// proxy requests
const proxy = require('./src/proxy.js')

// cancel requests
const cancel = require('./src/misc/cancel.js').toggleCancelledState

// set default request options
const defaults = require('./src/misc/defaults.js').setDefaults

// reset default request options
const reset = require('./src/misc/defaults.js').resetDefaults

// export main functions in an object
module.exports = {
    get,
    head,
    post,
    put,
    delete: deletereq,
    patch,
    proxy,
    cancel,
    defaults,
    reset
}