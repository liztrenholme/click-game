import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {
    render() {
        return (
            <div className="Counter">
                <h3>Current Score: {this.props.score.length ? this.props.score.length : '0'}  Top Score: {this.props.topScore}</h3>
            </div>
        );
    }
}


export default Counter;