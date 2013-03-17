exports.list = function(req, res) {

    var items = [
        {
            thing_id: 123,
            place: "Кремлевская столовая",
            thing: "Столовая в кремле",
            description: "Ну, неплохо кормят. Супчик за 10000 рублей понравился.",
            tags: [
                "Кремль",
                "Москва",
                "Столовая"
            ],
            coord: [ 55.4, 64.453 ]
        },
        {
            thing_id: 234,
            place: "Кафе Ваниль",
            tags: [
                "Кафе", "Горячий шоколад"
            ],
            coord: [54.4, 63.453]
        }
    ];

    res.json(items);
};

exports.item = function(req, res) {
    res.json("{'sdf':'sdf'}");
};
