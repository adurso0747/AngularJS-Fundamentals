var fs = require('fs');

module.exports.get = function(req, res){
    var profile = fs.readFileSync('app/data/user/' + req.params.userName + '.json', 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.send(profile);
};

module.exports.save = function(req, res){
    var profile = req.body;
    fs.writeFileSync('app/data/user/' + req.params.userName + '.json', JSON.stringify(profile, null, "\t"));
    res.send(profile);
}