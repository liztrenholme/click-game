import React from 'react';
import Pic1 from '../images/pic1.jpg';
import Pic2 from '../images/pic2.jpg';
import Pic3 from '../images/pic3.jpg';
import Pic4 from '../images/pic4.jpg';
import Pic5 from '../images/pic5.jpg';
import Pic6 from '../images/pic6.jpg';
import Pic7 from '../images/pic7.jpg';
import Pic8 from '../images/pic8.jpg';
import Pic9 from '../images/pic9.jpg';

class SwitchPics extends React.Component {
    shuffleOnClick = event => {
        const img = event.target; // this is equal to 'var img = event.target.img;'
        alert(img.alt);
    }
}


export default Pictures;