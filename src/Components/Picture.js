import React, { Component } from 'react';
import '../App.css';

class Picture extends Component {
    render() {
        return (
            <div className="Picture">
                <img src={this.props.url} alt={this.props.id} 
                clicked={this.props.clicked} />
            </div>
        );
    }
}

export default Picture;