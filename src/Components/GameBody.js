import React, { Component } from 'react';
import '../App.css';
import SwitchPics from './SwitchPics';
//const pictureNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//const id = pictureNums[8];

class GameBody extends Component {
    render() {
        return (
            <div className="GameBody">
                <main className="GameMain" id="gamePlay">
                    <SwitchPics />
                </main>
            </div>
        );
    }
}


export default GameBody;