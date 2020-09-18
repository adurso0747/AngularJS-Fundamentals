'use strict';

eventsApp.controller('LoginController', function LoginController($scope, $cookieStore, userData, $location){
    $scope.login = {}

    $scope.attemptLogin = function(login, loginForm){
        if(loginForm.$valid){
            userData.getProfile(login.userName).
            $promise
                .then(function (response) {
                    console.log('success', response);
                    if(login.password === response.password){
                        $cookieStore.put('profile', response);
                        window.location = '/events';
                        alert('Login Successful!');
                    }
                    else{
                      alert('Incorrect username or password');
                    }
                })
                .catch(function (response) {
                    console.log('failure', response);
                    alert('Incorrect username or password')});
        }
        else{
            alert('Error with profile form');
        }
    };

    $scope.cancelLogin = function() {
        window.location = '/EventDetails.html';
    };
});