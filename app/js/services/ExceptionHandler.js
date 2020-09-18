'use strict';

eventsApp.factory('$exceptionHandler', function(){
    return function(exception){
        console.log("Exception handled: " + exception.message);
    };
});