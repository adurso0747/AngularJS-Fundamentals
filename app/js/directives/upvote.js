'use strict';

eventsApp.directive('upvote', function () {
    return{
        restrict: 'E',
        templateUrl: 'templates/directives/upvote.html',
        require: '^sessionThumbnail',
        scope:{
            upvote: "&",
            downvote: "&",
            count: "=",
            upVoteBoolean:"=",
            downVoteBoolean:"="
        }
    }
});

