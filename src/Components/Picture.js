import React, { Component } from 'react';
import '../App.css';

class Picture extends Component {
    render() {
        const id = this.props.url.split('.')[1]
        // console.log(this.props.name, this.props.clicked)
        return (
            <div className="Picture">
                <img 
                className='avatar'
                name={this.props.name}
                src={this.props.url} 
                alt={id}
                clicked={this.props.clicked}
                onClick={this.props.onClick}/>
            </div>
        );
    }
}

export default Picture;