'use strict';

eventsApp.controller('MainMenuController', function MainMenuController($scope, $location, $cookieStore, $window){

    if($cookieStore.get('profile') === undefined){
        $scope.loggedIn = false;
        $scope.profileName = 'Create Profile';
    }
    else{
        $scope.loggedIn = true;
        $scope.profileName = $cookieStore.get('profile').name
    }

    $scope.createEvent = function () {
        $location.url('/newEvent');
    }

    $scope.loginNav = function () {
        $location.url('/login');
    }

    $scope.logOut = function(){
        $cookieStore.remove('profile');
        $window.location.reload();
    }

    $scope.editProfile = function (){
        $location.url('/editProfile');
    }

});