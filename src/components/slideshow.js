import React, {useState, useEffect} from 'react';

function Slideshow(props) {


    return (
        <div className="slideshow-container">
            <h2>{props.array.data}</h2>
        </div>
    );

}

export default Slideshow;
