const Sequelize = require('sequelize');
const { connection } = require('./');
const { user_seeds } = require('./seeds.js');
const { photo_seeds } = require('./seeds.js');
const { restaurant_seeds } = require('./seeds.js');
const { review_seeds } = require('./seeds.js');

const reviews = connection.define('reviews', {
    date: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    counts: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING(500),
        allowNull: false
    }
}, { timestamps: false });

const restaurants = connection.define('restaurants', {
    name: {
        type: Sequelize.STRING(100),
        allowNull: false
    }
}, { timestamps: false });

const users = connection.define('users', {
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    profilephoto: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    counts: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    location: {
        type: Sequelize.STRING(50),
        allowNull: false
    }
}, { timestamps: false });

const photos = connection.define('photos', {
    src: {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    review_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    restaurant_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, { timestamps: false }) 

users.sync({force: true})
    .then(() => {
        users.bulkCreate(user_seeds);
    })
    .catch(err => console.log('error loading data', err));

photos.sync({force: true})
    .then(() => {
        photos.bulkCreate(photo_seeds);
    })
    .catch(err => console.log('error loading data', err));
restaurants.sync({force: true})
    .then(() => {
        restaurants.bulkCreate(restaurant_seeds);
    })
    .catch(err => console.log('error loading data', err));
reviews.sync({force: true})
    .then(() => {
        reviews.bulkCreate(review_seeds);
    })
    .catch(err => console.log('error loading data', err));

module.exports = {
    reviews: reviews,
    restaurants: restaurants,
    users: users,
    photos: photos
};
