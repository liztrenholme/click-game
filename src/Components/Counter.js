import React, { Component } from 'react';
import '../App.css';

class Counter extends Component {
    render() {
        return (
            <div className="Counter">
            {this.props.gameOver ? 
            (<button
                className='playAgain'
                onClick={this.props.playAgain}>Play again?</button>) :
                (<div>
                <h3 className='current'>Current Score: {this.props.score.length ? this.props.score.length : '0'}</h3>
                <h3 className='top'>Top Score: {this.props.topScore}</h3>
                </div>)}
            </div>
        );
    }
}


export default Counter;