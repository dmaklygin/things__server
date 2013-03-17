
User = require('../models').User;

exports.list = function(req, res){
    User.find(function (err, items) {
        res.json(items);
    });
};

exports.create = function (req, res) {

    var userOBj = new User({
        name: 'Dmitriy I',
        photo: 'http://profile.ak.fbcdn.net/hprofile-ak-prn1/27406_1362566125_7592_q.jpg'
    });

    userOBj.save(function(err, doc) {
        res.json({
            success: true
        });
    });
};