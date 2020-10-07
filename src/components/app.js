import React from 'react';
import styled from 'styled-components';
import './App.css';
import {getWallpaper} from './unsplash';
import Clock from './clock';
import Loading from './loading';
import { createGlobalStyle } from 'styled-components';
import Slideshow from './slideshow';
import gradient from './gradient';
import {getRss} from './rssparser';
import {getWeather} from './weatherApi';
import Weather from './weather';
const AppBody = styled.div`
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
margin: 0;
padding: 0;
`
const GlobalStyle = createGlobalStyle`
  body {
    background: #4a4a4a;
  }
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bgImg: '', bgImgLoaded: 'false', imageStatus: '', rssTable: '', weather: ''}
    }
    
    async componentDidMount() {
        this.setState({ bgImgLoaded: 'true' })
        this.setState({ rssTable: await getRss() })
        this.setState({ weather: await getWeather() })
    }

    render() {
        if (!this.state.rssTable, !this.state.weather) {
            return <div>LOADING!!!</div>
        } else {
            return (
                <AppBody className="bodyapp">
                    <GlobalStyle />
                    <Clock />
                    <Weather weatherTable={this.state.weather}/>
                    <Slideshow array={this.state.rssTable} bgImg={this.state.bgImg} />
                </AppBody>
            );
        }
    }
}

export default App;