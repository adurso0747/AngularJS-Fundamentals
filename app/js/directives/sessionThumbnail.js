'use strict';

eventsApp.directive('sessionThumbnail', function () {
    return{
        restrict: 'E',
        replace: true,
        transclude: true,
        templateUrl: 'templates/directives/sessionThumbnail.html',
        scope:{
            session: "=",
        }
    }
});