const { Pool } = require('pg');
const { Client } = require('pg');

const pool = new Pool({
  user: 'jacobmetzinger',
  host: "localhost",
  database: 'reviews',
  password: '', 
  port: "5432"
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
});

pool.connect((err) => {
  if (err) {
    console.log('error connecting to db', err)
    } else {
      console.log('successfully connected to db')
    }
})
                  
// const client = new Client({
//   user: 'jacobmetzinger',
//   host: 'localhost',
//   database: 'reviews',
//   password: 'jacob'
// });


// client.connect((err) => {
//   if (err) {
//     console.log('connection error', err);
//   } else {
//     console.log('connected to database');
//   }
// })

module.exports.client = pool;



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
