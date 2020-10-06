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
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css'

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
        this.state = { bgImg: '', bgImgLoaded: 'false', imageStatus: '', rssTable: ''}
    }
    
    async componentDidMount() {
        this.setState({ bgImgLoaded: 'true' })
        this.setState({ rssTable: await getRss() })
    }

    render() {
        if (!this.state.rssTable) {
            return <div>LOADING!!!</div>
        } else {
            return (
                <AppBody className="bodyapp">
                    <GlobalStyle />
                    <FlexContainer>
                    <Clock />
                    <ReactWeather
                    forecast="today"
                    apikey="2b66e599cd966e6ef3f87187ad4fa994"
                    type="geo"
                    lat="48.1351"
                    lon="11.5820"
                    /></FlexContainer>
                    <Slideshow array={this.state.rssTable} bgImg={this.state.bgImg} />
                </AppBody>
            );
        }
    }
}

export default App;