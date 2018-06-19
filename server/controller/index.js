const { users } = require('../../database_postgresql/schema.js');
const { photos } = require('../../database_postgresql/schema.js');
const { restaurants } = require('../../database_postgresql/schema.js');
const { reviews } = require('../../database_postgresql/schema.js');

const user_controllers = {
    get: function(req, res) {
        users.findAll({
            where: {
                id: req.headers.user_id
            }
        })
        .then(data => {
            console.log('user data received')
            res.status(200).send(data)
        })
        .catch(err => {
            console.log('error receiving user data', err)
            res.status(401)
        })
    },
    post: function(req, res) {
        console.log('test')
        res.send('applied')
    }
}

const photo_controllers = {
    get: function(req, res) {
        photos.findAll({
            where: {
                review_id: req.headers.review_id
            }
        })
        .then(data => {
            console.log('photo data received')
            res.status(200).send(data)
        })
        .catch(err => {
            console.log('error receiving photo data', err)
            res.status(401)
        })
    },
    post: function(req, res) {
        console.log('test')
        res.send('applied')
    }
}

const restaurant_controllers = {
    get: function(req, res) {
        restaurants.findAll({})
        .then(data => {
            res.status(200).send(data)
        })
        .catch(err => {
            console.log('error receiving restaurant data', err)
            res.status(401)
        })
    },
    post: function(req, res) {
        console.log('test')
        res.send('applied')
    }
}

const review_controllers = {
    get: function(req, res) {
        let id = req.headers.restaurant_id
        reviews.findAll({
            where: {
                restaurant_id: id
            }
        })
        .then(data => {
            console.log('review data received')
            res.status(200).send(data)
        })
        .catch(err => {
            console.log('error receiving review data', err)
            res.status(401)
        })
    },
    post: function(req, res) {
        let newReview = {'date': req.body.date, 'counts': req.body.counts, 'rating': req.body.rating, 'user_id': req.body.user_id, 'restaurant_id': req.body.restaurantID, 'description': req.body.reviewDescription}
        reviews.insertOrUpdate(newReview);
        res.status(201).send('applied')
    }
}

module.exports = {
    user_controllers: user_controllers,
    photo_controllers: photo_controllers,
    restaurant_controllers: restaurant_controllers,
    review_controllers: review_controllers
}