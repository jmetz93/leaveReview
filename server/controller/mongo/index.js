const { db }  = require('../../../database/mongo/index.js')


const user_controllers = {
  get: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on get user request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('users').findOne({_id: req.headers.id}, (err, result) => { 
          if (err) {
            res.status(400).send({});
            console.log('Error finding User', err);
          } else {
            console.log('Found user');
            res.status(200).send(result);
          }
        })
      /*}
    })*/
  },

  post: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on post user request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('users').insertOne({}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error adding User');
          } else {
            res.status(201).send({});
            console.log('New user successfully added');
          }
        })
      /*}
    })*/
  },
  
  put: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on update user request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('users').updateOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error updating User');
          } else {
            res.status(200).send({});
            console.log('User successfully updated');
          }
        })
      /*}
    })*/
  },
  
  delete: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on delete user request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('users').deleteOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error deleting User');
          } else {
            res.status(200).send({});
            console.log('User successfully deleted');
          }
        })
      /*}
    })*/
  }
}

const photo_controllers = {
  get: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on get photos request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('photos').find({/*some req property*/}, {/*for some prop value*/}).toArray((err, result) => { 
          if (err) {
            res.status(400).send({});
            console.log('Error finding Photos', err);
          } else {
            console.log('Successfully found photos');
            res.status(200).send(result);
          }
        })
      /*}
    })*/
  },

  post: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on post photo request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('photos').insertOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error adding Photo');
          } else {
            res.status(201).send({});
            console.log('New photo successfully added');
          }
        })
      /*}
    })*/
  },
  
  put: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on update photo request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('photos').updateOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error updating Photo');
          } else {
            res.status(200).send({});
            console.log('Photo successfully updated');
          }
        })
      /*}
    })*/
  },
  
  delete: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on delete user request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('photos').deleteOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error deleting Photo');
          } else {
            res.status(200).send({});
            console.log('Photo successfully deleted');
          }
        })
      /*}
    })*/
  }
}

const restaurant_controllers = {
  get: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on get restaurant request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('restaurants').findOne({/*some req property*/}, (err, result) => { 
          if (err) {
            res.status(400).send({});
            console.log('Error finding Restaurant', err);
          } else {
            console.log('Found restaurant');
            res.status(200).send(result);
            db.close();
          }
        })
      /*}
    })*/
  },

  post: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on post restaurant request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('restaurants').insertOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error adding Restaurant');
          } else {
            res.status(201).send({});
            console.log('New restaurant successfully added');
          }
        })
      /*}
    })*/
  },
  
  put: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on update restaurant request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('restaurants').updateOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error updating Restaurant');
          } else {
            res.status(200).send({});
            console.log('Restaurant successfully updated');
          }
        })
      /*}
    })*/
  },
  
  delete: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on delete restaurant request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('restaurants').deleteOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error deleting Restaurant');
          } else {
            res.status(200).send({});
            console.log('Restaurant successfully deleted');
          }
        })
      /*}
    })*/
  }
}

const review_controllers = {
  get: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on get review request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('reviews').findOne({/*some req property*/}, (err, result) => { 
          if (err) {
            res.status(400).send({});
            console.log('Error finding Review', err);
          } else {
            console.log('Found review');
            res.status(200).send(result);
            db.close();
          }
        })
      /*}
    })*/
  },

  post: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on post review request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('reviews').insertOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error adding Review');
          } else {
            res.status(201).send({});
            console.log('New review successfully added');
          }
        })
      /*}
    })*/
  },
  
  put: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on update review request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('reviews').updateOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error updating Review');
          } else {
            res.status(200).send({});
            console.log('Review successfully updated');
          }
        })
      /*}
    })*/
  },
  
  delete: function(req, res) {
    /*MongoClient.connect(url, (err, db) => {
      if (err) {
        console.log('Error connecting to db on delete review request', err);
      } else {
        const db = db.db('leavereviews');*/
        db.collection('reviews').deleteOne({/*something with req*/}, (err, result) => {
          if (err) {
            res.status(400).send({});
            console.log('Error deleting Review');
          } else {
            res.status(200).send({});
            console.log('Review successfully deleted');
          }
        })
      /*}
    })*/
  }
}

module.exports = {
  user_controllers,
  photo_controllers,
  restaurant_controllers,
  review_controllers
}
