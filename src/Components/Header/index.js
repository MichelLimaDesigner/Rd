import React from 'react';
import { Menu } from './styles';
import { Container } from '../../generalComponents';
import Logo from '../../assests/rd.png';

export default function Header(){
    return(
        <Menu >
            <Container >
                <nav>
                    <figure>
                        <img src={Logo} alt="logo rd"/>
                    </figure>

                    <ul>
                        <li> HTML5 </li>
                        <li> CSS3 </li>
                        <li> JAVASCRIPT </li>
                        <li> REACT </li>
                        <li> REDUX </li>
                    </ul>
                </nav>
            </Container>
        </Menu>
    )
}