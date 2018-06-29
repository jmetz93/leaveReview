const { client } = require('../../../database/postgreSQL/index.js');

const user_controllers = {
  get: function(req, res) {
    client.query(`SELECT * FROM users WHERE id = ($1)` , [req.headers.user_id], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error getting users= ', err);
      } else {
        res.status(200).send(data.rows);
      }
    })
  },
  
  post: function(req, res) {
    client.query(`INSERT INTO users (username, profilephoto, counts, city) VALUES ($1, $2, $3, $4)`, [req.headers.username, req.headers.profilephoto, req.headers.counts, req.headers.city], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error creating user= ', err);
      } else {
        res.status(201).send({});
      }
    })
  },

  put: function(req, res) {
    client.query(`UPDATE users SET username = $2, profilephoto = $3, counts = $4, city = $5 WHERE  username = $1`, [req.headers.oldname, req.headers.username, req.headers.profilephoto, req.headers.counts, req.headers.city], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error, updating user', err);
      } else {
        res.status(200).send({});
      }
    })
  },

  delete: function(req, res) {
    client.query(`DELETE FROM users WHERE users.username = ($1)`, [req.headers.username], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error deleting user', err);
      } else {
        res.status(200).send({});
      }
    })
  }
}

const photo_controllers = {
  get: function(req, res) {
    client.query(`SELECT * FROM photos WHERE photos.review_id = ($1)`, [req.headers.review_id], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error getting photos= ', err);
      } else {
        res.status(200).send(data.rows);
      }
    })
  },

  post: function(req, res) {
    client.query(`INSERT INTO photos (source, review_id, restaurant_id) VALUES ($1, $2, $3)`, [req.headers.source, req.headers.review_id, req.headers.restaurant_id], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error creating photo= ', err);
      } else {
        res.status(201).send({});
      }
    })
  },

  put: function(req, res) {
    client.query(`UPDATE photos SET source = $2, review_id = $3, restaurant_id = $4 WHERE  id = $1`, [req.headers.id, req.headers.source, req.headers.review_id, req.headers.reviews_id], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error, updating user', err);
      } else {
        res.status(200).send({});
      }
    })
  },

  delete: function(req, res) {
    client.query(`DELETE FROM photos WHERE photos.id = ($1)`, [req.headers.id], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error deleting user', err);
      } else {
        res.status(200).send({});
      }
    })
  }
}

const restaurant_controllers = {
  get: function(req, res) {
    client.query(`SELECT * FROM restaurants WHERE id = ($1)`, [req.headers.id], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error getting restaurants= ', err);
      } else {
        res.status(200).send(data.rows);
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
  },

  put: function(req, res) {
    client.query(`UPDATE restaurant SET restaurantname = $2 WHERE  restaurantname = $1`, [req.headers.oldname, req.headers.restaurantname], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error, updating user', err);
      } else {
        res.status(200).send({});
      }
    })
  },

  delete: function(req, res) {
    client.query(`DELETE FROM restaurants WHERE restaurants.restaurantname = ($1)`, [req.headers.restaurantname], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error deleting user', err);
      } else {
        res.status(200).send({});
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
        res.status(200).send(data.rows);
      }
    })
  },
  
  post: function(req, res) {
    console.log('request= ', req.body)
    client.query(`INSERT INTO reviews (timeposted, counts, ratings, user_id, restaurant_id, review) VALUES ($1, $2, $3, $4, $5, $6)`, [req.body.date, req.body.counts, req.body.rating, req.body.user_id, req.body.restaurantID, req.body.reviewDescription], (err, data) => {
      if (err) {
        console.log('Error creating review= ', err);
      } else {
        res.status(201);
      }
    })
  },

  put: function(req, res) {
    client.query(`UPDATE reviews SET timeposted = $2, counts = $3, ratings = $4, user_id = $5, restaurant_id = $6, review = $7 WHERE  id = $1`, [req.headers.id, req.headers.timeposted, req.headers.counts, req.headers.rating, req.headers.user_id, req.headers.restaurant_id, req.headers.review], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error, updating user', err);
      } else {
        res.status(200).send({});
      }
    })
  },

  delete: function(req, res) {
    client.query(`DELETE FROM reviews WHERE reviews.id = ($1)`, [req.headers.id], (err, data) => {
      if (err) {
        res.status(400);
        console.log('Error deleting user', err);
      } else {
        res.status(200).send({});
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