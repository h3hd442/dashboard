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

const rssTable = '';

const elo = 'yellow';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${elo};
  }
`

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { bgImg: '', bgImgLoaded: 'false', imageStatus: '', rssTable: ''}
    }
    
    async componentDidMount() {
        const bgImg = await getWallpaper('cars');
        this.setState({ bgImg });
        this.setState({ bgImgLoaded: 'true' })
        this.setState({ rssTable: await getRss() })
    }

    render() {
        return (
            <AppBody className="bodyapp">
                <GlobalStyle />
                <Slideshow array={this.state.rssTable} />
                <div><Clock /></div>
                <div><Loading  bgImg={this.state.bgImg} bgImgLoaded={this.state.bgImgLoaded} /></div>
            </AppBody>
        );
    }
}

export default App;