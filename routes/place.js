Place = require('../models').Place;

exports.list = function(req, res) {
    Place.find(function(err, items) {
        res.json(items);
    });
};

exports.create = function(req, res) {
    var placeOBj = new Place({
        name:       "Кремлевская столовая",
        coordinates: [ 55.4, 64.453 ],
        address: "Арбат, д. 1",
        city: "Москва",
        country: "Россия"
    });

    placeOBj.save(function(err, doc) {
        res.json({
            success: true
        });
    });
};