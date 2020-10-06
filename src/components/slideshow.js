import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Frame from './frame';


function Slideshow(props) {

    const [count, setCount] = useState(0);


    useEffect(() => {
        setInterval(() => {
            setCount((count) => {
                if (count === 9) {
                  return 0;
                } else {
                  return count + 1;
                }
              });
    }, 155000);
      }, []);
      
    const SlideshowContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #4a4a4a;
        box-shadow: 9.91px 9.91px 15px #434343, -9.91px -9.91px 15px #515151;
        padding: 20px;
        padding-bottom: 30px;
        border-radius: 10px;
    `

    const SlideshowTitle = styled.h2`
        font-size: 16px;
        color: #bfbfbf;
        box-shadow: inset 9.91px 9.91px 15px #434343, inset -9.91px -9.91px 15px #515151;
        padding: 30px;
        border-radius: 51px;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
    `

    return (
            <SlideshowContainer>
            <SlideshowTitle>{props.array.items[count].title}</SlideshowTitle>
            <Frame bgimg={ props.array.items[count].thumbnail } alt="news thumbnail"/>
            </SlideshowContainer>
    );

}

export default Slideshow;