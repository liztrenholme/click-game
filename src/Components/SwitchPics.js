import React from 'react';
import '../App.css';
import Pictures from './Pictures';
// import Pic1 from '../images/pic1.jpg';
// import Pic2 from '../images/pic2.jpg';
// import Pic3 from '../images/pic3.jpg';
// import Pic4 from '../images/pic4.jpg';
// import Pic5 from '../images/pic5.jpg';
// import Pic6 from '../images/pic6.jpg';
// import Pic7 from '../images/pic7.jpg';
// import Pic8 from '../images/pic8.jpg';
// import Pic9 from '../images/pic9.jpg';

//const id = pictureNums[8];
const scramble = (arr) => {
    //this.setState({ count: this.state.count + 1 });
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


// const Pic1 = require("../images/pic" + shuffled[0] + ".jpg");
// const Pic2 = require("../images/pic" + shuffled[1] + ".jpg");
// const Pic3 = require("../images/pic" + shuffled[2] + ".jpg");
// const Pic4 = require("../images/pic" + shuffled[3] + ".jpg");
// const Pic5 = require("../images/pic" + shuffled[4] + ".jpg");
// const Pic6 = require("../images/pic" + shuffled[5] + ".jpg");
// const Pic7 = require("../images/pic" + shuffled[6] + ".jpg");
// const Pic8 = require("../images/pic" + shuffled[7] + ".jpg");
// const Pic9 = require("../images/pic" + shuffled[8] + ".jpg");


// onClick in html thing needed
// scramble() gets called at onClick (MUST be camelcase in React?)
class SwitchPics extends React.Component {

    state = {
        images: [{
            url: Pic1,
            clicked: false
        }, {
            url: Pic2,
            clicked: false
        }, {
            url: Pic3,
            clicked: false
        }, {
            url: Pic4,
            clicked: false
        }, {
            url: Pic5,
            clicked: false
        }, {
            url: Pic6,
            clicked: false
        }, {
            url: Pic7,
            clicked: false
        }, {
            url: Pic8,
            clicked: false
        }, {
            url: Pic9,
            clicked: false
        }]
    }

    componentWillMount() {
        scramble(this.state.images);
        this.setState(this.state);
    }

    // this needs to be in its own component in its own file, passing data into it and 
    // out in order to change the state, then import into here!
    shuffleOnClick = event => {
        const img = event.target; // this is equal to 'var img = event.target.img;'
        alert(img.alt);
        /*this.setState({
            img: shuffled,
            count: 0
        })
        const increment = () => {
            this.setState({ count: this.state.count + 1 });
        }; */
        
    } 


    render() {
        return (
            <div>
                {this.state.images.map((img) =>
                    <img src={img.url} alt="" onClick={this.shuffleOnClick} />
                )}
            </div>
        );
    }
}


export default SwitchPics;