const { URL, parse } = require('url');

// url validator 1
function isUrl( urlToTest ) {
    var regex = new RegExp("^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?");

    if(regex.test( urlToTest )){
        return true
    } else {
        return false
    }
}

const stringIsAValidUrl = ( urlToTest ) => {
    try {
        new URL( urlToTest );
        return true;
    } catch (err) {
        return false;
    }
};

function validURL(s) {
    var regexp = /^(ftp|http|https|chrome|:\/\/|\.|@){2,}(localhost|\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|\S*:\w*@)*([a-zA-Z]|(\d{1,3}|\.){7}){1,}(\w|\.{2,}|\.[a-zA-Z]{2,3}|\/|\?|&|:\d|@|=|\/|\(.*\)|#|-|%)*$/gum
    return regexp.test(s);
}

const validateUrl = ( url ) => {
    if( stringIsAValidUrl( url ) || isUrl( url ) || validURL(url)){
        return true;
    } else {
        return false;
    }
}

module.exports = {
    validateUrl
}