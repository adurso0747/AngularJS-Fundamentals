'use strict';

eventsApp.controller('LocaleSampleController', function($scope, $locale) {

    console.log($locale);
    $scope.myDate = Date.now();
    $scope.myFormat = $locale.DATETIME_FORMATS.fullDate;

    throw { message: 'error message' };

});