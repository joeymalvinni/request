
const url = require('url')
const http = require('http')
const https = require('https')

// beta testing for a request.cancel()
const { cancelledState, toggleCancelledState } = require('../src/cancel.js')

const external_promise = require('../workers/external_promise.js')

const get = (req_url, options, redirect) => {    
    var parsed_url = url.parse(req_url),
    proto = parsed_url.protocol,
    reqx = proto == 'https:' ? https : http,
    promises = {
        buffer: external_promise(),
        text: external_promise(),
        json: external_promise(),
        err: external_promise(),
        headers: external_promise()
    };
    if(cancelledState()) {
        if( promises.buffer.needed ) promises.buffer.resolve('Request cancelled');
        if( promises.text.needed ) promises.text.resolve('Request cancelled');
        if( promises.json.needed ) promises.json.resolve('Request cancelled');
        if( promises.err.needed ) promises.err.resolve('Request cancelled');
        if( promises.headers.needed ) promises.headers.resolve('Request cancelled');

        toggleCancelledState()
    }

    agents = {}

    agents[proto] = new reqx.Agent({ rejectUnauthorized: false, keepAlive: true });
    var request = reqx.get({
        agent: agents[proto],
        ...parsed_url,
        ...options
    }, res => {
        if(promises.headers.needed) promises.headers.resolve(res)
        // checking for a redirect
        if(res.headers.location){
            var isAbsolute = new RegExp('^(?:[a-z]+:)?//', 'i');
            // checks if redirect is absolute, if not, use the origin of the request
            if(isAbsolute.test(res.headers.location)){
                if( promises.buffer.needed ) promises.buffer.resolve( get(res.headers.location).buffer() )
                if( promises.text.needed ) promises.text.resolve( get(res.headers.location).text() )
                if( promises.json.needed ) promises.json.resolve( get(res.headers.location).json() )
                if( promises.err.needed ) promises.err.resolve( get(res.headers.location).error() )
                if( promises.headers.needed ) promises.headers.resolve( get(res.headers.location).headers() )
            } else {
                if( promises.buffer.needed ) promises.buffer.resolve( get(parsed_url.protocol.toString() + '//' + parsed_url.host.toString() + res.headers.location.toString()).buffer() )
                if( promises.text.needed ) promises.text.resolve( get(parsed_url.protocol.toString() + '//' + parsed_url.host.toString() + res.headers.location.toString()).text() )
                if( promises.json.needed ) promises.json.resolve( get(parsed_url.protocol.toString() + '//' + parsed_url.host.toString() + res.headers.location.toString()).json() )
                if( promises.err.needed ) promises.err.resolve( get(parsed_url.protocol.toString() + '//' + parsed_url.host.toString() + res.headers.location.toString()).error() )
                if( promises.headers.needed ) promises.headers.resolve( get(parsed_url.protocol.toString() + '//' + parsed_url.host.toString() + res.headers.location.toString()).headers() )
            }
        } else {
            if(cancelledState()) {
                if( promises.buffer.needed ) promises.buffer.resolve('Request cancelled.');
                if( promises.text.needed ) promises.text.resolve('Request cancelled.');
                if( promises.json.needed ) promises.json.resolve('Request cancelled.');
                if( promises.err.needed ) promises.err.resolve('Request cancelled.');
                if( promises.headers.needed ) promises.headers.resolve('Request cancelled.');

                toggleCancelledState()
            }
            // load all chunks into array
            var chunks = [];
                
            res.on('data', chunk => chunks.push(chunk)).on('end', () => {
                var buf = Buffer.concat(chunks)
                var str = buf.toString('utf8');
                
                // returns the result in a promise
                if( promises.buffer.needed ) promises.buffer.resolve(buf);
                if( promises.text.needed ) promises.text.resolve(str);
                if( promises.json.needed ) try{
                    promises.json.resolve(JSON.parse(str));
                } catch( err ){
                    // throws error when the requested resource wasn't json
                    promises.json.reject( err + ". This could happen because the resource isn't JSON");
                }
            });
        }       
    });
    
    request.on('error', err => { 
        if( promises.err.needed ) {
            // graceful error handling
            promises.err.resolve( err )
        } else {
            console.log(err)
        }
    });
    
    // final array
    return {
        text: () => (promises.text.needed = true, promises.text),
        json: () => (promises.json.needed = true, promises.json),
        buffer: () => (promises.buffer.needed = true, promises.buffer),
        error: () => (promises.err.needed = true, promises.error),
        headers: () => (promises.headers.needed = true, promises.headers)
    }
};

module.exports = get