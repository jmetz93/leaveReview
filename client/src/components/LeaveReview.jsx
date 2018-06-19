import React from 'react';
import EmptyProfile from '../photos/emptyprofile.png';
import styles from '../css/LeaveReview.css';
import StarIcon from '../icons/StarIcon.jsx';

export default class LeaveReview extends React.Component {
    constructor(props){
        super(props) 
        this.state = {
            RestaurantName: props.RestaurantName,
            Rating: 0,
            SelectedRating: 0
            }
        }

        updateRating(Rating) {
            this.setState({
                Rating: Rating
            })
        }
    
    render() {
        return (
            <li className={styles.container}>
                <div className={styles.profilephoto}>
                    <img src={"https://s3.us-east-2.amazonaws.com/review-component/photos/emptyprofile.png"} width="148" height="68"/>
                </div>
                <div className={styles.starboard}>
                    <div className={styles.widgetcontainer}>
                        <ul className={styles.widgetboard}>
                            <li onMouseEnter={() => this.updateRating(5)} className={styles['Rating-'+String(this.state.Rating)+'--Star-5']} onClick={() => this.props.writeReviewToggleOn(this.state.Rating)}><img /> < StarIcon/> </li>
                            <li onMouseEnter={() => this.updateRating(4)} className={styles['Rating-'+String(this.state.Rating)+'--Star-4']} onClick={() => this.props.writeReviewToggleOn(this.state.Rating)}><img /> < StarIcon/> </li>
                            <li onMouseEnter={() => this.updateRating(3)} className={styles['Rating-'+String(this.state.Rating)+'--Star-3']} onClick={() => this.props.writeReviewToggleOn(this.state.Rating)}><img /> < StarIcon/> </li>
                            <li onMouseEnter={() => this.updateRating(2)} className={styles['Rating-'+String(this.state.Rating)+'--Star-2']} onClick={() => this.props.writeReviewToggleOn(this.state.Rating)}><img /> < StarIcon/> </li>
                            <li onMouseEnter={() => this.updateRating(1)} className={styles['Rating-'+String(this.state.Rating)+'--Star-1']} onClick={() => this.props.writeReviewToggleOn(this.state.Rating)}><img /> < StarIcon/> </li>
                        </ul>
                    </div>
                    <a className={styles.link} onClick={() => this.props.writeReviewToggleOn(this.state.Rating)}>Start your review of <strong>{this.state.RestaurantName}.</strong></a>
                </div>
            </li>
        )
    }
    
}