// request method get
const get = require('./src/get.js')

// request method head
const head = require('./src/head.js')

// request method post
const post = require('./src/post.js')

// request method put
const put = require('./src/put.js')

// request method delete
const deletereq = require('./src/delete.js')

// request method patch
const patch = require('./src/patch.js')

// proxy requests
const proxy = require('./src/proxy.js')

// cancel requests
const cancel = require('./src/cancel.js').toggleCancelledState

// set default request options
const defaults = require('./src/defaults.js').setDefaults

// reset default request options
const reset = require('./src/defaults.js').resetDefaults

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