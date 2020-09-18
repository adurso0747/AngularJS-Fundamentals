'use strict';

eventsApp.filter('durations', function(){
    return function(duration){
        switch(duration){
            case 1:
                return "Half Hour"
            case 2:
                return "One Hour";
            case 3:
                return "Half Day"
            case 4:
                return "Full Day"
        }
    }
})

eventsApp.filter('levels', function($sce){
    return function(levels){
        switch(levels){
            case "Introductory":
                var introHtml = "<i class='fas fa-angle-double-up' style='color: green'></i>"
                return $sce.trustAsHtml(introHtml)
            case "Intermediate":
                var intermediateHtml = "<i class='fas fa-angle-double-up' style='color: yellow'></i>"
                return $sce.trustAsHtml(intermediateHtml)
            case "Advanced":
                var advancedHtml = "<i class='fas fa-angle-double-up' style='color: red'></i>"
                return $sce.trustAsHtml(advancedHtml)
        }
    }
})