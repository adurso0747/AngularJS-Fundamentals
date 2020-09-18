'use strict';

eventsApp.directive('enterKey', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller) {
            element.on('keydown', function(event) {
                if(event.keyCode === 13){
                   angular.element(document.getElementsByClassName('btn-primary')).click();
                }
            })
        }
    }
});