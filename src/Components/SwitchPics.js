import React, { Component } from 'react';
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
}; //how do I scarmble the pictures here? map()? rand?


//var a = [1, 2, 3, 4, 5, 6, 7, 8];
let b = scramble(pictureNums);
console.log(b);
// [2, 7, 8, 6, 5, 3, 1, 4]

// onClick in html thing needed
// study up on state
// scramble() gets called at onClick (MUST be camelcase in React?)
class SwitchPics extends React.Component {
    render() {
        return (
            <div>
            <img src={require("../images/pic1.jpg")} id="1" alt="one" />
            <img src={require("../images/pic2.jpg")} id="2" alt="two" />
            <img src={require("../images/pic3.jpg")} id="3" alt="three" />
            <img src={require("../images/pic4.jpg")} id="4" alt="four" />
            <img src={require("../images/pic5.jpg")} id="5" alt="five" />
            <img src={require("../images/pic6.jpg")} id="6" alt="six" />
            <img src={require("../images/pic7.jpg")} id="7" alt="seven" />
            <img src={require("../images/pic8.jpg")} id="8" alt="eight" />
            <img src={require("../images/pic9.jpg")} id="9" alt="nine" />
            
            </div>
            // state = {
            //   //?
            // };
        );
    }
}


export default SwitchPics;