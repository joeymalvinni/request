var isCancelled = false

let cancelledState = function(){
 return isCancelled;
};

let setCancelledState = function(_isCancelled){
    isCancelled = _isCancelled
};

let toggleCancelledState = function(){
    isCancelled = !isCancelled
};

let resetCancelledState = function(){
    isCancelled = false
}

module.exports = {
   cancelledState,
   setCancelledState,
   resetCancelledState,
   toggleCancelledState
}