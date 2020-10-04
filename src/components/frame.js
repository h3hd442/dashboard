import React from 'react';
import styled from 'styled-components';

const FrameContainer = styled.div `
    width: 50vw;
    height: 40vh;
    -webkit-box-shadow: 0px 0px 84px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 84px -17px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 84px -17px rgba(0,0,0,0.75);
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    bottom: 20%;
    padding: 20px;
    background: black;
    border-radius: 5px;
`

const FrameImage = styled.img `
    width: 100%;
    height: 100%;
    object-fit: contain;
`

function frame(props) {
    return (
        <FrameContainer>
            <FrameImage alt="frame" src={props.bgimg} />
        </FrameContainer>
    );
}

export default frame;