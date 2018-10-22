import React, { Component } from 'react';
import '../App.css';
import SwitchPics from './SwitchPics';

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