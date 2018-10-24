import React from 'react';
//import '../App.css';
import Picture from './Picture';
import Pic1 from '../images/pic1.jpg';
import Pic2 from '../images/pic2.jpg';
import Pic3 from '../images/pic3.jpg';
import Pic4 from '../images/pic4.jpg';
import Pic5 from '../images/pic5.jpg';
import Pic6 from '../images/pic6.jpg';
import Pic7 from '../images/pic7.jpg';
import Pic8 from '../images/pic8.jpg';
import Pic9 from '../images/pic9.jpg';

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

class SwitchPics extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        whichImages: [{
            key: 0,
            url: Pic1,
            clicked: false
        }, {
            key: 1,
            url: Pic2,
            clicked: false
        }, {
            key: 2,
            url: Pic3,
            clicked: false
        }, {
            key: 3,
            url: Pic4,
            clicked: false
        }, {
            key: 4,
            url: Pic5,
            clicked: false
        }, {
            key: 5,
            url: Pic6,
            clicked: false
        }, {
            key: 6,
            url: Pic7,
            clicked: false
        }, {
            key: 7,
            url: Pic8,
            clicked: false
        }, {
            key: 8,
            url: Pic9,
            clicked: false
        }]
    }

    componentDidMount() {
        this.scramble();
    }

    scramble() {
        scrambleArray(this.state.whichImages);
        this.setState(this.state);
    }
    // imageClick = id => {
    //     let guessedCorrectly = false;
    //     const newData = this.state.data.map(item => {
    //         const newItem = { ...item };
    //         if (newItem.id === id) {
    //             if (!newItem.clicked) {
    //                 newItem.clicked = true;
    //                 guessedCorrectly = true;
    //             }
    //         }
    //         return newItem;
    //     });
    //     guessedCorrectly
    //         ? this.handleCorrectGuess(newData)
    //         : this.handleIncorrectGuess(newData);
    // };

    render() {
        return (
            <div className="grid-container">
                {/* {this.state.whichImages.map((img, index) =>
                    <Picture onClick={this.imageClick.bind(this)} key={index} img={img} />
                )} */}
                {this.state.whichImages.map(item => (
                    <div className="grid-item">
                        <Picture
                            key={item.key}
                            id={item.key}
                            scramble={!item.score && item.topScore}
                            handleClick={item.imageClick}
                            url={item.url}
                        />
                    </div>
                ))}
            </div>
        );
    }
}


export default SwitchPics;