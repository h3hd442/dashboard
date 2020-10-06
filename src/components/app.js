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

const AppBody = styled.div`
background-repeat: no-repeat;
background-size: cover;
height: 100vh;
margin: 0;
padding: 0;
`
const GlobalStyle = createGlobalStyle`
  body {
    background: #89d28e;
  }
`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bgImg: '', bgImgLoaded: 'false', imageStatus: '', rssTable: ''}
    }
    
    async componentDidMount() {
        // const bgImg = await getWallpaper('cars');
        // this.setState({ bgImg });
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
                    <Clock />
                    <Slideshow array={this.state.rssTable} bgImg={this.state.bgImg} />
                </AppBody>
            );
        }
    }
}

export default App;