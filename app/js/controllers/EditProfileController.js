'use strict';

eventsApp.controller('EditProfileController',
    function EditProfileController($scope, gravatarUrlBuilder, userData, $cookieStore, $location) {

        if($cookieStore.get('profile') === undefined){
            $scope.user = {};
        }
        else{
            $scope.user = $cookieStore.get('profile');
        }

        $scope.getGravatarUrl = function (email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }
        $scope.saveProfile = function (profile, profileForm) {
            if (profileForm.$valid) {
                userData.save(profile)
                    .$promise
                    .then(function (response) {
                        console.log('success', response); alert('Profile Saved!')
                        $location.url('/events');
                    })
                    .catch(function (response) {
                        console.log('failure', response)
                    });
            } else {
                alert('Error with profile');
            }
        }
        $scope.cancelProfile = function() {
            $location.url('/events');
        };
    }
);
