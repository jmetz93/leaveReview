import React from 'react';
import styles from '../css/Review.css';
import FriendsIcon from '../icons/FriendsIcon.jsx';
import SmallStarIcon from '../icons/SmallStarIcon.jsx';
import ShareIcon from '../icons/ShareIcon.jsx';
import EmbedIcon from '../icons/EmbedIcon.jsx';
import ComplimentIcon from '../icons/ComplimentIcon.jsx';
import MessageIcon from '../icons/MessageIcon.jsx';
import FollowIcon from '../icons/FollowIcon.jsx';
import CoolIconGray from '../icons/CoolIconGray.jsx';
import CoolIconWhite from '../icons/CoolIconWhite.jsx';
import FunnyIconGray from '../icons/FunnyIconGray.jsx';
import FunnyIconWhite from '../icons/FunnyIconWhite.jsx';
import UsefulIconGray from '../icons/UsefulIconGray.jsx';
import UsefulIconWhite from '../icons/UsefulIconWhite.jsx';
import RatingImg from '../photos/ratingImg.jsx';

export default class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: props.username,
            location: props.location,
            date: props.date,
            friends_count: props.friends_count,
            reviews_count: props.reviews_count,
            photos_count: props.photos_count,
            useful_count: props.useful_count,
            funny_count: props.funny_count,
            cool_count: props.cool_count,
            reviewDescription: props.reviewDescription,
            imgSrc: props.imgSrc,
            hovering: false,
            votedCool: false,
            votedFunny: false,
            votedUseful: false,
            rating: props.rating,
            opacity: 0,
            photos: props.photos
        }
    }

    hoveringOn() {
        this.setState({
            hovering: true,
            opacity: 1
        })
    }
    hoveringOff() {
        this.setState({
            hovering: false,
            opacity: 0
        })
    }

    updateVoted(type) {
        if (type === 'cool'){
            if (!this.state.votedCool){
            this.setState({
                votedCool: true,
                cool_count: this.state.cool_count + 1
            })
            } else {
                this.setState({
                    votedCool: false,
                    cool_count: this.state.cool_count - 1
                })
            }
        } else if (type === 'funny'){
            if (!this.state.votedFunny){
                this.setState({
                    votedFunny: true,
                    funny_count: this.state.funny_count + 1
                })
                } else {
                    this.setState({
                        votedFunny: false,
                        funny_count: this.state.funny_count - 1
                    })
                }
        } else if (type === 'useful'){
            if (!this.state.votedUseful){
                this.setState({
                    votedUseful: true,
                    useful_count: this.state.useful_count + 1
                })
                } else {
                    this.setState({
                        votedUseful: false,
                        useful_count: this.state.useful_count - 1
                    })
                }
        }
    }

    render() {
        return (
            <div onMouseEnter={() => this.hoveringOn()} onMouseLeave={() => this.hoveringOff()} className={styles.container}>
                {/* Portfolio */}
                <div className={styles.passport_container}>
                    <img className={styles.profile_photo} src={this.state.imgSrc}/>
                    <ul className={styles.passport_stats}>
                        <li className={styles.profile_username}><b>{this.state.username}</b></li>
                        <li className={styles.profile_location}><b>{this.state.location}</b></li>
                        <li className={styles.profile_friends_count}><span className={styles.friends_icon}>< FriendsIcon/></span><span className={styles.pfc_text}><b>{this.state.friends_count}</b> friends</span></li>
                        <li className={styles.profile_review_count}><span className={styles.small_star_icon}>< SmallStarIcon/></span><span className={styles.prc_text}><b>{this.state.reviews_count}</b> reviews</span></li>
                    </ul>
                    <ul style={{opacity: this.state.opacity, transition: '0.3s'}}className={styles.passport_options_container}>
                        <li className={styles.passport_option_container}><span className={styles.passport_option_icon}>< ShareIcon/></span><span className={styles.passport_option_text}><b>Share review</b></span></li>
                        <li className={styles.passport_option_container}><span className={styles.passport_option_icon}>< EmbedIcon/></span><span className={styles.passport_option_text}><b>Embed review</b></span></li>
                        <li className={styles.passport_option_container}><span className={styles.passport_option_icon}>< ComplimentIcon/></span><span className={styles.passport_option_text}><b>Compliment</b></span></li>
                        <li className={styles.passport_option_container}><span className={styles.passport_option_icon}>< MessageIcon/></span><span className={styles.passport_option_text}><b>Send message</b></span></li>
                        <li className={styles.passport_option_container}><span className={styles.passport_option_icon}>< FollowIcon/></span><span className={styles.passport_option_text}><b>Follow Afi P.</b></span></li>
                    </ul>
                </div>
                {/* Review Content */}
                <div className={styles.review_content_container}>

                    <RatingImg className={styles.rating_photo} rating={String(this.state.rating)} size="large"/>
                    <h5 className={styles.review_postdate}>{this.state.date}</h5>
                    <p className={styles.review_description}>{this.state.reviewDescription}</p>
                    {/* Rendering Photos */}
                    <ul style={{'padding': '0px'}}>
                        {
                            this.state.photos.length === 1?
                            <ul className={styles.single_photo_container}>
                                <li className={styles.single_photo} style={{"backgroundImage": "url("+this.state.photos[0]+")", "backgroundSize": "350px 350px"}}></li>
                            </ul>
                            :
                            this.state.photos.length === 2?
                            <ul className={styles.duplex_photo_container}>
                                <li className={styles.duplex_photo_left} style={{"backgroundImage": "url("+this.state.photos[0]+")", "backgroundSize": "170px 170px"}}></li>
                                <li className={styles.duplex_photo_right} style={{"backgroundImage": "url("+this.state.photos[1]+")", "backgroundSize": "170px 170px"}}></li>
                            </ul>
                            :
                            this.state.photos.length === 3?
                            <ul className={styles.triple_photo_container}>
                                <li className={styles.single_photo} style={{"backgroundImage": "url("+this.state.photos[0]+")", "backgroundSize": "350px 350px"}}></li>
                                <li className={styles.duplex_photo_left} style={{"backgroundImage": "url("+this.state.photos[1]+")", "marginTop": "10px", "backgroundSize": "170px 170px"}}></li>
                                <li className={styles.duplex_photo_right} style={{"backgroundImage": "url("+this.state.photos[2]+")", "marginTop": "10px", "backgroundSize": "170px 170px"}}></li>
                            </ul>
                            :
                            null
                        }
                    </ul>
                    <ul className={styles.voting_buttons_container}>
                        <li className={styles["vote_option_container_"+Number(this.state.votedCool)]} onClick={() => this.updateVoted('cool')}><span className={styles.vote_option_icon}>{Boolean(this.state.votedCool)? < CoolIconWhite/> : < CoolIconGray/>}</span><span className={styles.vote_option_text}>Cool {this.state.cool_count > 0? this.state.cool_count : null}</span></li>
                        <li className={styles["vote_option_container_"+Number(this.state.votedFunny)]} onClick={() => this.updateVoted('funny')}><span className={styles.vote_option_icon}>{Boolean(this.state.votedFunny)? < FunnyIconWhite/> : < FunnyIconGray/>}</span><span className={styles.vote_option_text}>Funny {this.state.funny_count > 0? this.state.funny_count : null}</span></li>
                        <li className={styles["vote_option_container_"+Number(this.state.votedUseful)]} onClick={() => this.updateVoted('useful')}><span className={styles.vote_option_icon}>{Boolean(this.state.votedUseful)? < UsefulIconWhite/> : < UsefulIconGray/>}</span><span className={styles.vote_option_text}>Useful {this.state.useful_count > 0? this.state.useful_count : null}</span></li>
                    </ul>
                    { this.state.votedCool||this.state.votedFunny||this.state.votedUseful? <h5 className={styles.user_votedOn}>Thanks for your vote!</h5> : <h5 className={styles.user_votedOff}>Thanks for your vote!</h5> }
                </div>
                <div className={styles.bottom_border}></div>
            </div>
        )
    }
}