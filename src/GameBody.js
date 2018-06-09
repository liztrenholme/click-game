import React, { Component } from 'react';
import './App.css';
const pictureNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const id = pictureNums[8];
class GameBody extends Component {
    render () {
        return (
            <div className="GameBody">
            <main className="GameMain">
            <img src="./images/1.jpg" id="1" alt="1" />
            <img src="./images/2.jpg" id="2" alt="2" />
            <img src="./images/3.jpg" id="3" alt="3" />
            <img src="./images/4.jpg" id="4" alt="4" />
            <img src="./images/5.jpg" id="5" alt="5" />
            <img src="./images/6.jpg" id="6" alt="6" />
            <img src="./images/7.jpg" id="7" alt="7" />
            <img src="./images/8.jpg" id="8" alt="8" />
            <img src="./images/9.jpg" id="9" alt="9" />
            
            </main>
            </div>
        );
    }
}


export default GameBody;