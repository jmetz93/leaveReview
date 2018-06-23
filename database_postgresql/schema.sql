DROP DATABASE IF EXISTS reviews;
CREATE DATABASE reviews;

\c reviews;

create table users (
  id serial primary key,
  username varchar(256),
  profilephoto varchar(256),
  counts varchar(256),
  city varchar(256)
);

create table restaurants (
  id serial primary key,
  restaurantname varchar(256)
);

create table reviews (
  id serial primary key,
  timeposted varchar(256),
  counts varchar(256),
  ratings int,
  user_id int references users(id),
  restaurant_id int references restaurants(id),
  review text
);

create table photos (
  id serial primary key,
  source varchar(256),
  review_id int references reviews(id),
  restaurant_id int references restaurants(id) 
);



