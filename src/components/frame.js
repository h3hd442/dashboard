import React from 'react';
import styled from 'styled-components';

const FrameContainer = styled.div `
    width: 50vw;
    height: 40vh;
    bottom: 20%;
    padding: 20px;
`

const FrameImage = styled.img `
    width: auto;
    margin: 0 auto;
    display: block;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
`

function frame(props) {
    return (
        <FrameContainer>
            <FrameImage alt="frame" src={props.bgimg} />
        </FrameContainer>
    );
}

export default frame;