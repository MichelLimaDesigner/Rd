import React from 'react';
import { CardsCotainer } from './styles';
import { Container } from '../../generalComponents';

import Desktop from '../../assets/cards/desktop.png';
import Tablet from '../../assets/cards/tablet.png';
import Mobile from '../../assets/cards/mobile.png';

export default function Cards(){
    return(
        <Container >
            <CardsCotainer >
                <div className="card">
                    <figure className="card__img red">
                        <img src={Desktop} alt="Desktop image"/>
                        <h3> Site Responsivo DESKTOP </h3>
                    </figure>

                    <div className="card__body">
                        <p> Quando precionado o botão <b>leia mais... </b> o restante da informação deverá aparecer em scroll down. </p>
                        <button className="red"> Leia mais.. </button>
                    </div>
                </div>

                <div className="card">
                    <figure className="card__img yellow">
                        <img src={Tablet} alt="Tablet image"/>
                        <h3> Site Responsivo TABLET </h3>
                    </figure>

                    <div className="card__body">
                        <p> Quando precionado o botão <b>leia mais... </b> informação deverá aparecer completa em um popup na tela. </p>
                        <button className="yellow"> Leia mais.. </button>
                    </div>
                </div>

                <div className="card">
                    <figure className="card__img purple">
                        <img src={Mobile} alt="Mobile image"/>
                        <h3> Site Responsivo MOBILE </h3>
                    </figure>

                    <div className="card__body">
                        <p> Quando precionado o botão <b> alterar tema </b> modifique o tema do site para blackfriday a seu gosto. </p>
                        <button className="purple"> Alterar tema </button>
                    </div>
                </div>
            </CardsCotainer>
        </Container>
    )
}