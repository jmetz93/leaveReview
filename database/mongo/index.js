const MongoClient = require('mongodb');

let db = null;

MongoClient.connect('mongodb://localhost:27017/', {
  poolSize: 5
}, (err, client) => {
  if (err) {
    console.log('Error making connection to db', err);
  } else {
    console.log('Succesfully connected to db');
    db = client.db('leavereviews');
    
    db.createCollection('users',(err, res) => {
      if (err) {
        console.log('Error creating Users collection', err);
      } else {
        console.log('Success creating Users collection');
      }
    });

    db.createCollection('restaurants', {autoIndexId: true}, (err, res) => {
      if (err) {
        console.log('Error creating Restaurants collection', err);
      } else {
        console.log('Success creating Restaurants collection')
      }
    });

    db.createCollection('reviews', {autoIndexId: true}, (err, res) => {
      if (err) {
        console.log('Error creating Reviews collection', err);
      } else {
        console.log('Success creating Reviews collection')
      }
    });

    db.createCollection('photos', {autoIndexId: true}, (err, res) => {
      if (err) {
        console.log('Error creating Photos collection', err);
      } else {
        console.log('Success creating Photos collection');
      }
    });
  }
})

module.exports = { db }