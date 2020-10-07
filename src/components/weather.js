import React from 'react';
import styled from 'styled-components';


const WeatherContainer = styled.div`
     font-size: 25px;
     color: #bfbfbf;
     font-family: 'Lato', sans-serif;
     display: flex;
     justify-content: center;
     align-items: center;
     box-shadow: 9.91px 9.91px 15px #434343, -9.91px -9.91px 15px #515151;
     border-radius: 25px;
     padding: 20px;
     margin-bottom: 40px;
     margin-top: 40px;
     span {
          margin-left: 10px;
          margin-right: 10px;
          box-shadow: inset 9.91px 9.91px 15px #434343, inset -9.91px -9.91px 15px #515151;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 25px;
          padding: 25px 25px 25px 25px;
          span {
               box-shadow: none;
               padding: 0px;
          }
     }

     span:last-of-type {
          padding: 15px;
     }
`

const WeatherIcon = styled.img`
     -webkit-filter: grayscale(100%);
     filter: grayscale(100%);
     transform: scale(1.1);
`


function Loading(props) {
    const weather = props.weatherTable;
    console.log(weather);
    return (
        <WeatherContainer>
            <span>Temperatura:
                <span>{weather.main.temp}</span>
            </span>
            <span>Odczuwalna:
                <span>{weather.main.feels_like}</span>
            </span>
            <span>Ciśnienie:
                <span>{weather.main.pressure}</span>
            </span>
            <span>
                 <span><WeatherIcon src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon"/></span>
            </span>
        </WeatherContainer>
    );
}

export default Loading;