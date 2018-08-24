# Crowd-Source-Review-Component
This is a microservice that renders reviews from a mongo database with mock reviews. All data is randomly generated and you are able to give your own reviews as well. 

# For Demo: 

# Set up in Terminal Steps
- "npm install" for dependencies
- "sudo mongod" to run mongod shell
- Open new terminal tab and "mongo --host 127.0.0.1:27017" to start local mongo instance
- Open additional tab in the project directory and  enter "cd database"
- "cd mongo" 
- "node generateData.js" create data

 # Inside Mongo Instance Shell to Insert Data to Database
- mongoimport --db yelp --collection users --type tsv --drop --columnsHaveTypes --fields "_id.int32(),name.string(),counts.string(),profilephoto.string(),location.string()" --file users.tsv;

- mongoimport --db yelp --collection photos --type tsv --drop --columnsHaveTypes --fields "_id.int32(),src.string(),review_id.int32(),restaurant_id.int32()" --file photos.tsv;

- mongoimport --db yelp --collection reviews --type tsv --drop --columnsHaveTypes --fields "_id.int32(),date.string(),counts.string(),rating.int32(),user_id.int32(),restaurant_id.int32(),description.string()" --file reviews.tsv;

- mongoimport --db yelp --collection restaurants --type tsv --drop --columnsHaveTypes --fields "_id.int32(),name.string()" --file restaurants.tsv;

# Run Application
- "npm run build" start Webpack
- "npm start" run server
- Go to "localhost:3000" in browser
