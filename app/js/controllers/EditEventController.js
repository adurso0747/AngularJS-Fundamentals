'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {

        $scope.event = {};

        $scope.saveEvent = function(event, newEventForm) {
            eventData.getResource().query(function(data){
                console.log('Event data id ' + (data.length + 1));
                event.id = data.length + 1;
                if(newEventForm.$valid) {
                    eventData.save(event)
                        .$promise
                        .then(function(response) { console.log('success', response), alert('Event Saved!')})
                        .catch(function(response) { console.log('failure', response)});
                }
                else{
                    alert('Error with form.');
                }
            });
        };

        $scope.cancelEvent = function() {
            window.location = '/EventDetails.html';
        }

    }
);