import React from 'react';

const Picture = (props) => {
    return (
    
    //     <img src={props.img.url} alt="img"
    //         onClick={() => props.imageClick.bind(props)}
    //     />
    // ;
    // return (
    //         <img src={props.img.url} />
    // );
<div
    role="img"
    onClick={() => props.imageClick(props.id)}
  />
    )
}



export default Picture;