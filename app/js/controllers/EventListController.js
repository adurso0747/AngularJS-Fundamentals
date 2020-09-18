'use strict';

eventsApp.controller('EventListController', function($scope, eventData){
    $scope.events = eventData.getAllEvents();
});