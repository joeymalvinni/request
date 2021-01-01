const url = require('url')
const http = require('http')
const https = require('https')

const external_promise = require('../workers/external_promise.js')
agents = {}
const get = (req_url, options) => {
    
    var parsed_url = url.parse(req_url),
    proto = parsed_url.protocol,
    reqx = proto == 'https:' ? https : http,
    promises = {
        buffer: external_promise(),
        text: external_promise(),
        json: external_promise(),
        err: external_promise(),
    };

    if(!agents[proto])agents[proto] = new reqx.Agent({ rejectUnauthorized: false, keepAlive: true });
    
    var request = reqx.get({
            agent: agents[proto],
            ...parsed_url,
            ...options
        }, res => {
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
    
    request.on('error', err => { 
        if( promises.err.needed ) promises.err.resolve( err )
     });
    
    return {
        text: () => (promises.text.needed = true, promises.text),
        json: () => (promises.json.needed = true, promises.json),
        buffer: () => (promises.buffer.needed = true, promises.buffer),
        error: () => (promises.err.needed = true, promises.error),
    }
};

module.exports = get