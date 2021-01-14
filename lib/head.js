const url = require('url')
const http = require('http')
const https = require('https')

const external_promise = require('../workers/external_promise.js')

const { cancelledState, toggleCancelledState } = require('../src/misc/cancel.js')

agents = {}
const head = (req_url, options) => {
    
    var parsed_url = url.parse(req_url),
    proto = parsed_url.protocol,
    reqx = proto == 'https:' ? https : http,
    promises = {
        headers: external_promise(),
    };

    const reqOptions = {
        method: 'HEAD'
    }

    if(cancelledState()) {
        if( promises.buffer.needed ) promises.buffer.resolve('Request cancelled');
        if( promises.text.needed ) promises.text.resolve('Request cancelled');
        if( promises.json.needed ) promises.json.resolve('Request cancelled');
        if( promises.err.needed ) promises.err.resolve('Request cancelled');
        if( promises.headers.needed ) promises.headers.resolve('Request cancelled');

        toggleCancelledState()
    }

    options = { ...options, ...reqOptions }

    if(!agents[proto])agents[proto] = new reqx.Agent({ rejectUnauthorized: false, keepAlive: true });
    
    var request = reqx.request(req_url, { options }, res => {
        
        if(cancelledState()) {
            if( promises.buffer.needed ) promises.buffer.resolve('Request cancelled');
            if( promises.text.needed ) promises.text.resolve('Request cancelled');
            if( promises.json.needed ) promises.json.resolve('Request cancelled');
            if( promises.err.needed ) promises.err.resolve('Request cancelled');
            if( promises.headers.needed ) promises.headers.resolve('Request cancelled');
    
            toggleCancelledState()
        }

        if(promises.headers.needed) promises.headers.resolve(res)
    })
    
    request.on('error', err => { 
        if( promises.err.needed ) promises.err.resolve( err )
    });

    request.end()
    
    return {
        headers: () => (promises.headers.needed = true, promises.headers),
    }
};

module.exports = head