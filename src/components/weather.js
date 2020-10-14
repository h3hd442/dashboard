import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint, faMoon } from '@fortawesome/free-solid-svg-icons'


const WeatherContainer = styled.div`
     font-size: 15px;
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
     width: 100%;
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
     span:nth-of-type(3) {
        font-size: 20px; 
     }
     span:nth-of-type(2) {
        padding-top: 10px;
        padding-bottom: 10px;
     }


`

const WeatherIcon = styled.img`
     -webkit-filter: grayscale(100%);
     filter: grayscale(100%);
     transform: scale(1.1);
`


function Loading(props) {
    const weather = props.weatherTable;
    const [date, setDate] = useState(() => new Date());
    

    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(interval);
      });
      
    return (
        <WeatherContainer>
            <span><FontAwesomeIcon icon={faTint} />
                <span>{weather.main.humidity} %</span>
            </span>
            <span><WeatherIcon src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather icon"/>
                <span>{weather.main.temp}  °C</span>
            </span>
            <span>
                <span>{date.getHours()}</span>
                <span>{date.getMinutes()}</span>
                <span>{date.getSeconds()}</span>
            </span>
            <span><FontAwesomeIcon icon={faMoon} />
                <span>{weather.main.feels_like}  °C</span>
            </span>
            <span>
                <span>{weather.main.pressure} hPa </span>
            </span>
        </WeatherContainer>
    );
}

export default Loading;