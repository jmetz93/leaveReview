import React from 'react';
import ReactDOM from 'react-dom';
import ReviewComponent from './ReviewComponent.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div>
                < ReviewComponent />
            </div>
        )
    }
}

ReactDOM.render(< App/>, document.getElementById('review-component'));