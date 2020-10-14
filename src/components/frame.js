import React from 'react';
import styled from 'styled-components';

const FrameContainer = styled.div `
    width: 89%;
    height: 40vh;
    bottom: 20%;
    padding: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 35px;
`

const FrameImage = styled.img `
    width: 100%;
    margin: 0 auto;
    display: block;
    height: 100%;
    object-fit: contain;
    border-radius: 5px;
    padding: 25px;
    box-shadow: inset 9.91px 9.91px 15px #434343, inset -9.91px -9.91px 15px #515151;
    border-radius: 25px;
`

function frame(props) {
    return (
        <FrameContainer>
            <FrameImage alt="frame" src={props.bgimg} />
        </FrameContainer>
    );
}

export default frame;