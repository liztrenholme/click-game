import React, { Component } from 'react';
import '../App.css';
import SwitchPics from './SwitchPics';
import Counter from './Counter';
import Pic0 from '../images/pic1.jpg';
import Pic1 from '../images/pic2.jpg';
import Pic2 from '../images/pic3.jpg';
import Pic3 from '../images/pic4.jpg';
import Pic4 from '../images/pic5.jpg';
import Pic5 from '../images/pic6.jpg';
import Pic6 from '../images/pic7.jpg';
import Pic7 from '../images/pic8.jpg';
import Pic8 from '../images/pic9.jpg';
import GameOver from '../images/gameover.jpg'

const scrambleArray = (arr) => {
    let i,
        j,
        temp;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
};

class GameBody extends Component {
    state = {
        score: [],
        topScore: 0,
        gameOver: false,
        whichImages: [{
            key: 0,
            url: Pic0
        }, {
            key: 1,
            url: Pic1
        }, {
            key: 2,
            url: Pic2
        }, {
            key: 3,
            url: Pic3
        }, {
            key: 4,
            url: Pic4
        }, {
            key: 5,
            url: Pic5
        }, {
            key: 6,
            url: Pic6
        }, {
            key: 7,
            url: Pic7
        }, {
            key: 8,
            url: Pic8
        }],
        pic0: false,
        pic1: false,
        pic2: false,
        pic3: false,
        pic4: false,
        pic5: false,
        pic6: false,
        pic7: false,
        pic8: false
    }

    scramble = (event) => {
        let score = this.state.score
        console.log(this.state.score)
        event ? (score.includes(event.target.name) ?
            this.setState({ gameOver: true }) : score.push(event.target.name)) : null
        let newArr = scrambleArray(this.state.whichImages)
        event ?
            this.setState({
                whichImages: newArr,
                [event.target.name]: true,
                score: score
            }) :
            this.setState({
                whichImages: newArr
            })

    }

    render() {
        return (
            <div className="GameBody">
                <Counter
                    score={this.state.score}
                    topScore={this.state.topScore} />
                <main className="GameMain">
                    {this.state.gameOver ?
                        <div>
                            <h1 className='gameOverText'>Game over!</h1>
                            <img
                                className='gameOver'
                                src={GameOver}
                                alt='Game over' />
                        </div> :
                        <SwitchPics
                            whichImages={this.state.whichImages}
                            scramble={this.scramble}
                        />}
                </main>
            </div>
        );
    }
}


export default GameBody;