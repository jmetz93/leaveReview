const MongoClient = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/leavereviews', (err, client) => {
  if (err) {
    console.log('Error making connection to db', err);
  } else {
    console.log('Succesfully connected to db');
    const db = client.db('leavereviews');
    
    db.collection('users').find().toArray((err, result) => {
      if (err) {
        console.log('Error creating Users collection', err);
      } else {
        console.log('Success creating Users collection')
      }
    })
  }
})

module.exports = {
  MongoClient
}