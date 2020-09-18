eventsApp.factory('userData', function($resource) {
    var resource = $resource('/data/user/:userName', {userName:'@userName'});
    return {
        getProfile: function(userName) {
            return resource.get({userName:userName});
        },
        save: function(profile) {
            return resource.save(profile);
        },
    };
});