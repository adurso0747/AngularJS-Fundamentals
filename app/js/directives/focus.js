'use strict';

eventsApp.directive('focus', function () {
    return {
        restrict: 'A',
        link: function(scope, element, attrs, controller){
            angular.element(document).ready(function(){
                element.focus();
            });
        }
    }
});