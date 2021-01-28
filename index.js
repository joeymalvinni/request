// request method get
const get = require('./lib/standard/get.js')

// request method head
const head = require('./lib/standard/head.js')

// request method post
const post = require('./lib/standard/post.js')

// request method put
const put = require('./lib/standard/put.js')

// request method delete
const deletereq = require('./lib/standard/delete.js')

// request method patch
const patch = require('./lib/standard/patch.js')

// proxy requests
const proxy = require('./lib/proxy.js')

// cancel requests
const cancel = require('./workers/cancel.js').toggleCancelledState

// set default request options
const defaults = require('./workers/defaults.js').setDefaults

// reset default request options
const reset = require('./workers/defaults.js').resetDefaults

// export main functions in an object
module.exports = Object.assign(
    get, {
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
)