const external_promise = () => {
    var resolve, reject, prom = new Promise((_resolve, _reject) => (resolve = _resolve, reject = _reject));
    
    return Object.assign(prom, { resolve, reject });
}

module.exports = external_promise