'use strict';

eventsApp.controller('EventController', function EventController($scope, $anchorScroll, $route, $location, $cookieStore, userData, eventData){
    $scope.sortorder = 'name';
    $scope.event = $route.current.locals.event;

    if($cookieStore.get('profile') !== undefined){
        var user = $cookieStore.get('profile');
        if(user.sessions === undefined){
            user.sessions = []
        }
    }
    else{
        user = {};
        user.sessions = []
    }

    $scope.setSessionUpVoteCount = function(session){
        for(var i = 0; i<$scope.event.sessions.length; i++) {
            if ($scope.event.sessions[i].name === session.name) {
                return $scope.event.sessions[i].upVoteCount;
            }
        }
    }

    $scope.upVoteClicked = function(session){
        if(user.sessions === undefined){
            return false;
        }
        else{
            for(var i = 0; i<user.sessions.length; i++){
                if(user.sessions[i].name === session.name){
                    if(user.sessions[i].voteType === "up"){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            }
            return false;
        }
    }

    $scope.downVoteClicked = function(session){
        if(user.sessions === undefined){
            return false;
        }
        else{
            for(var i = 0; i<user.sessions.length; i++){
                if(user.sessions[i].name === session.name){
                    if(user.sessions[i].voteType === "down"){
                        return true;
                    }
                    else{
                        return false;
                    }
                }
            }
            return false;
        }
    }


    $scope.reload = function() {
        $route.reload();
    }

    $scope.upVoteSession = function(session){
        var voteType;
        var currentSession = {};
        if(user.sessions === undefined){
            user.sessions = []
            voteType = "neutral";
        }
        else{
            for(var i = 0; i<user.sessions.length; i++){
                if(user.sessions[i].name === session.name){
                    voteType = user.sessions[i].voteType;
                    user.sessions.splice(i, 1);
                }
                else{
                    voteType = "neutral";
                }
            }
        }
        if($cookieStore.get('profile') === undefined){
            $location.url('/login');
            alert('Please login to upvote or downvote!');
        }
        else{
            if(voteType === "down"){
                session.upVoteCount+=2;
                voteType = "up";
            }
            else if(voteType === "up"){
                session.upVoteCount--;
                voteType = "neutral";
            }
            else{
                session.upVoteCount++;
                voteType = "up";
            }
            currentSession.name = session.name;
            currentSession.voteType = voteType;
            user.sessions.push(currentSession);
            userData.save(user);
            $cookieStore.put('profile', user)
            for(var i = 0; i<$scope.event.sessions.length; i++) {
                if ($scope.event.sessions[i].name === session.name) {
                    $scope.event.sessions[i].upVoteCount = session.upVoteCount;
                }
            }
            eventData.save($scope.event);
        }
    }

    $scope.downVoteSession = function(session){
        var voteType;
        var currentSession = {};
        if(user.sessions === undefined){
            user.sessions = []
            voteType = "neutral";
        }
        else{
            for(var i = 0; i<user.sessions.length; i++){
                if(user.sessions[i].name === session.name){
                    voteType = user.sessions[i].voteType;
                    user.sessions.splice(i, 1);
                }
                else{
                    voteType = "neutral";
                }
            }
        }
        if($cookieStore.get('profile') === undefined){
            $location.url('/login');
            alert('Please login to upvote or downvote!');
        }
        else{
            if(voteType === "up"){
                session.upVoteCount-=2;
                voteType = "down";
            }
            else if(voteType === "down"){
                session.upVoteCount++;
                voteType = "neutral";
            }
            else{
                session.upVoteCount--;
                voteType = "down";
            }
            currentSession.name = session.name;
            currentSession.voteType = voteType;
            user.sessions.push(currentSession);
            userData.save(user);
            $cookieStore.put('profile', user)
            for(var i = 0; i<$scope.event.sessions.length; i++) {
                if ($scope.event.sessions[i].name === session.name) {
                    $scope.event.sessions[i].upVoteCount = session.upVoteCount;
                }
            }
            eventData.save($scope.event);
        }
    }

    $scope.scrollToSession = function(){
        $anchorScroll();
    }
});