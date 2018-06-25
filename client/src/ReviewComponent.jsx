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
        let reviews = [];
        let restaurantName = ''
        let restaurantID = 0
        //http://35.174.116.97:3000/api/restaurants
        axios.get('/api/restaurants', {
            headers: {'id': Math.floor(Math.random() * 1000)}
        })
            .then(({data}) => {
                this.setState({
                    RestaurantID: data.rows[0].id,
                    RestaurantName: data.rows[0].restaurantname,
                })
                this.loadReviews();
            });
    }

    loadReviews() {
        console.log('reloading reviews')
        console.log('restId= ', this.state.RestaurantID)
        axios.get('/api/reviews', {
            headers: {'restaurant_id': this.state.RestaurantID}
        })
        .then(({data}) => {
            let reviews = [];
            data.rows.forEach(review => {
                let counts = review.counts.split(',');
                let newReview = {
                    username: null,
                    location: null,
                    date: review.timeposted,
                    friends_count: null,
                    reviews_count: null,
                    photos_count: null,
                    useful_count: Number(counts[0]),
                    funny_count: Number(counts[1]),
                    cool_count: Number(counts[2]),
                    reviewDescription: review.description,
                    img_src: null,
                    rating: review.rating,
                    photos: null
                }
                console.log('id= ', review.user_id);
                axios.get('/api/users', {
                    headers: {'user_id': review.user_id}
                })
                .then(({data}) => {
                    console.log('User data= ', data)
                    let user_counts = data[0].counts.split(',');
                    newReview.username = data[0].username
                    newReview.location = data[0].location
                    newReview.friends_count = counts[0]
                    newReview.reviews_count = counts[1]
                    newReview.photos_count = counts[2]
                    newReview.img_src = data[0].profilephoto
                    axios.get('/api/photos', {
                        headers: {'review_id': review.id}
                    })
                    .then(({data}) => {
                        let new_album = [];
                        data.forEach(photo => {
                            new_album.push(photo.src)
                        })
                        newReview.photos = new_album
                        reviews.push(newReview);
                        this.setState({
                            reviews: reviews,
                            update: true
                        })
                    })
                })
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
                {this.state.update?
                < Header RestaurantName={this.state.RestaurantName}/> : null }
                {this.state.update?
                < LeaveReview RestaurantName={this.state.RestaurantName} writeReviewToggleOn={this.writeReviewToggleOn.bind(this)}/> : null }
                { this.state.reviews.map(review => (
                < Review rating={review.rating} photos={review.photos} username={review.username} location={review.location} date={review.date} friends_count={review.friends_count} reviews_count={review.reviews_count} photos_count={review.photos_count} useful_count={review.useful_count} funny_count={review.funny_count} cool_count={review.cool_count} reviewDescription={review.reviewDescription} imgSrc={review.img_src} key={Math.random()*Math.random(1)}/>
                ))
                }
                { this.state.writeReview? < WriteReview  toggledRating={this.state.toggledRating} loadReviews={this.loadReviews.bind(this)} writeReviewToggleOff={this.writeReviewToggleOff.bind(this)} RestaurantID={this.state.RestaurantID} RestaurantName={this.state.RestaurantName}/> : null }
            </div>
        )
    }
}