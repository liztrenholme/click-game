import React, { Component } from 'react';
import '../App.css';
import GameOver from '../images/gameover.jpg'

class YouLost extends Component {
    render() {
        return (
            <div>
                <h1 className='gameOverText'>Game over!</h1>
                <img
                    className='gameOver'
                    src={GameOver}
                    alt='Game over' />
            </div>
        );
    }
}

export default YouLost;