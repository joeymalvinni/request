const valid_url = require('./valid_url.js')
const validate_headers = require('./validate_headers.js')

function checkAll(url, headers){
    if(typeof url === 'string' || url instanceof String){} else { throw new Error('Invalid url. Url must be a string') }
    if( !valid_url.validateUrl( url ) ) throw new Error('Invalid url.') 
    if( !validate_headers.validate_headers( headers ) ) throw new Error('Invalid headers, headers must be an object.') 

    return true
}


module.exports = checkAll