'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute', 'ngSanitize', 'ngCookies'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl:'templates/NewEvent.html',
                controller: 'EditEventController'
            }).
        when('/events',
            {
                templateUrl: 'templates/EventList.html',
                controller: 'EventListController',
                resolve:{
                    events: function(eventData){
                        return eventData.getAllEvents().$promise;
                    }
                }
            }).
        when('/event/:eventId',
            {
                templateUrl: 'templates/EventDetails.html',
                controller: 'EventController',
                resolve: {
                    event: function($route, eventData) {
                        return eventData.getEvent($route.current.pathParams.eventId).$promise;
                    }
                }
            }).
        when('/sampleDirective',
            {
                templateUrl: 'templates/SampleDirective.html',
                controller: 'SampleDirectiveController'
            }).
        when('/login',{
                templateUrl: 'templates/Login.html',
                controller: 'LoginController'
        }).
        when('/editProfile',{
            templateUrl: 'templates/EditProfile.html',
            controller: 'EditProfileController'
        }).
        when('/about',{
            template: "<h1>Site Version 1.0</h1>"
            }
        ).
        otherwise({redirectTo: '/events'});


        $locationProvider.html5Mode(true);

    });
