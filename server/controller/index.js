const pg = require('pg');
const { client } = require('../../database_postgresql/index');

const user_controllers = {
  get: function(req, res) {
    client.query(`SELECT * FROM users WHERE users.id = ($1)` , [req.headers.id], (err, data) => {
      if (err) {
        console.log('Error getting users= ', err);
      } else {
        res.status(200).send(data);
      }
    })
  },
  post: function(req, res) {
    console.log('Request= ', req.headers)
    client.query(`INSERT INTO users (username, profilephoto, counts, city) VALUES ($1, $2, $3, $4)`, [req.headers.username, req.headers.profilephoto, req.headers.counts, req.headers.city], (err, users) => {
      if (err) {
        console.log('Error creating user= ', err);
      } else {
        res.status(201);
      }
    })
  }
}

const photo_controllers = {
  get: function(req, res) {
    client.query(`SELECT * FROM photos WHERE photos.review_id = ($1)`, [req.headers.review_id], (err, data) => {
      if (err) {
        console.log('Error getting photos= ', err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  post: function(req, res) {
    client.query(`INSERT INTO photos (source, review_id, restaurant_id) VALUES ($1, $2, $3)`, [req.headers.source, req.headers.review_id, req.headers.restaurant_id], (err, data) => {
      if (err) {
        console.log('Error creating photo= ', err);
      } else {
        res.status(201);
      }
    })
  }
}

const restaurant_controllers = {
  get: function(req, res) {
    client.query('SELECT * FROM restaurants', [], (err, data) => {
      if (err) {
        console.log('Error getting restaurants= ', err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  post: function(req, res) {
    client.query(`INSERT INTO restaurants (restaurant_name) VALUES ($1)`, [req.headers.restaurant_name], (err, data) => {
      if (err) {
        console.log('Error creating restaurant= ', err);
      } else {
        res.status(201);
      }
    })
  }
}

const review_controllers = {
  get: function(req, res) {
    client.query(`SELECT * FROM reviews WHERE reviews.restaurant_id = ($1)`, [req.headers.restaurant_id], (err, data) => {
      if (err) {
        console.log('Error getting reviews= ', err);
      } else {
        res.status(200).send(data);
      }
    })
  },

  post: function(req, res) {
    client.query(`INSERT INTO reviews (timeposted, counts, ratings, user_id, restaurant_id, review) VALUES ($1)`, [req.headers.timeposted, req.headers.counts, req.headers.ratings, req.headers.user_id, req.headers.restaurant_id, req.headers.review], (err, data) => {
      if (err) {
        console.log('Error creating user= ', err);
      } else {
        res.status(201);
      }
    })
  }
}

module.exports = {
  user_controllers,
  photo_controllers,
  restaurant_controllers,
  review_controllers
}

// const { users } = require('../../database_postgresql/schema.js');
// const { photos } = require('../../database_postgresql/schema.js');
// const { restaurants } = require('../../database_postgresql/schema.js');
// const { reviews } = require('../../database_postgresql/schema.js');

// const user_controllers = {
//     get: function(req, res) {
//         users.findAll({
//             where: {
//                 id: req.headers.user_id
//             }
//         })
//         .then(data => {
//             console.log('user data received')
//             res.status(200).send(data)
//         })
//         .catch(err => {
//             console.log('error receiving user data', err)
//             res.status(401)
//         })
//     },
//     post: function(req, res) {
//         console.log('test')
//         res.send('applied')
//     }
// }

// const photo_controllers = {
//     get: function(req, res) {
//         photos.findAll({
//             where: {
//                 review_id: req.headers.review_id
//             }
//         })
//         .then(data => {
//             console.log('photo data received')
//             res.status(200).send(data)
//         })
//         .catch(err => {
//             console.log('error receiving photo data', err)
//             res.status(401)
//         })
//     },
//     post: function(req, res) {
//         console.log('test')
//         res.send('applied')
//     }
// }

// const restaurant_controllers = {
//     get: function(req, res) {
//         restaurants.findAll({})
//         .then(data => {
//             res.status(200).send(data)
//         })
//         .catch(err => {
//             console.log('error receiving restaurant data', err)
//             res.status(401)
//         })
//     },
//     post: function(req, res) {
//         console.log('test')
//         res.send('applied')
//     }
// }

// const review_controllers = {
//     get: function(req, res) {
//         let id = req.headers.restaurant_id
//         reviews.findAll({
//             where: {
//                 restaurant_id: id
//             }
//         })
//         .then(data => {
//             console.log('review data received')
//             res.status(200).send(data)
//         })
//         .catch(err => {
//             console.log('error receiving review data', err)
//             res.status(401)
//         })
//     },
//     post: function(req, res) {
//         let newReview = {'date': req.body.date, 'counts': req.body.counts, 'rating': req.body.rating, 'user_id': req.body.user_id, 'restaurant_id': req.body.restaurantID, 'description': req.body.reviewDescription}
//         reviews.insertOrUpdate(newReview);
//         res.status(201).send('applied')
//     }
// }

// module.exports = {
//     user_controllers: user_controllers,
//     photo_controllers: photo_controllers,
//     restaurant_controllers: restaurant_controllers,
//     review_controllers: review_controllers
// }