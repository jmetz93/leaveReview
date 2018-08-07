import React from 'react';
import Header from './components/Header.jsx';
import LeaveReview from './components/LeaveReview.jsx';
import Review from './components/Review.jsx';
import WriteReview from './components/WriteReview.jsx';
import axios from 'axios';

export default class ReviewComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      RestaurantID: 1,
      RestaurantName: '',
      reviews: [],
      update: true,
      writeReview: false,
      toggledRating: 0
    }
  }

  componentDidMount() {
    let restaurantID = Math.floor(Math.random() * Math.floor(10));
    axios.get('/api/restaurants', {
      params: {
        ID: restaurantID
      }
    })
      .then(({data}) => {
        console.log(data);
        console.log('rest name: ', data[0].name);
        console.log('rest id:', restaurantID);
        this.setState({
          RestaurantName: data[0].name,
          RestaurantID: restaurantID,
        })
        this.loadReviews();
      });
  }

  loadReviews() {
    axios.get('api/reviews', {
      params: {'restaurant_id': this.state.RestaurantID }
    })
      .then(({ data }) => {
        let reviews = [];
        console.log('in reviews: ', data)
        this.setState({
          update: true
        })
        data.forEach(review => {
          let counts = review.counts.split(',');
          // const reviewID = review._id;
          // console.log(reviewID);
          let newReview = {
            username: null,
            location: null,
            date: data.date,
            friends_count: null,
            reviews_count: null,
            photos_count: null,
            useful_count: Number(counts[0]),
            funny_count: Number(counts[1]),
            cool_count: Number(counts[2]),
            reviewDescription: review.description,
            img_src: null,
            rating: data.rating,
            photos: null
          }
          axios.get('api/users', {
            params: { 'user_id': review.user_id }
          })
            .then(({ data }) => {
              console.log('users: ', data);
              let user_counts = data[0].counts.split(',');
              newReview.username = data[0].name
              newReview.location = data[0].location
              newReview.friends_count = user_counts[0]
              newReview.reviews_count = user_counts[1]
              newReview.photos_count = user_counts[2]
              newReview.img_src = data[0].profilephoto
              console.log('review id: ', review._id);
              axios.get('api/photos', {
                params: { 'review_id': review._id }
              })
                .then(({ data }) => {
                  // console.log('phots:', data);
                  let new_album = [];
                  data.forEach(photo => {
                    new_album.push(photo.src)
                  })
                  newReview.photos = new_album

                  reviews.push(newReview);
                  this.setState({
                    reviews
                  })
                })
            });
        })
      })
    this.setState({
      update: false
    })
  }

  writeReviewToggleOff() {
    if (this.state.writeReview) {
      this.setState({
        writeReview: false,
        toggledRating: 0
      })
    }
  }

  writeReviewToggleOn(n) {
    if (!this.state.writeReview) {
      this.setState({
        writeReview: true,
        toggledRating: n
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.update ?
          < Header RestaurantName={this.state.RestaurantName} /> : null}
        {this.state.update ?
          < LeaveReview RestaurantName={this.state.RestaurantName} writeReviewToggleOn={this.writeReviewToggleOn.bind(this)} /> : null}
        {this.state.reviews.map(review => (
          < Review rating={review.rating} photos={review.photos} username={review.username} location={review.location} date={review.date} friends_count={review.friends_count} reviews_count={review.reviews_count} photos_count={review.photos_count} useful_count={review.useful_count} funny_count={review.funny_count} cool_count={review.cool_count} reviewDescription={review.reviewDescription} imgSrc={review.img_src} key={Math.random() * Math.random(1)} />
        ))
        }
        {this.state.writeReview ? < WriteReview toggledRating={this.state.toggledRating} writeReviewToggleOff={this.writeReviewToggleOff.bind(this)} RestaurantID={this.state.RestaurantID} RestaurantName={this.state.RestaurantName} /> : null}
      </div>
    );
  }
}