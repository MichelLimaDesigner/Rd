import React, { Component } from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import {Container} from './generalComponents';
import { createGlobalStyle } from 'styled-components';
import Bg from './assets/bg/bg.jpg';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            theme: 'default'
        }
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme(){
        let theme = this.state.theme === 'default' ? 'blackfriday' : 'default';
        this.setState({ theme: theme });
    }

render(){

    const GlobalStyles = createGlobalStyle`
        :root{
            --primary: ${this.state.theme === 'default' ? '#007f56' : '#e55039'};
            --second: ${this.state.theme === 'default' ? '#868686' : '#696969'};
            --red: #fe9481;
            --yellow: #fcda92;
            --purple: #9c8cb9;
        }

        body {
            background-color: #363636;
            background-image: ${this.state.theme === 'default' ? `url(${Bg})` : 'none'};
        }
    `;

    return (
        <div className='app'>
            <GlobalStyles />
            <Header />
            <Content />
            <Cards toggleTheme={this.toggleTheme} />
            <Footer />
            <Container />
        </div>    
    );
}
}

export default App;
