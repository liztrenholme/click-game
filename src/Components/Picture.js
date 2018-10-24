import React, { Component } from 'react';
import '../App.css';

class Picture extends Component {
    render() {
        return (
            <div className="Picture">
                <img src={this.props.url} alt={this.props.id} 
                clicked={this.props.clicked} onClick={this.props.onClick}/>
            </div>
        );
    }
}

export default Picture;