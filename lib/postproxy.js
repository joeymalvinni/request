const url = require('url')
const http = require('http')
const https = require('https')

const external_promise = require('../workers/external_promise.js')
agents = {}
const get = (req_url, options, data, proxy) => {    
    options.method = 'POST'
    var parsed_url = url.parse(proxy),
    proto = parsed_url.protocol,
    reqx = proto == 'https:' ? https : http,
    promises = {
        buffer: external_promise(),
        text: external_promise(),
        json: external_promise(),
        err: external_promise(),
    };

    if(cancelledState()) {
        if( promises.buffer.needed ) promises.buffer.resolve('Request cancelled');
        if( promises.text.needed ) promises.text.resolve('Request cancelled');
        if( promises.json.needed ) promises.json.resolve('Request cancelled');
        if( promises.err.needed ) promises.err.resolve('Request cancelled');
        if( promises.headers.needed ) promises.headers.resolve('Request cancelled');

        toggleCancelledState()
    }
    
    const reqOptions = {
        hostname: parsed_url.hostname,
        port: parsed_url.port,
        path: req_url,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length
        }
    }

    options = { ...options, ...reqOptions }

    var request = http.request(options, res => {

        if(cancelledState()) {
            if( promises.buffer.needed ) promises.buffer.resolve('Request cancelled');
            if( promises.text.needed ) promises.text.resolve('Request cancelled');
            if( promises.json.needed ) promises.json.resolve('Request cancelled');
            if( promises.err.needed ) promises.err.resolve('Request cancelled');
            if( promises.headers.needed ) promises.headers.resolve('Request cancelled');
    
            toggleCancelledState()
        }        
        var chunks = [];
            
        res.on('data', chunk => chunks.push(chunk)).on('end', () => {
            var buf = Buffer.concat(chunks),
            str = buf.toString('utf8');
                
            if( promises.buffer.needed ) promises.buffer.resolve(buf);
            if( promises.text.needed ) promises.text.resolve(str);
            if( promises.json.needed ) try{
                promises.json.resolve(JSON.parse(str));
            } catch( err ){
                promises.json.reject( err );
            }

        });
    });
    
    request.write(data)

    request.on('error', err => { 
        if( promises.err.needed ) promises.err.resolve( err )
            else console.log(err)
    });

    request.end()

    
    return {
        text: () => (promises.text.needed = true, promises.text),
        json: () => (promises.json.needed = true, promises.json),
        buffer: () => (promises.buffer.needed = true, promises.buffer),
        error: () => (promises.err.needed = true, promises.error),
    }
};

module.exports = get