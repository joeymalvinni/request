var _defaults = {
     headers: { 
        'user-agent': 'requestxjs 1.0.2', 
        accept: '*/*' 
    } 
}

let getDefaults = function(){
  return _defaults;
};

let setDefaults = function(defaults){
  _defaults = defaults
};

let resetDefaults = function(){
    _defaults = {
        headers: { 
           'user-agent': 'requestxjs 1.0.2', 
           accept: '*/*' 
       } 
   }
}

module.exports = {
    getDefaults,
    setDefaults,
    resetDefaults
}