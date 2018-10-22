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
    constructor(props) {
        super(props);
        this.imageClick = this.imageClick.bind(this);
      }
    state = {
        score: 0,
        topScore: 0,
        whichImages: [{
            id: 0,
            url: Pic1,
            clicked: false
        }, {
            id: 1,
            url: Pic2,
            clicked: false
        }, {
            id: 2,
            url: Pic3,
            clicked: false
        }, {
            id: 3,
            url: Pic4,
            clicked: false
        }, {
            id: 4,
            url: Pic5,
            clicked: false
        }, {
            id: 5,
            url: Pic6,
            clicked: false
        }, {
            id: 6,
            url: Pic7,
            clicked: false
        }, {
            id: 7,
            url: Pic8,
            clicked: false
        }, {
            id: 8,
            url: Pic9,
            clicked: false
        }]
    }

    componentDidMount() {
        this.scramble();
    }

    // componentDidMount() {
    //     this.setState({ whichImages: this.scramble(this.state.whichImages) });
    //   }

    scramble(whichImages) {
        scrambleArray(this.state.whichImages);
        this.setState(this.state);
    }

    // showImages(img) {
    //     if (img.clicked === false) {
    //         img.clicked = true;
    //     }
    // }

    // imageClick(event, showImages) {
    //     let img = event.target.img;
    //     //const img = this.state.images[index];
    //     //const img = this;
    //     //img.clicked[index] = false;
    //     this.setState = {
    //         whichImages: showImages.scramble(img)
    //     }
    // }
    imageClick = id => {
        let guessedCorrectly = false;
        const newData = this.state.data.map(item => {
          const newItem = { ...item };
          if (newItem.id === id) {
            if (!newItem.clicked) {
              newItem.clicked = true;
              guessedCorrectly = true;
            }
          }
          return newItem;
        });
        guessedCorrectly
          ? this.handleCorrectGuess(newData)
          : this.handleIncorrectGuess(newData);
      };

    render() {
        return (
            <div>
                {/* {{this.state.whichImages.map((img, index) =>
                    <Picture onClick={this.imageClick.bind(this)} key={index} img={img} />
                )}} */}
                {this.state.whichImages.map(item => (
            <Picture
              key={item.id}
              id={item.id}
              scramble={!this.state.score && this.state.topScore}
              handleClick={this.imageClick}
              image={item.img}
            />
          ))}
            </div>
        );
    }
}


export default SwitchPics;