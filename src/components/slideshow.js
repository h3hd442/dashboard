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
    }, 1000);
      }, []);
      
    const SlideshowContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background: #89d28e;
        box-shadow: 9.91px 9.91px 15px #7DBF81, -9.91px -9.91px 15px #95E59B;
        padding: 20px;
        padding-bottom: 30px;
    `

    const SlideshowTitle = styled.h2`
        font-size: 30px;
        color: white;
        box-shadow: inset 9.91px 9.91px 15px #7DBF81, inset -9.91px -9.91px 15px #95E59B;
        padding: 30px;
        border-radius: 51px;
    `

    return (
            <SlideshowContainer>
                <div>{count}</div>
            <SlideshowTitle>{props.array.items[count].title}</SlideshowTitle>
            <Frame bgimg={ props.array.items[count].thumbnail } alt="news thumbnail"/>
            </SlideshowContainer>
    );

}

export default Slideshow;