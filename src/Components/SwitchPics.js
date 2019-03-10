import React from 'react';
import '../App.css';
import Picture from './Picture';

class SwitchPics extends React.Component {
    componentDidMount() {
        this.props.scramble();
    }
    render() {
        // console.log(this.state.whichImages)
        return (
            <div className="grid-container">
                {this.props.whichImages.map(item => (
                    <div className="grid-item" key={item.key}>
                        <Picture
                            name={'pic' + item.key}
                            url={item.url}
                            onClick={this.props.scramble}
                            clicked={this.props['pic' + item.key]}
                        />
                    </div>
                ))}
            </div>
        );
    }
}


export default SwitchPics;