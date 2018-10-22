import React, { Component } from 'react';
import '../App.css';

class Picture extends Component {
    render() {
        return (
            <div className="Picture">
                <img src={this.props.url} alt={this.props.id} 
                clicked={this.props.clicked} />
                {/* {console.log(this.props.url)} */}
            </div>
        );
    }
}


export default Picture;