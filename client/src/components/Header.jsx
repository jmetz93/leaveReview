import React from 'react';
import styles from '../css/Header.css';
import SearchIcon from '../icons/SearchIcon.jsx';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            RestaurantName: props.RestaurantName
        }
    }

    render() {
        return (
            <div id="Header">
                <h2 className={styles.headertext}> <span className={styles.highlight}>Recommended Reviews</span> for {this.state.RestaurantName}</h2>
                <ul className={styles.search_bar}>
                    <input className={styles.inputbox} placeholder="Search within the reviews" />
                    <button type="submit" value="submit" className={styles.btn}>
                        < SearchIcon/>
                    </button>
                </ul> 
            </div>
        )
    }
}