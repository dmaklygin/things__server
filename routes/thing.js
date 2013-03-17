Thing = require('../models').Thing;
User  = require('../models').User;
Comment  = require('../models').Comment;
Point  = require('../models').Point;

/**
 * Think__id 514612c5fcaa9a7c4d000001
 */

var userId = '5145fffbb3e6bcf24b000001';

exports.list = function(req, res) {
    Thing.find(function(err, items) {
        res.json(items);
    });
};

exports.item = function(req, res) {
    res.json("{'sdf':'sdf'}");
};

exports.create = function(req, res) {
    var thingOBj = new Thing({
        user_id: userId,
        place:       "Кремлевская столовая",
        thing:       "Столовая в кремле",
        description: "Ну, неплохо кормят. Супчик за 10000 рублей понравился.",
        tags:        [
            "Кремль", "Москва", "Столовая"
        ],
        anonymously: true,
        coordinates: [ 55.4, 64.453 ]
    });

    thingOBj.save(function(err, doc) {
        res.json({
            success: true
        });
    });
};

exports.commentsList = function(req, res) {
    var thinkId = req.query && req.query.think_id || null;

    if (!thinkId) {
        return res.json({
            error: 100,
            message: "think_id Not Found"
        });
    }

    Comment.find({think_id: thinkId}, function(err, items) {
        res.json(items);
    });
};

exports.addComment = function(req, res) {
    var thinkId = req.query && req.query.think_id || null,
        comment = req.query && req.query.comment;

    if (!thinkId) {
        return res.json({
            error: 100,
            message: "think_id Not Found"
        });
    }

    if (!comment) {
        return res.json({
            error: 101,
            message: "comment Not Found"
        });
    }

    (new Comment({
        user_id: userId,
        think_id: thinkId,
        comment: comment,
        date: new Date()
    }))
        .save(function(err, doc) {
            res.json({
                success: true
            });
        });
};

/**
 * Add some point to current think
 * @param req
 * @param res
 */
exports.addPoint = function(req, res) {
    var thinkId = req.query && req.query.think_id || null,
        point   = req.query && (+req.query.point) || null;

    if (!thinkId) {
        return res.json({
            error: 100,
            message: "think_id Not Found"
        });
    }

    if (!point) {
        return res.json({
            error: 101,
            message: "point Not Found"
        });
    }

    point = (point > 0) ? 1 : -1;

    (new Point({
        user_id: userId,
        think_id: thinkId,
        point: point
    }))
        .save(function(err, doc) {
            Thing.update({ _id: thinkId }, { $inc: { point: point } }, function(err, doc) {
                res.json({
                    success: true
                });
            });
        });
};