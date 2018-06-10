import React from 'react';
import '../App.css';
const pictureNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
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

//var a = [1, 2, 3, 4, 5, 6, 7, 8];
const shuffled = scramble(pictureNums);
    console.log(shuffled);

    const PicRender1 = require("../images/pic" + shuffled[0] + ".jpg");
    const PicRender2 = require("../images/pic" + shuffled[1] + ".jpg");
    const PicRender3 = require("../images/pic" + shuffled[2] + ".jpg");
    const PicRender4 = require("../images/pic" + shuffled[3] + ".jpg");
    const PicRender5 = require("../images/pic" + shuffled[4] + ".jpg");
    const PicRender6 = require("../images/pic" + shuffled[5] + ".jpg");
    const PicRender7 = require("../images/pic" + shuffled[6] + ".jpg");
    const PicRender8 = require("../images/pic" + shuffled[7] + ".jpg");
    const PicRender9 = require("../images/pic" + shuffled[8] + ".jpg");

// onClick in html thing needed
// study up on state
// scramble() gets called at onClick (MUST be camelcase in React?)
class SwitchPics extends React.Component {
    render() {
        return (
            <div>
            <img src={PicRender1} id="1" alt="one" onClick={console.log(this)} />
            <img src={PicRender2} id="2" alt="two" onClick={console.log(this)}/>
            <img src={PicRender3} id="3" alt="three" onClick={console.log(this)}/>
            <img src={PicRender4} id="4" alt="four" onClick={console.log(this)}/>
            <img src={PicRender5} id="5" alt="five" onClick={console.log(this)}/>
            <img src={PicRender6} id="6" alt="six" onClick={console.log(this)}/>
            <img src={PicRender7} id="7" alt="seven" onClick={console.log(this)}/>
            <img src={PicRender8} id="8" alt="eight" onClick={console.log(this)}/>
            <img src={PicRender9} id="9" alt="nine" onClick={console.log(this)}/>
            </div>
        );
    }
}


export default SwitchPics;