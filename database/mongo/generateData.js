const faker = require('faker');
const fs = require('fs');
const Promise = require('bluebird');

const reviews = [
  'I LOVE Hungry Bear. Absolutely awesome. The atmosphere of the place was comfortable af. I now feel bomb as F#!K. Bring your friends and family to Hungry Bear to try the Fries',
  'Turn around. Hungry Bear is not worth your money. The manager especially was awful. If you get the Burger, expect it to be soggy. I couldnt believe it. When my tastebuds made contact with the Fries, I felt disgusted. I have to give the place a 1 out of 5.',
  'Hungry Bear was the most delicious experience of my life so far. And the staff? Dont even get me started. They were excellent. The first thing I thought when I saw the menu was "yummy!" It is my distinct honor to give this place a 3 out of 5.',
  'Pho ck You was the most dank experience of my life so far. I now feel good $#!T. the Pho was filling. And with that, I can now happily die.',
  'bomb. Thats the only word I can use to describe Pho ck You. I now feel just right. The manager especially was filling. If you come here, expect to feel excellent! And with that, I can now happily die.',
  'Looking for a place to eat? Look no further. Sushi Sasabune is the place for you. the Scallop was the $#!T. the Butterfish was bomb as F#!K. Now go. Spread the word of Sushi Sasabune and their filling Blue crab roll.',
  'I LOVE Sushi Sasabune. The smell in the air as I walked inside... completely dank. I now feel excellent. It is my distinct honor to give this place a 5 out of 5.',
  'I have to give Sushi Sasabune a 2. The atmosphere of the place was commendable. The manager especially was filling. I have to give the place a 4 out of 5.',
  'delightful. Thats the only word I can use to describe Manhatten Beach Post. The atmosphere of the place was the $#!T. Absolutely just right. Bring your friends and family to Manhatten Beach Post to try the Caramel Tuile',
  'Manhatten Beach Post is the most crap place I have ever eaten at! The first thing I thought when I saw the menu was "bland!" The atmosphere of the place was $#!t. And the staff? Dont even get me started. They were repulsive. Thats why I have to give Manhatten Beach Post a 2.',
  'I LOVE Lucha Libre. the California Surfin Burrito was delightful. The smell in the air as I walked inside... completely DANK. the California Surfin Burrito was delicious. Bring your friends and family to Lucha Libre to try the California Surfin Burrito',
  'Looking for a place to eat? Look no further. Lucha Libre is the place for you. The atmosphere of the place was good $#!T. I now feel bomb as F#!K. It is my distinct honor to give this place a 3 out of 5.',
  'Dont even think about coming to Lucha Libre! The first thing I thought when I saw the menu was "distateful!" If you come here, expect to feel sour! The first thing I thought when I saw the menu was "$#!t!" All in all, just know I warned you. Dont get the California Surfin Burrito.',
  'Looking for a place to eat? Look no further. Joshs Kitchen is the place for you. I couldnt believe it. When my tastebuds made contact with the Lobster, I was in a dank place. The first thing I thought when I saw the menu was "dank!" And with that, I can now happily die.',
  'delicious. Thats the only word I can use to describe Joshs Kitchen. And the staff? Dont even get me started. They were filling. the Seabass was yummy. If you come here, expect to feel amazing! Now go. Spread the word of Joshs Kitchen and their good $#!T Seabass.',
  'the $#!T. Thats the only word I can use to describe Ivory on Sunset. If you get the Shrimp Cocktail, expect it to be yummy. I now feel the $#!T. If you get the Shrimp Cocktail, expect it to be bomb as F#!K. It is my distinct honor to give this place a 5 out of 5.',
  'Looking for a place to eat? Look no further. Ivory on Sunset is the place for you. Absolutely excellent. And the staff? Dont even get me started. They were good. Absolutely delicious. It is my distinct honor to give this place a 4 out of 5.',
  'I LOVE Ivory on Sunset. If you get the Shrimp Cocktail, expect it to be good. If you come here, expect to feel commendable! And with that, I can now happily die.',
  'Del Friscos Grille was the most bomb experience of my life so far. The manager especially was bomb. Absolutely bomb as F#!K. I now feel excellent. Bring your friends and family to Del Friscos Grille to try the Nutella Bread Pudding',
  'These are the reasons why I have to give Del Friscos Grille a 2. the Steakhouse Salad was distateful. I now feel awful. If you get the Steakhouse Salad, expect it to be bad. Thats why I have to give Del Friscos Grille a 3.',
  'I give Del Friscos Grille a well deserved 4 out of 5. I couldnt believe it. When my tastebuds made contact with the Nutella Bread Pudding, I was in a just right place. If you get the Nutella Bread Pudding, expect it to be commendable. If you come here, expect to feel excellent! Bring your friends and family to Del Friscos Grille to try the Nutella Bread Pudding',
  'Dont even think about coming to Del Friscos Grille! And the staff? Dont even get me started. They were shallow. Absolutely bad. Overall, I can go the rest of my life without ever coming back!'
]

const photoSources = [
  'https://s3-media3.fl.yelpcdn.com/bphoto/LL_ibUp-R_2-iXkdO4V4-Q/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/FBoLLCJsOE2lL-Mbcy9S9w/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/JIZyDmBBl0flCyQsliQqRA/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/D5iz3-3XXFlzNbmI0ft6lg/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/Kau2nVXb86awQuf__6ne1Q/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/YMZDvRjbbtvR23_n1HGB0w/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/NrGw9alaEPQ-EW7aaGpxWQ/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/9_Rw4GinB050sDzECTJZ7g/o.jpg',
  'https://s3-media4.fl.yelpcdn.com/bphoto/htzdc0IVF8t4eE5FXyjq0Q/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/yVnQkwrnl36U3LTDGWa1Ow/o.jpg', 
  'https://s3-media1.fl.yelpcdn.com/bphoto/R_nhNXaDugnLCTHb_HqSVw/o.jpg', 
  'https://s3-media3.fl.yelpcdn.com/bphoto/arHtSEJhPK-eRrJg50T9MA/o.jpg', 
  'https://s3-media4.fl.yelpcdn.com/bphoto/hQDnWccGdgPHJDfa4Ht5Ig/o.jpg', 
  'https://s3-media4.fl.yelpcdn.com/bphoto/lokjec_jQy7Quc2co4Voeg/o.jpg', 
  'https://s3-media1.fl.yelpcdn.com/bphoto/4PKpYavKII2S5t4LyqVLJA/o.jpg', 
  'https://s3-media1.fl.yelpcdn.com/bphoto/oAdfYdes8tbm7LtdLwoirg/o.jpg', 
  'https://s3-media3.fl.yelpcdn.com/bphoto/P4B4KHEOcCMTHX6jpomTrQ/o.jpg', 
  'https://s3-media1.fl.yelpcdn.com/bphoto/sIs3kIJxv0cFlWGLG-pdYw/o.jpg', 
  'https://s3-media3.fl.yelpcdn.com/bphoto/D5onVCpt_yd66CySfHqupQ/o.jpg', 
  'https://s3-media4.fl.yelpcdn.com/bphoto/bjVM7EU4EIONpApXD8H5RA/o.jpg', 
  'https://s3-media3.fl.yelpcdn.com/bphoto/j_uAjiI_9SfRqQlKEreq2A/o.jpg', 
  'https://s3-media3.fl.yelpcdn.com/bphoto/7gJk28u6Z8n38AdEjhbj1w/o.jpg', 
  'https://s3-media1.fl.yelpcdn.com/bphoto/4gUN0paSkCNPBqV5evvLkQ/o.jpg', 
  'https://s3-media2.fl.yelpcdn.com/bphoto/jGNsTWAg3B2eb5BRwEx1lA/o.jpg', 
  'https://s3-media1.fl.yelpcdn.com/bphoto/sJOKYa6_y_AodSlMBH9IbA/o.jpg', 
  'https://s3-media4.fl.yelpcdn.com/bphoto/nz5gTrP0MasImd1nq3o6RQ/o.jpg', 
  'https://s3-media1.fl.yelpcdn.com/bphoto/Hcl8zR7tBbMKKudXtzbEMA/o.jpg', 
  'https://s3-media3.fl.yelpcdn.com/bphoto/eH9O_dKH-y7yMUUdidSJFw/o.jpg', 
  'https://s3-media3.fl.yelpcdn.com/bphoto/uWPP2LXUMWa7y_vGzyb2qg/o.jpg', 
  'https://s3-media1.fl.yelpcdn.com/bphoto/h_4PImxJvkSl-DeCyq6uag/o.jpg', 
  'https://s3-media3.fl.yelpcdn.com/bphoto/TcUctJIiKw47GuHXpRfqqQ/o.jpg', 
  'https://s3-media4.fl.yelpcdn.com/bphoto/lo5mYZTGxHwfB_paQ8TiQw/o.jpg', 
  'https://s3-media2.fl.yelpcdn.com/bphoto/y4vzzB_fJpzvKnA-Ka-Lcw/o.jpg',
  'https://s3-media1.fl.yelpcdn.com/bphoto/QbqCC1IiPS1O6nIK6734Ng/o.jpg',
  'https://s3-media3.fl.yelpcdn.com/bphoto/75SLAExTKsx2wdm9TFr0nw/o.jpg'
]

let usersID = 1;
let restaurantsID = 1;
let reviewsID = 1;
let photosID = 1;

const generateUsers = () => {
  const name = faker.name.firstName() + ' ' + faker.name.lastName();
  // const counts = faker.fake("{{random.number(200)}},{{random.number(200)}},{{random.number(100)}}")
  const counts = `${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 200)},${Math.floor(Math.random() * 100)}`
  const image = faker.image.avatar();
  const location = faker.address.city();
  return [usersID++, name, counts, image, location];
}


const restaurants = () => {
  const name = faker.company.companyName();
  return [restaurantsID++, name]; 
}

function randomDate(start, end) {
  var d = new Date(start.getTime() + Math.random() * (end.getTime() -                     start.getTime())),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [month, day, year].join('-');
}


const reviewsGen = () => {
  const timeposted = randomDate(new Date(2012, 0, 1), new Date());
  const counts = faker.fake("{{random.number(15)}}, {{random.number(20)}}, {{random.number(10)}}"); 
  const ratings = faker.fake("{{random.number(5)}}");
  const userID = Math.ceil(Math.random() * 10);
  const restaurantID = Math.ceil(Math.random() * 10);
  const review = reviews[Math.floor(Math.random() * reviews.length)]
  return [reviewsID++, timeposted, counts, ratings, userID, restaurantID, review];
}

const photos = () => {
  const source = photoSources[Math.floor(Math.random() * photoSources.length)];
  const reviewID = Math.ceil(Math.random() * 100);
  const restaurantID = Math.ceil(Math.random() * 10);
  return [photosID++, source, reviewID, restaurantID];
}

const callWrite = (stream, func, timer, cb) => {
  promisifiedWrite(stream, func, timer, cb);
}


const writeData = (writer, generator, time, number, callback) => {
  let i = number;
  console.time(time);
  function write() {
    let ok = true;
    do {
      i--;
      if(i === 0) {
        writer.write(generator().join('\t'));
        callback();
      } else {
        ok = writer.write(generator().join('\t') + '\n');
      }
    } while(i > 0 && ok);
      if(i > 0) {
        writer.once('drain', write);
      }
  }
  write();
}

const usersStream = fs.createWriteStream('../../users.tsv');
const restaurantsStream = fs.createWriteStream('../../restaurants.tsv');
const reviewsStream = fs.createWriteStream('../../reviews.tsv');
const photosStream = fs.createWriteStream('../../photos.tsv');

const promisifiedWrite = Promise.promisify(writeData);
callWrite(usersStream, generateUsers, 'users', 10, () => {
  console.log('Users');
  console.timeEnd('users');
})

callWrite(photosStream, photos, 'photos', 50, () => {
  console.log('Photos');
  console.timeEnd('photos');
});

callWrite(restaurantsStream, restaurants, 'restaurants', 10, () => {
  console.log('Restaurants');
  console.timeEnd('restaurants');
})

callWrite(reviewsStream, reviewsGen, 'reviews', 100, () => {
  console.log('Reviews');
  console.timeEnd('reviews');
})