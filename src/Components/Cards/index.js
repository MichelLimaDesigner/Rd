import React, { Component } from 'react';
import { CardsCotainer, CardContent } from './styles';
import { Container } from '../../generalComponents';
import ThemeSwitcher from './ThemeSwitcher';

import Desktop from '../../assets/cards/desktop.png';
import Tablet from '../../assets/cards/tablet.png';
import Mobile from '../../assets/cards/mobile.png';

export default class Cards extends Component {
    constructor(props){
        super(props);

        this.state = {
            content: ''
        }

        this.hideCotent = this.hideCotent.bind(this);
    }

    showContent(event){
        this.setState({ content: event.target.previousSibling.innerText });
    }

    hideCotent(){
        this.setState({ content: '' });
    }

    render(){
        return(
            <Container >
                <CardsCotainer >
                    <div className="card">
                        <figure className="card__img red">
                            <img src={Desktop} alt="Desktop"/>
                            <h3> Site Responsivo DESKTOP </h3>
                        </figure>
    
                        <div className="card__body">
                            <p> Quando precionado o botão <b>leia mais... </b> o restante da informação deverá aparecer em scroll down. </p>
                            <button className="red" onClick={ (event)=> this.showContent (event)}> Leia mais.. </button>
                        </div>
                    </div>
    
                    <div className="card">
                        <figure className="card__img yellow">
                            <img src={Tablet} alt="Tablet"/>
                            <h3> Site Responsivo TABLET </h3>
                        </figure>
    
                        <div className="card__body">
                            <p> Quando precionado o botão <b>leia mais... </b> informação deverá aparecer completa em um popup na tela. </p>
                            <button className="yellow" onClick={ (event)=> this.showContent (event)}> Leia mais.. </button>
                        </div>
                    </div>
    
                    <div className="card">
                        <figure className="card__img purple">
                            <img src={Mobile} alt="Mobile"/>
                            <h3> Site Responsivo MOBILE </h3>
                        </figure>
    
                        <div className="card__body">
                            <p> Quando precionado o botão <b> alterar tema </b> modifique o tema do site para blackfriday a seu gosto. </p>
                            <ThemeSwitcher toggleTheme={this.props.toggleTheme} />
                        </div>
                    </div>
                </CardsCotainer>
                
                {
                    this.state.content ? (
                    <CardContent >
                        <div className="modal">
                            {this.state.content}
                        </div>
                        <div className="lightbox" onClick={this.hideCotent}></div>
                    </CardContent>
                    ) : ''
                }
            </Container>
        )
    }
}