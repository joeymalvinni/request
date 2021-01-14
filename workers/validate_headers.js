const { getDefaults } = require('../src/defaults.js')

function validate_headers( headers ){
    if(headers !== undefined) headers = JSON.parse(headers)
    if(typeof headers !== 'object' && headers !== undefined) throw new Error('Invalid headers, headers must be an object.')
    
    return true
}

function addHeaders( headers ){
    if(headers !== undefined){
        headers = JSON.parse(headers)
        let _headers = getDefaults()
        headers = {...headers, ..._headers}
    } else {
        headers = getDefaults()
    }
    return JSON.stringify(headers)
}

module.exports = {
    validate_headers,
    addHeaders
}