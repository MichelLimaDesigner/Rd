import React from 'react';
import { Menu } from './styles';
import { Container } from '../../generalComponents';
import Logo from '../../assets/logos/rd.png';

export default function Header(){
    return(
        <Menu >
            <Container >
                <nav>
                    <figure>
                        <img src={Logo} alt="logo rd"/>
                    </figure>

                    <ul>
                        <li> <a href="/"> HTML5 </a></li>
                        <li> <a href=""> CSS3 </a></li>
                        <li>  <a href=""> JAVASCRIPT </a></li>
                        <li> <a href=""> REACT </a></li>
                        <li>  <a href=""> REDUX </a></li>
                    </ul>
                </nav>
            </Container>
        </Menu>
    )
}