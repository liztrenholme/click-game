import React, { Component } from 'react';
import '../App.css';
import Win from '../images/win.jpg'

class YouWon extends Component {
    render() {
        return (
            <div>
                <h1 className='gameOverText'>You won!</h1>
                <img
                    className='youWon'
                    src={Win}
                    alt='You won!' />
            </div>
        );
    }
}

export default YouWon;