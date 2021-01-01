function validate_headers( headers ){
    if(headers !== undefined) headers = JSON.parse(headers)
    if(typeof headers !== 'object' && headers !== undefined) throw new Error('Invalid headers, headers must be an object.')
    
    return true
}

function addHeaders( headers ){
    if(headers !== undefined){
        headers = JSON.parse(headers)
        if(!headers.headers) headers.headers = {}
        if(!headers.headers['user-agent']) headers.headers['user-agent'] = 'requestxjs 1.0.2'
        if(!headers.headers['accept']) headers.headers['accept'] = '\*\/*'
    } else {
        headers = {
            headers: {}
        }
        headers.headers['user-agent'] = 'requestxjs 1.0.2'
        headers.headers['accept'] = '*\/*'
    }
    return JSON.stringify(headers)
}

module.exports = {
    validate_headers,
    addHeaders
}