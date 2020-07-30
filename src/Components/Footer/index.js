import React from 'react';
import { FooterContent } from './styles';
import { Container } from '../../generalComponents';
import Bio from '../../assets/logos/4bio.png';
import DrogaRaia from '../../assets/logos/drogaraia.png';
import Drogasil from '../../assets/logos/drogasil.png';
import Farmasil from '../../assets/logos/farmasil.png';
import RdSmall from '../../assets/logos/rd-small.png';
import Univers from '../../assets/logos/univers.png';

export default function Footer(){
    return (
        <Container >
            <FooterContent >
                <figure>
                    <p> RD 2017 Todos os direitos reservados </p>
                    <a href="/">
                        <img src={ DrogaRaia } alt="Droga Raia"/>
                    </a>

                    <a href="/">
                        <img src={ Drogasil } alt="Drogail"/>
                    </a>

                    <a href="/">
                        <img src={ Farmasil } alt="Farmasil"/>
                    </a>

                    <a href="/">
                        <img src={ Univers } alt="Univers"/>
                    </a>

                    <a href="/">
                        <img src={ Bio } alt="4Bio"/>
                    </a>
                </figure>

                <a href="/">
                    <img src={ RdSmall } alt="RD"/>
                </a>
            </FooterContent>
        </Container>
    )
}