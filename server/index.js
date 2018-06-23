const parser = require('body-parser');
const path = require('path');
const express = require('express');
const cors = require('cors');

const PORT = 3000;
const App = express();
require('../database_postgresql/index.js')
const {router} = require('./router');

App.use(parser.json());
App.use(parser.urlencoded({extended: true}));
App.use(cors());

App.use(express.static(path.join(__dirname, '../client/dist/')))
App.use('/api', router);

App.listen(PORT, err => {
    err? console.log('Failed to start server: ', err) : console.log('Listening on port ', PORT)
})