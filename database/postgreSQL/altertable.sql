ALTER TABLE photos
ADD CONSTRAINT review_id
FOREIGN KEY (review_id)
REFERENCES reviews(id)
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE photos
ADD CONSTRAINT restaurant_id
FOREIGN KEY (restaurant_id)
REFERENCES restaurants(id)
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE reviews
ADD CONSTRAINT restaurant_id
FOREIGN KEY (restaurant_id)
REFERENCES restaurants(id)
ON DELETE CASCADE 
ON UPDATE CASCADE;

ALTER TABLE reviews
ADD CONSTRAINT user_id
FOREIGN KEY (user_id)
REFERENCES users(id)
ON DELETE CASCADE 
ON UPDATE CASCADE;

create index on photos(restaurant_id);
create index on photos(review_id);
create index on reviews(restaurant_id);
create index on reviews(user_id);
create index on reviews(ratings);