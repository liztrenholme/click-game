import React from 'react';

const Picture = (props) => {
    (
        <img src={props.img.url} alt="img"
            onClick={() => props.imageClick(props.id)}
        />
    );
    return (
            <img src={props.img.url} />
    );
}



export default Picture;