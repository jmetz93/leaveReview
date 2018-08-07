import React from 'react';
import styles from '../css/WriteReview.css';
import StarIcon from '../icons/StarIcon.jsx';
import logo from '../photos/welp.png';
import axios from 'axios';

export default class WriteReview extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            RestaurantName: props.RestaurantName,
            Rating: props.toggledRating,
            ReviewDescription: '1',
            RestaurantID: props.RestaurantID
        }
    }

    updateRating(Rating) {
        this.setState({
            Rating: Rating
        })
    }

    updateDescription(event) {
        this.setState({
        ReviewDescription: event.target.value
        })
    }

    postReview() {
        console.log(this.state.ReviewDescription)
        axios.post('http://18.191.180.173:8080/api/reviews', 
            {reviewDescription: this.state.ReviewDescription, restaurantID: this.state.RestaurantID, 'rating': this.state.Rating, 'user_id': Math.floor(Math.random() * Math.floor(22))+1, 'counts': '0,0,0', 'date': '0'+String(Math.floor(Math.random()*Math.floor(8))+1)+'/'+String(Math.floor(Math.random()*Math.floor(30))+1)+'/2018'}
        )
        .then(

        () => {this.props.writeReviewToggleOff(),
        this.props.loadReviews()
        })
    }

    render() {
        return (
            <div className={styles.background_}>
                <div className={styles.invisible_closer} onClick={() => this.props.writeReviewToggleOff()}></div>
                <div className={styles.form_container}>
                    <div className={styles.form_header}>
                        <img src={"https://s3.us-east-2.amazonaws.com/review-component/photos/welp.png"} width="120" height="65"/>
                        <b className={styles.form_head_text}>Write a Review</b>
                    </div>

                    <div className={styles.form_input}>
                        <h4 className={styles.form_title}>{this.state.RestaurantName === "Lucha Libre Gourmet Taco Shop"? "Lucha Libre" : this.state.RestaurantName}</h4>
                        <div className={styles.form_input_container}>
                            <div className={styles.widget_and_text_container}>
                                <div className={styles.widgetcontainer}>
                                    <ul className={styles.widgetboard}>
                                        <li onMouseEnter={() => this.updateRating(5)} className={styles['Rating-'+this.state.Rating+'--Star-5']}><img /> < StarIcon/> </li>
                                        <li onMouseEnter={() => this.updateRating(4)} className={styles['Rating-'+this.state.Rating+'--Star-4']}><img /> < StarIcon/> </li>
                                        <li onMouseEnter={() => this.updateRating(3)} className={styles['Rating-'+this.state.Rating+'--Star-3']}><img /> < StarIcon/> </li>
                                        <li onMouseEnter={() => this.updateRating(2)} className={styles['Rating-'+this.state.Rating+'--Star-2']}><img /> < StarIcon/> </li>
                                        <li onMouseEnter={() => this.updateRating(1)} className={styles['Rating-'+this.state.Rating+'--Star-1']}><img /> < StarIcon/> </li>
                                    </ul>
                                </div>
                                <h5 className={styles.widget_text}>{this.state.Rating === 0? "" : this.state.Rating === 1? "Eek! Methinks not." : this.state.Rating === 2? "Meh. I've experienced better." : this.state.Rating === 3? "A-OK." : this.state.Rating === 4? "Yay! I'm a fan." : this.state.Rating === 5? "Woohoo! As good as it gets." : ""}</h5>
                            </div>
                            <textarea className={styles.form_input_field} placeholder="Share your experience" onKeyUp={this.updateDescription.bind(this)}/>
                        </div>
                        <div className={styles.submit_review} onClick={() => this.postReview()}><b className={styles.submit_text}>Post Review</b></div>
                    </div>
                </div>
            </div>
        )
    }
}