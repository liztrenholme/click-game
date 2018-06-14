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

// onClick in html thing needed
// scramble() gets called at onClick (MUST be camelcase in React?)
class SwitchPics extends React.Component {

    state = {
        images: [{
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

    componentWillMount() {
        this.scramble();
    }

    scramble() {
        scrambleArray(this.state.images);
        this.setState(this.state);
    }

    imageClick(index, state) {
        //const img = this.state.images[index];
        //const img = this;
        //img.clicked[index] = false;
        
        //scramble(this.state.images);
         alert('clicked ' + index);
    }
    render() {
        return (
            <div>
                {this.state.images.map((img, index) =>
                    <Picture imageClick={this.imageClick} key={index} img={img} />
                )}
            </div>
        );
    }
}


export default SwitchPics;