const fs = require('fs')

let readValue = ()=>{
    return fs.readFileSync('src/cancel.txt','utf8') === 'true' ? true : false;
}

let cancelled = readValue()

let cancel = ()=> {
    let c = !cancelled
    fs.writeFileSync('src/cancel.txt', c.toString())
}

module.exports = {
    cancel,
    cancelled
}