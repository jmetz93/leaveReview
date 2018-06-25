const { Client } = require('pg');

const client = new Client({
  user: 'jacobmetzinger',
  host: 'localhost',
  database: 'reviews',
  password: 'jacob'
});
client.connect((err) => {
  if (err) {
    console.log('connection error', err);
  } else {
    console.log('connected to database');
  }
})

module.exports = {
  client
};



// const Sequelize = require('sequelize');

// const connection = new Sequelize('postgres','postgres','', {
//     host: 'db',
//     dialect: 'postgres'
// });

// connection.authenticate()
//     .then(() => {
//         console.log('connected to database');
//     })
//     .catch(err => {
//         console.log('Error connecting to the database ', err);
//     })

// module.exports = {
//     connection: connection
// };
